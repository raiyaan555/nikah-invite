module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/[variant]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvitationVariantPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationExperience$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitationVariants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitationVariants.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return [
        {
            variant: "groom"
        },
        {
            variant: "bride"
        }
    ];
}
const dynamicParams = false;
async function generateMetadata({ params }) {
    const { variant } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitationVariants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInvitationVariant"])(variant)) return {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitationVariants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveInvitation"])(variant);
    return {
        title: config.site.title,
        description: config.site.description,
        openGraph: {
            title: config.site.title,
            description: config.site.description
        },
        twitter: {
            title: config.site.title,
            description: config.site.description
        }
    };
}
async function InvitationVariantPage({ params }) {
    const { variant } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitationVariants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInvitationVariant"])(variant)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationExperience$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvitationExperience"], {
        variant: variant
    }, void 0, false, {
        fileName: "[project]/src/app/[variant]/page.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[variant]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[variant]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationExperience",
    ()=>InvitationExperience
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvitationExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvitationExperience() from the server but InvitationExperience is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/invitation/InvitationExperience.tsx", "InvitationExperience");
}),
"[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationExperience",
    ()=>InvitationExperience
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvitationExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvitationExperience() from the server but InvitationExperience is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/invitation/InvitationExperience.tsx <module evaluation>", "InvitationExperience");
}),
"[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationExperience$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationExperience$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/invitation/InvitationExperience.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationExperience$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/config/invitationVariants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultInvitation",
    ()=>defaultInvitation,
    "invitationConfigs",
    ()=>invitationConfigs,
    "isInvitationVariant",
    ()=>isInvitationVariant,
    "resolveInvitation",
    ()=>resolveInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-rsc] (ecmascript)");
;
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
    mapUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].venue.mapUrl,
    startIso: "2027-01-09T16:00:00+05:30",
    endIso: "2027-01-09T23:00:00+05:30",
    addToCalendar: true
};
const reception = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].events[0];
const eventCatalog = {
    nikah,
    reception
};
const eventDays = {
    nikah: {
        weekday: "Saturday",
        arabicWeekday: "السبت",
        day: "9"
    },
    reception: {
        weekday: "Sunday",
        arabicWeekday: "الأحد",
        day: "10"
    }
};
const invitationConfigs = {
    groom: {
        brideName: "Zoya",
        brideInitial: "Z",
        brideArabicName: "زويا",
        brideArabicInitial: "ز",
        eventIds: [
            "nikah",
            "reception"
        ],
        showRsvp: true,
        eventsHeading: "Celebration"
    },
    bride: {
        brideName: "Nadiya",
        brideInitial: "N",
        brideArabicName: "نادية",
        brideArabicInitial: "ن",
        eventIds: [
            "nikah"
        ],
        showRsvp: false,
        eventsHeading: "Nikah"
    }
};
const brideCopy = {
    delighted: "You are invited\nto the Nikah Ceremony of",
    openInvitation: "Open Invitation"
};
function isInvitationVariant(value) {
    return value === "groom" || value === "bride";
}
function defaultInvitation() {
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"],
        showRsvp: true,
        showKindRequest: false,
        navigation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].navigation.filter((item)=>item.id !== "request")
    };
}
function resolveInvitation(variant) {
    const spec = invitationConfigs[variant];
    const events = spec.eventIds.map((id)=>{
        const event = eventCatalog[id];
        if (variant === "bride" && id === "nikah") {
            return {
                ...event,
                dateLabel: "Saturday, 9th January 2027",
                timeLabel: "Nikah Ceremony\nwill be solemnized\nafter Zohar Namaz\n(12:15 pm)\n(Insha'Allah)\nFollowed by Lunch."
            };
        }
        return event;
    });
    const days = spec.eventIds.map((id)=>eventDays[id]);
    const dayNumber = days.map((item)=>item.day).join(" & ");
    const isBride = variant === "bride";
    const day = isBride ? "9th" : dayNumber;
    const weekday = days.map((item)=>item.weekday).join(" & ");
    const groomName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person2.firstName;
    const brideSurname = "Khan";
    const coupleLabel = isBride ? `${spec.brideName} ${brideSurname} & ${groomName} ${brideSurname}` : `${spec.brideName} & ${groomName}`;
    const navigation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].navigation.filter((item)=>spec.showRsvp || item.id !== "rsvp").filter((item)=>item.id !== "request").map((item)=>{
        if (item.id === "events") return {
            ...item,
            label: spec.eventsHeading
        };
        if (item.id === "date" && isBride) return {
            ...item,
            label: "Invitation"
        };
        return item;
    });
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"],
        showRsvp: spec.showRsvp,
        showKindRequest: false,
        site: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].site,
            title: isBride ? `${coupleLabel} — Invitation` : `${coupleLabel} — Save the Dates`,
            description: isBride ? `You are invited to the Nikah Ceremony of ${coupleLabel} on ${day} January 2027 in Lucknow.` : spec.showRsvp ? `Save the date for ${day} January 2027 in Lucknow, and let us know if you can join us.` : `Save the date for ${day} January 2027 in Lucknow.`,
            ogImageAlt: isBride ? `Invitation for ${coupleLabel}` : `Save the date for ${spec.brideName} and ${groomName}`
        },
        couple: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple,
            person1: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person1,
                firstName: spec.brideName,
                lastName: isBride ? brideSurname : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person1.lastName,
                initial: spec.brideInitial,
                arabicName: spec.brideArabicName,
                arabicInitial: spec.brideArabicInitial
            },
            person2: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person2,
                firstName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person2.firstName,
                lastName: isBride ? brideSurname : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].couple.person2.lastName
            }
        },
        date: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].date,
            iso: events[0].startIso,
            display: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].date.display,
                weekday,
                day,
                fullLine: `${day} January 2027`,
                coverLine: `January  •  ${day}  •  2027`,
                days
            }
        },
        venue: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].venue,
            dateLabel: `${day} January 2027`
        },
        events,
        navigation,
        ...isBride ? {
            parents: {
                bride: "D/o of Mrs and Mr\nSaeed Khan",
                groom: "S/o of Mrs and Mr\nKhurram Khan"
            },
            nikahIslamicDate: "1 Shaʻban, 1448 AH",
            closing: {
                arabic: "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
                transliteration: "May Allah bless you, and shower His blessings upon you, and join you together in goodness.",
                withLoveNames: "Dr. Saeed Khan & Family"
            }
        } : {},
        copy: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wedding"].copy,
            eventsHeading: spec.eventsHeading,
            ...isBride ? brideCopy : {}
        }
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0m4_3t9._.js.map