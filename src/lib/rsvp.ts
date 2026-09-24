export type DietaryChoice = "veg" | "non-veg";

export type RsvpPayload = {
  attending: boolean;
  name: string;
  guestCount: number;
  events: string[];
  dietary: DietaryChoice | "";
  message: string;
  submittedAt: string;
};

export type RsvpResult = {
  ok: boolean;
  error?: string;
};

export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResult> {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("wedding:rsvp", JSON.stringify(payload));
  }

  try {
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => ({}))) as RsvpResult;
    if (!response.ok || !data.ok) {
      return {
        ok: false,
        error: data.error ?? "We could not save your reply. Please try again.",
      };
    }
    return { ok: true };
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
