import { wedding, type NavItem, type WeddingConfig, type WeddingEvent } from "@/config/wedding";

export type InvitationVariant = "groom" | "bride";

export type InvitationConfig = WeddingConfig & {
  showRsvp: boolean;
  showKindRequest: boolean;
  parents?: {
    bride: string;
    groom: string;
  };
  closing?: {
    arabic: string;
    transliteration: string;
    withLoveNames: string;
  };
  nikahIslamicDate?: string;
};

const nikah = {
  id: "nikah",
  name: "Nikah",
  arabicName: "نكاح",
  dateLabel: "Saturday, 9 January 2027",
  timeLabel: "Lunch",
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
} as const;

export function isInvitationVariant(value: string): value is InvitationVariant {
  return value === "groom" || value === "bride";
}

export function defaultInvitation(): InvitationConfig {
  return {
    ...wedding,
    showRsvp: true,
    showKindRequest: false,
    navigation: wedding.navigation.filter((item) => item.id !== "request"),
  };
}

export function resolveInvitation(variant: InvitationVariant): InvitationConfig {
  const spec = invitationConfigs[variant];
  const events = spec.eventIds.map((id) => {
    const event = eventCatalog[id];
    if (variant === "bride" && id === "nikah") {
      return {
        ...event,
        dateLabel: "Saturday, 9th January 2027",
        timeLabel:
          "Nikah Ceremony\nwill be solemnized\nafter Zohar Namaz\n(12:15 pm)\n(Insha'Allah)\nFollowed by Lunch.",
      };
    }
    return event;
  });
  const days = spec.eventIds.map((id) => eventDays[id]);
  const dayNumber = days.map((item) => item.day).join(" & ");
  const isBride = variant === "bride";
  const day = isBride ? "9th" : dayNumber;
  const weekday = days.map((item) => item.weekday).join(" & ");
  const groomName = wedding.couple.person2.firstName;
  const brideSurname = "Khan";
  const coupleLabel = isBride
    ? `${spec.brideName} ${brideSurname} & ${groomName} ${brideSurname}`
    : `${spec.brideName} & ${groomName}`;
  const navigation = wedding.navigation
    .filter((item) => spec.showRsvp || item.id !== "rsvp")
    .filter((item) => item.id !== "request")
    .map((item) => {
      if (item.id === "events") return { ...item, label: spec.eventsHeading };
      if (item.id === "date" && isBride) return { ...item, label: "Invitation" };
      return item;
    }) as NavItem[];

  return {
    ...wedding,
    showRsvp: spec.showRsvp,
    showKindRequest: false,
    site: {
      ...wedding.site,
      title: isBride ? `${coupleLabel} — Invitation` : `${coupleLabel} — Save the Dates`,
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
        firstName: wedding.couple.person2.firstName,
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
      ? {
          parents: {
            bride: "D/o of Mrs and Mr\nSaeed Khan",
            groom: "S/o of Mrs and Mr\nKhurram Khan",
          },
          nikahIslamicDate: "1 Shaʻban, 1448 AH",
          closing: {
            arabic: "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
            transliteration:
              "May Allah bless you, and shower His blessings upon you, and join you together in goodness.",
            withLoveNames: "Dr. Saeed Khan & Family",
          },
        }
      : {}),
    copy: {
      ...wedding.copy,
      eventsHeading: spec.eventsHeading,
      ...(isBride ? brideCopy : {}),
    },
  } as unknown as InvitationConfig;
}
