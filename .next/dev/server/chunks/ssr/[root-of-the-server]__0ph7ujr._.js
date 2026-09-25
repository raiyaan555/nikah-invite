module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
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
"[project]/src/app/invite/[type]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvitePage,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationEntry$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/guest.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return [
        {
            type: "wedding"
        },
        {
            type: "reception"
        },
        {
            type: "both"
        }
    ];
}
const dynamicParams = false;
async function generateMetadata({ params }) {
    const { type } = await params;
    const names = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weddingConfig"].couple.brideName} & ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weddingConfig"].couple.groomName}`;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInvitationType"])(type)) {
        return {
            title: names
        };
    }
    const eventTitle = type === "both" ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weddingConfig"].wedding.title} & ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weddingConfig"].reception.title}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weddingConfig"][type].title;
    return {
        title: names,
        description: eventTitle
    };
}
async function InvitePage({ params }) {
    const { type } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInvitationType"])(type)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationEntry$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvitationEntry"], {
        type: type
    }, void 0, false, {
        fileName: "[project]/src/app/invite/[type]/page.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/invite/[type]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/invite/[type]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationEntry",
    ()=>InvitationEntry
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvitationEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvitationEntry() from the server but InvitationEntry is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/stationery/InvitationEntry.tsx", "InvitationEntry");
}),
"[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationEntry",
    ()=>InvitationEntry
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvitationEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvitationEntry() from the server but InvitationEntry is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/stationery/InvitationEntry.tsx <module evaluation>", "InvitationEntry");
}),
"[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationEntry$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationEntry$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationEntry.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationEntry$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/config/invitation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminCopy",
    ()=>adminCopy,
    "coupleLine",
    ()=>coupleLine,
    "formatEventWhen",
    ()=>formatEventWhen,
    "guestExportColumns",
    ()=>guestExportColumns,
    "invitationTypeLabels",
    ()=>invitationTypeLabels,
    "weddingConfig",
    ()=>weddingConfig
]);
const weddingConfig = {
    couple: {
        brideName: "Nadiya",
        groomName: "Raiyaan"
    },
    preface: "Together with their families",
    wedding: {
        title: "Nikah",
        date: "Saturday, 9 January 2027",
        time: "Time to be announced",
        venue: "MB Club",
        address: "202, M.G. Marg, Cantonment\nLucknow\nUttar Pradesh 226002",
        content: "please save the date\nand let us know if you can join us"
    },
    reception: {
        title: "Walima Reception",
        date: "Sunday, 10 January 2027",
        time: "Time to be announced",
        venue: "MB Club",
        address: "202, M.G. Marg, Cantonment\nLucknow\nUttar Pradesh 226002",
        content: "please save the date\nand let us know if you can join us"
    },
    arabic: {
        calligraphy: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
    },
    entry: {
        prompt: "Please enter your name",
        placeholder: "Your name",
        action: "Save the Date"
    }
};
const invitationTypeLabels = {
    wedding: "Wedding Only",
    reception: "Reception",
    both: "Both"
};
const adminCopy = {
    totalGuests: "Total Guests",
    exportExcel: "Export Excel",
    signOut: "Sign out"
};
const guestExportColumns = [
    "Name",
    "Invitation Type",
    "Timestamp"
];
function coupleLine() {
    return `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName}`;
}
function formatEventWhen(event) {
    const date = event.date.trim();
    const time = event.time.trim();
    if (date && time) return `${date} | ${time}`;
    return date || time;
}
}),
"[project]/src/types/guest.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInvitationType",
    ()=>isInvitationType
]);
const invitationTypes = [
    "wedding",
    "reception",
    "both"
];
function isInvitationType(value) {
    return invitationTypes.includes(value);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ph7ujr._.js.map