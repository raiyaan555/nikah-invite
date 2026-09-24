import type { InvitationType } from "@/types/guest";

export type InvitationEventCopy = {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  content: string;
};

export const weddingConfig = {
  couple: {
    brideName: "Nadiya",
    groomName: "Raiyaan",
  },

  preface: "Together with their families",

  wedding: {
    title: "Nikah",
    date: "Saturday, 9 January 2027",
    time: "Time to be announced",
    venue: "MB Club",
    address: "202, M.G. Marg, Cantonment\nLucknow\nUttar Pradesh 226002",
    content: "please save the date\nand let us know if you can join us",
  },

  reception: {
    title: "Walima Reception",
    date: "Sunday, 10 January 2027",
    time: "Time to be announced",
    venue: "MB Club",
    address: "202, M.G. Marg, Cantonment\nLucknow\nUttar Pradesh 226002",
    content: "please save the date\nand let us know if you can join us",
  },

  arabic: {
    calligraphy: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  },

  entry: {
    prompt: "Please enter your name",
    placeholder: "Your name",
    action: "Save the Date",
  },
} as const;

export const invitationTypeLabels: Record<InvitationType, string> = {
  wedding: "Wedding Only",
  reception: "Reception",
  both: "Both",
};

export const adminCopy = {
  totalGuests: "Total Guests",
  exportExcel: "Export Excel",
  signOut: "Sign out",
};

export const guestExportColumns = ["Name", "Invitation Type", "Timestamp"] as const;

export function coupleLine() {
  return `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName}`;
}

export function formatEventWhen(event: Pick<InvitationEventCopy, "date" | "time">) {
  const date = event.date.trim();
  const time = event.time.trim();
  if (date && time) return `${date} | ${time}`;
  return date || time;
}
