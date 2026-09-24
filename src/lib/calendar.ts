import type { WeddingEvent } from "@/config/wedding";
import { coupleNames, wedding } from "@/config/wedding";

function toUtcStamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function icsEscape(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function buildIcs(event: WeddingEvent) {
  const start = toUtcStamp(event.startIso);
  const end = toUtcStamp(event.endIso);
  const title = `${coupleNames()} — ${event.name}`;
  const location = [event.venue, event.address, event.city].filter(Boolean).join(", ");
  const description = event.description || `${event.name} for ${coupleNames()}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}-${start}@wedding`,
    `DTSTAMP:${toUtcStamp(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${icsEscape(title)}`,
    `DESCRIPTION:${icsEscape(description)}`,
    `LOCATION:${icsEscape(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(event: WeddingEvent) {
  const ics = buildIcs(event);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function googleCalendarUrl(event: WeddingEvent) {
  const start = toUtcStamp(event.startIso);
  const end = toUtcStamp(event.endIso);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${coupleNames()} — ${event.name}`,
    dates: `${start}/${end}`,
    details: event.description || wedding.copy.inviteYou.replace(/\n/g, " "),
    location: [event.venue, event.address, event.city].filter(Boolean).join(", "),
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
