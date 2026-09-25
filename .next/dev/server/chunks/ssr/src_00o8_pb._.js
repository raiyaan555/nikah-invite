module.exports = [
"[project]/src/app/icon--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamic"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "icon", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "28b5e8889d5a3083"
        };
        const { size } = imageMetadata;
        if (size) {
            data.sizes = `${size.width}x${size.height}`;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/src/app/icon--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/icon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentType",
    ()=>contentType,
    "default",
    ()=>Icon,
    "dynamic",
    ()=>dynamic,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-rsc] (ecmascript)");
;
;
;
const dynamic = "force-static";
const size = {
    width: 32,
    height: 32
};
const contentType = "image/png";
function Icon() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f4e7d2",
            color: "#c4a15a",
            fontSize: 13,
            letterSpacing: 1,
            borderRadius: 999,
            border: "1px solid #c4a15a"
        },
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person1.initial,
            "·",
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person2.initial
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/icon.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, this), size);
}
}),
"[project]/src/config/wedding.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coupleNames",
    ()=>coupleNames,
    "monogramMarks",
    ()=>monogramMarks,
    "personName",
    ()=>personName,
    "venueFullAddress",
    ()=>venueFullAddress,
    "wedding",
    ()=>wedding
]);
const wedding = {
    site: {
        url: "https://wedding.example.com",
        title: "Nadiya & Raiyaan — Save the Date",
        description: "Save the date for the reception on 10 January 2027 in Lucknow, and let us know if you can join us.",
        ogImageAlt: "Save the date for Nadiya and Raiyaan"
    },
    theme: "ivory-gold",
    locale: "en-US",
    couple: {
        person1: {
            firstName: "Nadiya",
            lastName: "",
            initial: "N",
            arabicName: "نادية",
            arabicInitial: "ن",
            shortBio: "",
            portraitSrc: ""
        },
        person2: {
            firstName: "Raiyaan",
            lastName: "",
            initial: "R",
            arabicName: "ريان",
            arabicInitial: "ر",
            shortBio: "",
            portraitSrc: ""
        },
        togetherPortraitSrc: "",
        monogramJoiner: "&"
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
                {
                    weekday: "Sunday",
                    arabicWeekday: "الأحد",
                    day: "10"
                }
            ],
            arabicMonth: "يناير",
            arabicYear: "٢٠٢٧"
        }
    },
    venue: {
        name: "MB Club",
        address: "202, M.G. Marg, Cantonment",
        city: "Lucknow",
        region: "Uttar Pradesh 226002",
        dateLabel: "10 January 2027",
        timeLabel: "",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MB+Club+Mahomed+Bagh+202+MG+Marg+Lucknow",
        imageSrc: ""
    },
    events: [
        {
            id: "reception",
            name: "Walima Reception",
            arabicName: "وليمة",
            dateLabel: "Sunday, 10 January 2027",
            timeLabel: "Dinner",
            venue: "MB Club",
            address: "202, M.G. Marg, Cantonment",
            city: "Lucknow",
            description: "",
            icon: "reception",
            startIso: "2027-01-10T16:00:00+05:30",
            endIso: "2027-01-10T23:00:00+05:30",
            addToCalendar: true
        }
    ],
    gallery: [],
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
            seconds: "ثوانٍ"
        }
    },
    music: {
        enabled: true,
        source: "",
        label: "Music",
        autoplayAfterOpen: true
    },
    navigation: [
        {
            id: "date",
            label: "Save the Date",
            arabicLabel: "احفظوا التاريخ"
        },
        {
            id: "events",
            label: "Reception",
            arabicLabel: "الاستقبال"
        },
        {
            id: "story",
            label: "Our Story",
            arabicLabel: "قصتنا"
        },
        {
            id: "venue",
            label: "Venue",
            arabicLabel: "المكان"
        },
        {
            id: "request",
            label: "Kind Request",
            arabicLabel: "رجاء"
        },
        {
            id: "rsvp",
            label: "RSVP",
            arabicLabel: "الرجاء الرد"
        }
    ],
    copy: {
        coverWish: "With love and prayers,\nwe would be honoured\nby your presence",
        togetherWithFamilies: "Together with their families",
        inviteYou: "please save the date\nand let us know if you can join us",
        delighted: "Save the dates\nfor the celebration of",
        blessing: "Save the dates.\nA formal invitation will follow.\nKindly tell us if you will be able to come.",
        openInvitation: "Save the Dates",
        saveTheDate: "Save the Date",
        ourStory: "Our Story",
        story: [
            "Two paths, one journey.",
            "By His grace, what began as two separate stories has now become a shared chapter, filled with love, faith and endless duas.",
            "We are excited to begin this new journey together and would be honoured to have you with us as we celebrate this special milestone."
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
            "Vegetarian meals will be served"
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
        photographPlaceholder: "Photograph"
    },
    rsvp: {
        showGuestCount: true,
        showEventSelection: true,
        showDietary: true,
        showMessage: true,
        maxGuests: 4
    },
    decorations: {
        showCornerOrnaments: true,
        showPaperGrain: true,
        showFloralAccents: true
    }
};
function personName(person) {
    return [
        person.firstName,
        person.lastName
    ].filter(Boolean).join(" ");
}
function coupleNames(joiner = " & ") {
    return `${personName(wedding.couple.person1)}${joiner}${personName(wedding.couple.person2)}`;
}
function monogramMarks() {
    return {
        one: wedding.couple.person1.initial,
        two: wedding.couple.person2.initial,
        joiner: "·",
        arabic: false
    };
}
function venueFullAddress() {
    return [
        wedding.venue.address,
        wedding.venue.city,
        wedding.venue.region
    ].filter(Boolean).join(", ");
}
}),
];

//# sourceMappingURL=src_00o8_pb._.js.map