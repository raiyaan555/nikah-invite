import { NextResponse } from "next/server";
import { adminPassword, cookieName, cookieOptions, passwordMatches, sessionToken } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function redirectToAdmin(request: Request, error?: string) {
  const url = new URL("/admin", request.url);
  if (error) url.searchParams.set("error", error);
  return url;
}

export async function POST(request: Request) {
  if (!adminPassword()) {
    return NextResponse.redirect(redirectToAdmin(request, "unconfigured"), 303);
  }

  let password = "";
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as { password?: unknown } | null;
    password = typeof body?.password === "string" ? body.password : "";
  } else {
    const form = await request.formData();
    password = String(form.get("password") || "");
  }

  if (!passwordMatches(password)) {
    return NextResponse.redirect(redirectToAdmin(request, "invalid"), 303);
  }

  const token = sessionToken();
  if (!token) {
    return NextResponse.redirect(redirectToAdmin(request, "unconfigured"), 303);
  }

  const response = NextResponse.redirect(redirectToAdmin(request), 303);
  response.cookies.set(cookieName, token, cookieOptions());
  return response;
}
