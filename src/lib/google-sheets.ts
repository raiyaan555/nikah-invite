import { createSign } from "node:crypto";

const tokenUrl = "https://oauth2.googleapis.com/token";
const sheetsScope = "https://www.googleapis.com/auth/spreadsheets";

const headerRow = [
  "timestamp",
  "name",
  "attending",
  "guests",
  "events",
  "dietary",
  "message",
  "invitation source",
] as const;

export type GroomSheetRow = {
  timestamp: string;
  name: string;
  attending: string;
  guests: number;
  events: string;
  dietary: string;
  message: string;
};

type SheetConfig = {
  email: string;
  privateKey: string;
  spreadsheetId: string;
  tab: string;
};

export class SheetConfigError extends Error {
  constructor() {
    super("Google Sheet is not configured.");
    this.name = "SheetConfigError";
  }
}

export class SheetAppendError extends Error {
  constructor() {
    super("Google Sheet did not accept the reply.");
    this.name = "SheetAppendError";
  }
}

function privateKeyFromEnv(value: string) {
  const trimmed = value.trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;
  return unquoted.replace(/\\n/g, "\n");
}

function readSheetConfig(): SheetConfig {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
    ? privateKeyFromEnv(process.env.GOOGLE_PRIVATE_KEY)
    : "";
  const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim();
  const tab = process.env.GOOGLE_SHEET_TAB?.trim() || "Sheet1";

  if (!email || !privateKey || !spreadsheetId) {
    throw new SheetConfigError();
  }

  return { email, privateKey, spreadsheetId, tab };
}

function sheetRange(tab: string, cells: string) {
  const safe = /^[A-Za-z0-9_]+$/.test(tab) ? tab : `'${tab.replace(/'/g, "''")}'`;
  return `${safe}!${cells}`;
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}

async function accessToken(email: string, privateKey: string) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: email,
      scope: sheetsScope,
      aud: tokenUrl,
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  );
  const unsigned = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const assertion = `${unsigned}.${signer.sign(privateKey).toString("base64url")}`;

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) throw new SheetAppendError();

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) throw new SheetAppendError();
  return data.access_token;
}

async function sheetsFetch(token: string, url: string, init?: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) throw new SheetAppendError();
  return response;
}

async function ensureHeader(config: SheetConfig, token: string) {
  const range = encodeURIComponent(sheetRange(config.tab, "A1:H1"));
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.spreadsheetId)}/values/${range}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new SheetAppendError();

  const data = (await response.json()) as { values?: string[][] };
  if (data.values?.length) return;

  await sheetsFetch(token, `${url}?valueInputOption=USER_ENTERED`, {
    method: "PUT",
    body: JSON.stringify({ values: [headerRow] }),
  });
}

export async function appendGroomRsvp(row: GroomSheetRow) {
  const config = readSheetConfig();
  const token = await accessToken(config.email, config.privateKey);
  await ensureHeader(config, token);

  const range = encodeURIComponent(sheetRange(config.tab, "A:H"));
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.spreadsheetId)}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  await sheetsFetch(token, url, {
    method: "POST",
    body: JSON.stringify({
      values: [[
        row.timestamp,
        row.name,
        row.attending,
        row.guests,
        row.events,
        row.dietary,
        row.message,
        "groom",
      ]],
    }),
  });
}
