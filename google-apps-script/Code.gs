/**
 * Public Groom RSVP endpoint for the GitHub Pages site.
 *
 * Deploy from the Google Sheet: Extensions → Apps Script → paste this file →
 * Deploy → New deployment → Web app.
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Google answers simple POST requests with Access-Control-Allow-Origin: *.
 * The Groom page sends Content-Type: text/plain so the browser does not
 * send a preflight.
 */
const SHEET_ID = "1Jk5KuBve_MH6vPfD77SQ_RJU-unYOiZ5fcVQuOy-WR8";
const SHEET_TAB = "Sheet1";

const HEADER = [
  "timestamp",
  "name",
  "attending",
  "guests",
  "events",
  "dietary",
  "message",
  "invitation source",
];

function doGet() {
  return json({ ok: true });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  let locked = false;
  try {
    locked = lock.tryLock(10000);
    if (!locked) {
      return json({ ok: false, error: "We could not save your reply. Please try again." });
    }

    const payload = readPayload(e);
    if (!payload.ok) return json({ ok: false, error: payload.error });

    appendRow(payload.row);
    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: "Could not reach the Google Sheet. Please try again." });
  } finally {
    if (locked) lock.releaseLock();
  }
}

function readPayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return { ok: false, error: "Invalid reply." };
  }

  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (error) {
    return { ok: false, error: "Invalid reply." };
  }

  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid reply." };
  }

  if (body.invitationSource !== "groom") {
    return { ok: false, error: "Invalid reply." };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (!name || name.length > 200) {
    return { ok: false, error: "Please complete the required fields." };
  }

  if (typeof body.attending !== "boolean") {
    return { ok: false, error: "Please complete the required fields." };
  }

  if (!isGuestCount(body.guestCount) || body.guestCount > 20) {
    return { ok: false, error: "Please complete the required fields." };
  }

  if (!Array.isArray(body.events) || body.events.length > 20) {
    return { ok: false, error: "Please complete the required fields." };
  }

  const events = [];
  for (let i = 0; i < body.events.length; i++) {
    const event = body.events[i];
    if (typeof event !== "string" || !event.trim() || event.length > 100) {
      return { ok: false, error: "Please complete the required fields." };
    }
    events.push(event.trim());
  }

  const dietary = typeof body.dietary === "string" ? body.dietary : "";
  if (dietary !== "" && dietary !== "veg" && dietary !== "non-veg") {
    return { ok: false, error: "Please complete the required fields." };
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (message.length > 2000) {
    return { ok: false, error: "Please complete the required fields." };
  }

  const submittedAt = typeof body.submittedAt === "string" ? body.submittedAt.trim() : "";
  if (!submittedAt || submittedAt.length > 40) {
    return { ok: false, error: "Invalid reply." };
  }

  if (body.attending) {
    if (body.guestCount < 1 || events.length === 0 || !dietary) {
      return { ok: false, error: "Please complete the required fields." };
    }
  }

  return {
    ok: true,
    row: [
      submittedAt,
      name,
      body.attending ? "Yes" : "No",
      body.attending ? body.guestCount : 0,
      body.attending ? events.join(", ") : "",
      body.attending ? dietary : "",
      message,
      "groom",
    ],
  };
}

function isGuestCount(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value && value >= 0;
}

function appendRow(row) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_TAB);
  if (!sheet) {
    throw new Error("Sheet tab was not found.");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER);
  }

  sheet.appendRow(row);
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
