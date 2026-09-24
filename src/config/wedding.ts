import type { ThemeId } from "./themes";

export type Person = {
  firstName: string;
  lastName: string;
  initial: string;
  arabicName: string;
  arabicInitial: string;
  shortBio?: string;
  portraitSrc?: string;
};

export type WeddingEvent = {
  id: string;
  name: string;
  arabicName?: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  city?: string;
  description?: string;
  icon?: "mehendi" | "haldi" | "ceremony" | "reception" | "gathering";
  mapUrl?: string;
  startIso: string;
  endIso: string;
  addToCalendar?: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

export type NavItem = {
  id: string;
  label: string;
  arabicLabel?: string;
};

export const wedding = {
  site: {
    url: "https://wedding.example.com",
    title: "Nadiya & Raiyaan — Save the Date",
    description: "Save the date for the reception on 10 January 2027 in Lucknow, and let us know if you can join us.",
    ogImageAlt: "Save the date for Nadiya and Raiyaan",
  },

  theme: "ivory-gold" as ThemeId,

  locale: "en-US",

  couple: {
    person1: {
      firstName: "Nadiya",
      lastName: "",
      initial: "N",
      arabicName: "نادية",
      arabicInitial: "ن",
      shortBio: "",
      portraitSrc: "",
    } satisfies Person,
    person2: {
      firstName: "Raiyaan",
      lastName: "",
      initial: "R",
      arabicName: "ريان",
      arabicInitial: "ر",
      shortBio: "",
      portraitSrc: "",
    } satisfies Person,
    togetherPortraitSrc: "",
    monogramJoiner: "&",
  },

  date: {
    iso: "2027-01-10T00:00:00+05:30",
    timezone: "Asia/Kolkata",
    display: {
      weekday: "Sunday",
      month: "January",
      day: "10",
      year: "2027",
      time: "",
      city: "Lucknow",
      location: "MB Club",
      fullLine: "10 January 2027",
      coverLine: "January  •  10  •  2027",
      days: [
        { weekday: "Sunday", arabicWeekday: "الأحد", day: "10" },
      ],
      arabicMonth: "يناير",
      arabicYear: "٢٠٢٧",
    },
  },

  venue: {
    name: "MB Club",
    address: "202, M.G. Marg, Cantonment",
    city: "Lucknow",
    region: "Uttar Pradesh 226002",
    dateLabel: "10 January 2027",
    timeLabel: "",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=MB+Club+Mahomed+Bagh+202+MG+Marg+Lucknow",
    imageSrc: "",
  },

  events: [
    {
      id: "reception",
      name: "Walima Reception",
      arabicName: "وليمة",
      dateLabel: "Sunday, 10 January 2027",
      timeLabel: "Time to be announced",
      venue: "MB Club",
      address: "202, M.G. Marg, Cantonment",
      city: "Lucknow",
      description: "",
      icon: "reception",
      startIso: "2027-01-10T16:00:00+05:30",
      endIso: "2027-01-10T23:00:00+05:30",
      addToCalendar: true,
    },
  ] satisfies WeddingEvent[],

  gallery: [] satisfies GalleryImage[],

  showPhotography: false,

  arabic: {
    enabled: true,
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    allah: "الله",
    joiner: "و",
    salaam: "السلام عليكم\nورحمة الله\nوبركاته",
    invite: "تتشرف أسرتانا بدعوتكم\nلحضور حفل الاستقبال",
    saveTheDate: "احفظوا التاريخ",
    theCouple: "العروسان",
    theCelebration: "الاحتفال",
    theVenue: "المكان",
    stay: "الضيافة",
    stayNote: "الإقامة موفرة لكم\nويرجى ترتيب السفر من جهتكم",
    welcome: "أهلاً بكم",
    rsvp: "الرجاء الرد",
    inshaAllah: "إن شاء الله",
    jazakAllah: "جزاكم الله خيرا",
    fiAmanillah: "في أمان الله",
    alhamdulillah: "الحمد لله",
    openInvitation: "افتحوا الدعوة",
    tapToOpen: "اضغطوا للفتح",
    untilWeCelebrate: "حتى نحتفل",
    sendReply: "أرسلوا الرد",
    ayah: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    ayahRef: "سورة الروم ٢١",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    mashaAllah: "ما شاء الله",
    countdown: {
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثوانٍ",
    },
  },

  music: {
    enabled: true,
    source: "",
    label: "Music",
    autoplayAfterOpen: true,
  },

  navigation: [
    { id: "date", label: "Save the Date", arabicLabel: "احفظوا التاريخ" },
    { id: "events", label: "Reception", arabicLabel: "الاستقبال" },
    { id: "story", label: "Our Story", arabicLabel: "قصتنا" },
    { id: "venue", label: "Venue", arabicLabel: "المكان" },
    { id: "request", label: "Kind Request", arabicLabel: "رجاء" },
    { id: "rsvp", label: "RSVP", arabicLabel: "الرجاء الرد" },
  ] satisfies NavItem[],

  copy: {
    coverWish: "With love and prayers,\nwe would be honoured\nby your presence",
    togetherWithFamilies: "Together with their families",
    inviteYou: "please save the date\nand let us know if you can join us",
    delighted: "Save the date\nfor the celebration of",
    blessing: "Save the date.\nA formal invitation will follow.\nKindly tell us if you will be able to come.",
    openInvitation: "Save the Date",
    saveTheDate: "Save the Date",
    ourStory: "Our Story",
    story: [
      "Two paths, one journey.",
      "By His grace, what began as two separate stories has now become a shared chapter, filled with love, faith and endless duas.",
      "We are excited to begin this new journey together and would be honoured to have you with us as we celebrate this special milestone.",
    ],
    romanticLine: "And of His signs is that He created for you spouses, that you may find rest in them, and He placed between you love and mercy.",
    closingVerse: "“And We created you in pairs that you may find tranquility in them.”",
    withLove: "With love",
    countdownLabel: "Until we celebrate",
    eventsHeading: "Reception",
    venueHeading: "The Venue",
    kindRequest: "Kind Request",
    requests: [
      "Kindly join us for the reception",
      "Vegetarian meals will be served",
    ],
    stayHeading: "For Our Guests",
    stayNote: "Stay will be provided.\nKindly arrange your own travel.",
    galleryHeading: "Moments",
    rsvpHeading: "Kindly Reply",
    rsvpQuestion: "Will you be joining us, insha’Allah?",
    rsvpYes: "Yes, I’ll be there",
    rsvpNo: "Regretfully, no",
    rsvpThankYou: "JazakAllah khair. We have received your reply.",
    footerNote: "May Allah bless this union.",
    viewOnMaps: "View on Map",
    getDirections: "Get Directions",
    addToCalendar: "Add to Calendar",
    photographPlaceholder: "Photograph",
  },

  rsvp: {
    showGuestCount: true,
    showEventSelection: true,
    showDietary: true,
    showMessage: true,
    maxGuests: 4,
  },

  decorations: {
    showCornerOrnaments: true,
    showPaperGrain: true,
    showFloralAccents: true,
  },
} as const;

export type WeddingConfig = typeof wedding;

export function personName(person: Person) {
  return [person.firstName, person.lastName].filter(Boolean).join(" ");
}

export function coupleNames(joiner = " & ") {
  return `${personName(wedding.couple.person1)}${joiner}${personName(wedding.couple.person2)}`;
}

export function monogramMarks() {
  return {
    one: wedding.couple.person1.initial,
    two: wedding.couple.person2.initial,
    joiner: "·",
    arabic: false,
  };
}

export function venueFullAddress() {
  return [wedding.venue.address, wedding.venue.city, wedding.venue.region]
    .filter(Boolean)
    .join(", ");
}
