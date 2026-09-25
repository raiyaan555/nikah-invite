module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/src/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$AdminDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/AdminDashboard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/guests.ts [app-rsc] (ecmascript)");
;
;
;
;
const dynamic = "force-dynamic";
async function AdminPage({ searchParams }) {
    const [{ error }, authenticated] = await Promise.all([
        searchParams,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdminAuthenticated"])()
    ]);
    if (!authenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$AdminDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminDashboard"], {
            authenticated: false,
            error: error,
            total: 0,
            counts: {
                wedding: 0,
                reception: 0,
                both: 0
            },
            guests: []
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    const { total, counts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countGuests"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$AdminDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminDashboard"], {
        authenticated: true,
        total: total,
        counts: counts,
        guests: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listGuests"])("desc")
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/components/stationery/AdminDashboard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDashboard",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$AdminLogin$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/AdminLogin.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ExcelExport$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/ExcelExport.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-rsc] (ecmascript)");
;
;
;
;
const order = [
    "wedding",
    "reception",
    "both"
];
function formatTimestamp(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        timeZone: "Asia/Kolkata"
    }).format(date);
}
function AdminDashboard({ authenticated, error, total, counts, guests }) {
    if (!authenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$AdminLogin$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminLogin"], {
            error: error
        }, void 0, false, {
            fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
            lineNumber: 37,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stationery-stage",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "stationery-card is-admin",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stationery-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "stationery-names stationery-names-quiet",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coupleLine"])()
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "guest-counts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminCopy"].totalGuests
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: total
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            order.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invitationTypeLabels"][type]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: counts[type]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, type, true, {
                                    fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ExcelExport$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExcelExport"], {}, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    guests.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "guest-list",
                        children: guests.map((guest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "guest-name",
                                        children: guest.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "guest-meta",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invitationTypeLabels"][guest.invitationType],
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: " · "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: guest.createdAt,
                                                children: formatTimestamp(guest.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, guest.id, true, {
                                fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: "/api/admin/logout",
                        method: "post",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "stationery-quiet",
                            type: "submit",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminCopy"].signOut
                        }, void 0, false, {
                            fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/AdminDashboard.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/stationery/AdminLogin.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLogin",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AdminLogin({ error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stationery-stage",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "stationery-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "stationery-copy is-entry",
                action: "/api/admin/login",
                method: "post",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "stationery-kicker",
                        htmlFor: "admin-password",
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "admin-password",
                        name: "password",
                        type: "password",
                        className: "stationery-field",
                        autoComplete: "current-password",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    error === "invalid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "stationery-note",
                        role: "alert",
                        children: "Please try again."
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this) : null,
                    error === "unconfigured" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "stationery-note",
                        role: "alert",
                        children: "Add ADMIN_PASSWORD to the server environment."
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "stationery-action",
                        type: "submit",
                        children: "Enter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stationery/AdminLogin.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/stationery/AdminLogin.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/AdminLogin.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/stationery/ExcelExport.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExcelExport",
    ()=>ExcelExport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-rsc] (ecmascript)");
;
;
function ExcelExport() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "stationery-action",
        href: "/api/admin/export",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminCopy"].exportExcel
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/ExcelExport.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
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
"[project]/src/lib/admin-auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminPassword",
    ()=>adminPassword,
    "cookieName",
    ()=>cookieName,
    "cookieOptions",
    ()=>cookieOptions,
    "isAdminAuthenticated",
    ()=>isAdminAuthenticated,
    "passwordMatches",
    ()=>passwordMatches,
    "sessionToken",
    ()=>sessionToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const cookieName = "invitation_admin";
function adminToken(password) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", password).update("invitation-admin").digest("base64url");
}
function tokensMatch(input, expected) {
    const left = Buffer.from(input);
    const right = Buffer.from(expected);
    if (left.length !== right.length) return false;
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(left, right);
}
function adminPassword() {
    const password = process.env.ADMIN_PASSWORD?.trim();
    return password || null;
}
function cookieOptions() {
    return {
        httpOnly: true,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 14
    };
}
async function isAdminAuthenticated() {
    const password = adminPassword();
    if (!password) return false;
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(cookieName)?.value;
    if (!token) return false;
    return tokensMatch(token, adminToken(password));
}
function passwordMatches(input) {
    const password = adminPassword();
    if (!password) return false;
    return tokensMatch(adminToken(input), adminToken(password));
}
function sessionToken() {
    const password = adminPassword();
    if (!password) return null;
    return adminToken(password);
}
;
}),
"[project]/src/lib/guests.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countGuests",
    ()=>countGuests,
    "createGuest",
    ()=>createGuest,
    "listGuests",
    ()=>listGuests,
    "normalizeGuestName",
    ()=>normalizeGuestName
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__url__external__node$3a$sqlite__ = __turbopack_context__.x("node:sqlite", ()=>require("node:sqlite"), true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/guest.ts [app-rsc] (ecmascript)");
;
;
;
;
const globalForGuests = globalThis;
function databasePath() {
    const directory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data");
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(directory, {
        recursive: true
    });
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(directory, "guests.db");
}
function getDatabase() {
    if (!globalForGuests.guestsDb) {
        const database = new __TURBOPACK__url__external__node$3a$sqlite__["DatabaseSync"](databasePath());
        database.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA busy_timeout = 3000;
      CREATE TABLE IF NOT EXISTS guests (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        invitation_type TEXT NOT NULL CHECK (invitation_type IN ('wedding', 'reception', 'both')),
        created_at TEXT NOT NULL
      );
    `);
        globalForGuests.guestsDb = database;
    }
    return globalForGuests.guestsDb;
}
function mapGuest(row) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInvitationType"])(row.invitation_type)) {
        throw new Error("Stored invitation type is invalid.");
    }
    return {
        id: row.id,
        name: row.name,
        invitationType: row.invitation_type,
        createdAt: row.created_at
    };
}
function normalizeGuestName(value) {
    if (typeof value !== "string") return null;
    const name = value.replace(/[\u0000-\u001F\u007F]/g, "").trim().replace(/\s+/g, " ");
    if (!name || name.length > 80) return null;
    return name;
}
function createGuest(name, invitationType) {
    const guest = {
        id: crypto.randomUUID(),
        name,
        invitationType,
        createdAt: new Date().toISOString()
    };
    getDatabase().prepare("INSERT INTO guests (id, name, invitation_type, created_at) VALUES (?, ?, ?, ?)").run(guest.id, guest.name, guest.invitationType, guest.createdAt);
    return guest;
}
function listGuests(order = "desc") {
    const direction = order === "asc" ? "ASC" : "DESC";
    const rows = getDatabase().prepare(`SELECT id, name, invitation_type, created_at FROM guests ORDER BY created_at ${direction}`).all();
    return rows.map(mapGuest);
}
function countGuests() {
    const counts = {
        wedding: 0,
        reception: 0,
        both: 0
    };
    for (const guest of listGuests("asc")){
        counts[guest.invitationType] += 1;
    }
    return {
        total: counts.wedding + counts.reception + counts.both,
        counts
    };
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0745ad6._.js.map