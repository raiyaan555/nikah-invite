import { wedding, type NavItem, type WeddingConfig, type WeddingEvent } from "@/config/wedding";

export type InvitationVariant = "groom" | "bride";

export type InvitationConfig = WeddingConfig & {
  showRsvp: boolean;
  parents?: {
    bride: string;
    groom: string;
  };
};

const nikah = {
  id: "nikah",
  name: "Nikah",
  arabicName: "نكاح",
  dateLabel: "Saturday, 9 January 2027",
  timeLabel: "Time to be announced",
  venue: "MB Club",
  address: "202, M.G. Marg, Cantonment",
  city: "Lucknow",
  description: "",
  icon: "ceremony",
  mapUrl: wedding.venue.mapUrl,
  startIso: "2027-01-09T16:00:00+05:30",
  endIso: "2027-01-09T23:00:00+05:30",
  addToCalendar: true,
} satisfies WeddingEvent;

const reception = wedding.events[0];

const eventCatalog = {
  nikah,
  reception,
} as const;

const eventDays = {
  nikah: { weekday: "Saturday", arabicWeekday: "السبت", day: "9" },
  reception: { weekday: "Sunday", arabicWeekday: "الأحد", day: "10" },
} as const;

export const invitationConfigs = {
  groom: {
    brideName: "Zoya",
    brideInitial: "Z",
    brideArabicName: "زويا",
    brideArabicInitial: "ز",
    eventIds: ["nikah", "reception"],
    showRsvp: true,
    eventsHeading: "Celebration",
  },
  bride: {
    brideName: "Nadiya",
    brideInitial: "N",
    brideArabicName: "نادية",
    brideArabicInitial: "ن",
    eventIds: ["nikah"],
    showRsvp: false,
    eventsHeading: "Nikah",
  },
} as const;

const brideCopy = {
  delighted: "You are invited\nto the Nikah Ceremony of",
  openInvitation: "Open Invitation",
  requests: [
    "Kindly join us for the ceremony",
    "Please be on time.",
    "Vegetarian meals will also be served.",
  ],
} as const;

export function isInvitationVariant(value: string): value is InvitationVariant {
  return value === "groom" || value === "bride";
}

export function defaultInvitation(): InvitationConfig {
  return { ...wedding, showRsvp: true };
}

export function resolveInvitation(variant: InvitationVariant): InvitationConfig {
  const spec = invitationConfigs[variant];
  const events = spec.eventIds.map((id) => {
    const event = eventCatalog[id];
    if (variant === "bride" && id === "nikah") {
      return { ...event, timeLabel: "After Zohar prayer\n(12:15 pm)" };
    }
    return event;
  });
  const days = spec.eventIds.map((id) => eventDays[id]);
  const day = days.map((item) => item.day).join(" & ");
  const weekday = days.map((item) => item.weekday).join(" & ");
  const groomName = wedding.couple.person2.firstName;
  const isBride = variant === "bride";
  const brideSurname = "Khan";
  const coupleLabel = isBride
    ? `${spec.brideName} ${brideSurname} & ${groomName} ${brideSurname}`
    : `${spec.brideName} & ${groomName}`;
  const navigation = wedding.navigation
    .filter((item) => spec.showRsvp || item.id !== "rsvp")
    .map((item) => {
      if (item.id === "events") return { ...item, label: spec.eventsHeading };
      if (item.id === "date" && isBride) return { ...item, label: "Invitation" };
      return item;
    }) as NavItem[];

  return {
    ...wedding,
    showRsvp: spec.showRsvp,
    site: {
      ...wedding.site,
      title: isBride ? `${coupleLabel} — Invitation` : `${coupleLabel} — Save the Date`,
      description: isBride
        ? `You are invited to the Nikah Ceremony of ${coupleLabel} on ${day} January 2027 in Lucknow.`
        : spec.showRsvp
          ? `Save the date for ${day} January 2027 in Lucknow, and let us know if you can join us.`
          : `Save the date for ${day} January 2027 in Lucknow.`,
      ogImageAlt: isBride
        ? `Invitation for ${coupleLabel}`
        : `Save the date for ${spec.brideName} and ${groomName}`,
    },
    couple: {
      ...wedding.couple,
      person1: {
        ...wedding.couple.person1,
        firstName: spec.brideName,
        lastName: isBride ? brideSurname : wedding.couple.person1.lastName,
        initial: spec.brideInitial,
        arabicName: spec.brideArabicName,
        arabicInitial: spec.brideArabicInitial,
      },
      person2: {
        ...wedding.couple.person2,
        lastName: isBride ? brideSurname : wedding.couple.person2.lastName,
      },
    },
    date: {
      ...wedding.date,
      iso: events[0].startIso,
      display: {
        ...wedding.date.display,
        weekday,
        day,
        fullLine: `${day} January 2027`,
        coverLine: `January  •  ${day}  •  2027`,
        days,
      },
    },
    venue: {
      ...wedding.venue,
      dateLabel: `${day} January 2027`,
    },
    events,
    navigation,
    ...(isBride
      ? { parents: { bride: "Daughter of Dr. Saeed Khan", groom: "Son of Khurram Khan" } }
      : {}),
    copy: {
      ...wedding.copy,
      eventsHeading: spec.eventsHeading,
      ...(isBride ? brideCopy : {}),
    },
  } as unknown as InvitationConfig;
}
