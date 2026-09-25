export type DietaryChoice = "veg" | "non-veg";

export type RsvpPayload = {
  attending: boolean;
  name: string;
  guestCount: number;
  events: string[];
  dietary: DietaryChoice | "";
  message: string;
  submittedAt: string;
  invitationSource?: "groom";
};

export function isGroomInvitationPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return path === "/groom" || path.endsWith("/groom");
}

export type RsvpResult = {
  ok: boolean;
  error?: string;
};

const publicRsvpUrl = process.env.NEXT_PUBLIC_RSVP_API_URL?.trim() ?? "";
const staticSite = Boolean(process.env.NEXT_PUBLIC_BASE_PATH?.trim());

function groomEndpoint() {
  if (publicRsvpUrl) return publicRsvpUrl;
  if (staticSite) return "";
  return "/api/rsvp";
}

async function readRsvpResult(response: Response): Promise<RsvpResult> {
  const data = (await response.json().catch(() => ({}))) as RsvpResult;
  if (!response.ok || !data.ok) {
    return {
      ok: false,
      error: data.error ?? "We could not save your reply. Please try again.",
    };
  }
  return { ok: true };
}

export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResult> {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("wedding:rsvp", JSON.stringify(payload));
  }

  const isGroom = payload.invitationSource === "groom";
  const endpoint = isGroom ? groomEndpoint() : "/api/rsvp";
  if (!endpoint) {
    return {
      ok: false,
      error: "We could not save your reply. Please try again.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        // Apps Script only answers simple CORS requests. application/json
        // triggers a preflight that the Web App cannot accept.
        "Content-Type":
          isGroom && publicRsvpUrl ? "text/plain;charset=utf-8" : "application/json",
      },
      body: JSON.stringify(payload),
    });
    return readRsvpResult(response);
  } catch {
    return {
      ok: false,
      error: "We could not save your reply. Please check your connection and try again.",
    };
  }
}

export function readRsvpDraft(): RsvpPayload | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem("wedding:rsvp");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RsvpPayload;
  } catch {
    return null;
  }
}
