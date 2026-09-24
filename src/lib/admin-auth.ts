import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "invitation_admin";

function adminToken(password: string) {
  return createHmac("sha256", password).update("invitation-admin").digest("base64url");
}

function tokensMatch(input: string, expected: string) {
  const left = Buffer.from(input);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function adminPassword() {
  const password = process.env.ADMIN_PASSWORD?.trim();
  return password || null;
}

export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  };
}

export async function isAdminAuthenticated() {
  const password = adminPassword();
  if (!password) return false;

  const store = await cookies();
  const token = store.get(cookieName)?.value;
  if (!token) return false;
  return tokensMatch(token, adminToken(password));
}

export function passwordMatches(input: string) {
  const password = adminPassword();
  if (!password) return false;
  return tokensMatch(adminToken(input), adminToken(password));
}

export function sessionToken() {
  const password = adminPassword();
  if (!password) return null;
  return adminToken(password);
}

export { cookieName };
