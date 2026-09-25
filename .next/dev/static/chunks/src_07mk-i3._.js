(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/stationery/ArabicCalligraphy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArabicCalligraphy",
    ()=>ArabicCalligraphy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
;
function ArabicCalligraphy() {
    const calligraphy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].arabic.calligraphy.trim();
    if (!calligraphy) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "stationery-calligraphy",
        lang: "ar",
        dir: "rtl",
        children: calligraphy
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/ArabicCalligraphy.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ArabicCalligraphy;
var _c;
__turbopack_context__.k.register(_c, "ArabicCalligraphy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/BotanicalArt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BotanicalArt",
    ()=>BotanicalArt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const slender = "M0 2 C9 -10 16 -40 5 -86 C2 -48 1 -22 0 -8 C-1 -22 -2 -48 -5 -86 C-16 -40 -9 -10 0 2 Z";
const broad = "M0 2 C16 -8 28 -34 12 -72 C4 -40 2 -18 0 -8 C-2 -18 -4 -40 -12 -72 C-28 -34 -16 -8 0 2 Z";
const soft = "M0 0 C18 -6 30 -28 16 -64 C6 -36 3 -16 0 -8 C-3 -16 -6 -36 -16 -64 C-30 -28 -18 -6 0 0 Z";
function arc(count, cx, cy, radius, start, sweep, scale, turnOffset = 0) {
    return Array.from({
        length: count
    }, (_, index)=>{
        const turn = start + sweep * index / Math.max(count - 1, 1);
        const wobble = index * 17 % 9 - 4;
        const distance = radius + wobble * 2.2;
        const x = cx + Math.cos(turn) * distance;
        const y = cy + Math.sin(turn) * distance;
        const rotation = turn * 180 / Math.PI + 90 + turnOffset + (index % 4 - 1.5) * 9;
        const size = scale * (0.9 + index * 3 % 5 * 0.045);
        return [
            Number(x.toFixed(1)),
            Number(y.toFixed(1)),
            Number(rotation.toFixed(1)),
            Number(size.toFixed(2))
        ];
    });
}
function spray(count, originX, originY, step, scale) {
    return Array.from({
        length: count
    }, (_, index)=>{
        const side = index % 2 === 0 ? 1 : -1;
        const x = originX + side * (18 + index % 3 * 8) + Math.sin(index * 0.7) * 10;
        const y = originY + index * step;
        const rotation = side * (28 + index % 3 * 8);
        const size = scale * (0.92 + index % 4 * 0.06);
        return [
            Number(x.toFixed(1)),
            Number(y.toFixed(1)),
            Number(rotation.toFixed(1)),
            Number(size.toFixed(2))
        ];
    });
}
function Leaves({ leaves, d }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: leaves.map(([x, y, rotation, scale], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                transform: `translate(${x} ${y}) rotate(${rotation}) scale(${scale})`
            }, `${x}-${y}-${index}`, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Leaves;
function WeddingBotanical() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "150 40 360 400",
        fill: "currentColor",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: arc(20, 360, 230, 128, -2.6, 5.2, 1.22),
                d: slender
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: arc(14, 368, 236, 78, -2.3, 4.7, 1.05, 16),
                d: broad
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: arc(9, 372, 228, 38, -1.2, 4.4, 0.9),
                d: broad
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = WeddingBotanical;
function ReceptionBotanical() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "240 0 240 820",
        fill: "currentColor",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M360 8 C348 150 392 270 354 420 C326 560 388 670 352 820",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.25"
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: spray(12, 348, 24, 62, 1.08),
                d: soft
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c2 = ReceptionBotanical;
function CombinedBotanical() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "170 0 400 860",
        fill: "currentColor",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: arc(16, 390, 200, 118, -2.5, 5, 1.12),
                d: slender
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                leaves: arc(11, 398, 206, 70, -2.2, 4.6, 0.95, 14),
                d: broad
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                opacity: "0.9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M360 430 C346 530 392 610 356 760",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.15"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaves, {
                        leaves: spray(6, 348, 440, 52, 0.95),
                        d: soft
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c3 = CombinedBotanical;
function BotanicalArt({ type }) {
    if (type === "wedding") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeddingBotanical, {}, void 0, false, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 109,
        columnNumber: 34
    }, this);
    if (type === "reception") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceptionBotanical, {}, void 0, false, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 110,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CombinedBotanical, {}, void 0, false, {
        fileName: "[project]/src/components/stationery/BotanicalArt.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
_c4 = BotanicalArt;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Leaves");
__turbopack_context__.k.register(_c1, "WeddingBotanical");
__turbopack_context__.k.register(_c2, "ReceptionBotanical");
__turbopack_context__.k.register(_c3, "CombinedBotanical");
__turbopack_context__.k.register(_c4, "BotanicalArt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/CardSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSurface",
    ()=>CardSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$BotanicalArt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/BotanicalArt.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CardSurface({ type, children, busy = false }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stationery-stage",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "stationery-card",
            "aria-busy": busy,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: `botanical-slot botanical-slot-${type}`,
                    initial: reduce ? false : {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: reduce ? 0 : 1.6,
                        ease: "easeOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$BotanicalArt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotanicalArt"], {
                        type: type
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/CardSurface.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stationery/CardSurface.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stationery/CardSurface.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/CardSurface.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(CardSurface, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = CardSurface;
var _c;
__turbopack_context__.k.register(_c, "CardSurface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/CombinedInvitation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CombinedInvitation",
    ()=>CombinedInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationComposition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
;
;
function CombinedInvitation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationComposition"], {
        events: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].wedding,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].reception
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/CombinedInvitation.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CombinedInvitation;
var _c;
__turbopack_context__.k.register(_c, "CombinedInvitation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/GuestForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestForm",
    ()=>GuestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GuestForm({ type, onOpened }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function onSubmit(event) {
        event.preventDefault();
        if (submitting) return;
        const trimmed = name.trim();
        if (!trimmed) {
            setError(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].entry.prompt);
            return;
        }
        setSubmitting(true);
        setError("");
        try {
            const response = await fetch("/api/guests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: trimmed,
                    invitationType: type
                })
            });
            const payload = await response.json().catch(()=>null);
            if (!response.ok || !payload?.guest) {
                setError(payload?.error || "Please try again.");
                setSubmitting(false);
                return;
            }
            onOpened(payload.guest);
        } catch  {
            setError("Please try again.");
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "stationery-copy is-entry",
        onSubmit: onSubmit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "stationery-kicker",
                htmlFor: "guest-name",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].entry.prompt
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/GuestForm.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "guest-name",
                name: "name",
                className: "stationery-input",
                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].entry.placeholder,
                autoComplete: "name",
                autoCapitalize: "words",
                enterKeyHint: "done",
                maxLength: 80,
                spellCheck: false,
                value: name,
                "aria-invalid": error ? true : undefined,
                onChange: (event)=>{
                    setName(event.target.value);
                    if (error) setError("");
                }
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/GuestForm.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stationery-note",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/GuestForm.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "stationery-action",
                type: "submit",
                disabled: submitting,
                "aria-busy": submitting,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].entry.action
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/GuestForm.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/GuestForm.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(GuestForm, "0BAWlTS7XvB1AX7Tt8HoB4p3e48=");
_c = GuestForm;
var _c;
__turbopack_context__.k.register(_c, "GuestForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/InvitationCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationCard",
    ()=>InvitationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$CombinedInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/CombinedInvitation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ReceptionInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/ReceptionInvitation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$WeddingInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/WeddingInvitation.tsx [app-client] (ecmascript)");
;
;
;
;
function InvitationCard({ type }) {
    if (type === "wedding") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$WeddingInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeddingInvitation"], {}, void 0, false, {
        fileName: "[project]/src/components/stationery/InvitationCard.tsx",
        lineNumber: 7,
        columnNumber: 34
    }, this);
    if (type === "reception") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ReceptionInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceptionInvitation"], {}, void 0, false, {
        fileName: "[project]/src/components/stationery/InvitationCard.tsx",
        lineNumber: 8,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$CombinedInvitation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombinedInvitation"], {}, void 0, false, {
        fileName: "[project]/src/components/stationery/InvitationCard.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = InvitationCard;
var _c;
__turbopack_context__.k.register(_c, "InvitationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/InvitationComposition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationComposition",
    ()=>InvitationComposition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ArabicCalligraphy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/ArabicCalligraphy.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const reveal = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
function EventWhen({ event }) {
    const date = event.date.trim();
    const time = event.time.trim();
    if (!date && !time) return null;
    const together = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEventWhen"])(event);
    if (date && time && together.length <= 32) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "stationery-date",
            children: together
        }, void 0, false, {
            fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "stationery-date",
        children: [
            date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stationery-when",
                children: date
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 33,
                columnNumber: 15
            }, this) : null,
            time ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stationery-when",
                children: time
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 34,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = EventWhen;
function EventBlock({ event, heading }) {
    const titleClass = event.title.trim().length > 10 ? "stationery-title is-long" : "stationery-title";
    const Title = heading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stationery-event",
        children: [
            event.content.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stationery-kicker stationery-invite",
                children: event.content
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : null,
            event.title.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                className: titleClass,
                children: event.title
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 55,
                columnNumber: 29
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventWhen, {
                event: event
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            event.venue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stationery-venue",
                children: event.venue
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 57,
                columnNumber: 29
            }, this) : null,
            event.address.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stationery-address",
                children: event.address
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 58,
                columnNumber: 31
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = EventBlock;
function InvitationComposition({ events }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [first, ...rest] = events;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "stationery-copy",
        initial: reduce ? false : "hidden",
        animate: "visible",
        variants: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: reduce ? 0 : 0.09,
                    delayChildren: reduce ? 0 : 0.04
                }
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: reveal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$ArabicCalligraphy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArabicCalligraphy"], {}, void 0, false, {
                    fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].preface.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "stationery-kicker",
                variants: reveal,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].preface
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "stationery-names",
                variants: reveal,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleLine"])()
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            first ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "stationery-event-wrap",
                variants: reveal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventBlock, {
                    event: first,
                    heading: "h1"
                }, void 0, false, {
                    fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this) : null,
            rest.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "stationery-event-wrap",
                    variants: reveal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventBlock, {
                        event: event,
                        heading: "h2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, event.title, false, {
                    fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/InvitationComposition.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(InvitationComposition, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = InvitationComposition;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EventWhen");
__turbopack_context__.k.register(_c1, "EventBlock");
__turbopack_context__.k.register(_c2, "InvitationComposition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/InvitationEntry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationEntry",
    ()=>InvitationEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$CardSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/CardSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$GuestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/GuestForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function storageKey(type) {
    return `invitation-guest:${type}`;
}
function readSavedGuest(type) {
    try {
        const saved = sessionStorage.getItem(storageKey(type));
        if (!saved) return null;
        const guest = JSON.parse(saved);
        if (!guest?.id || !guest.name || guest.invitationType !== type) return null;
        return guest;
    } catch  {
        return null;
    }
}
function InvitationEntry({ type }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvitationEntry.useEffect": ()=>{
            const saved = readSavedGuest(type);
            setPhase(saved ? "open" : "form");
        }
    }["InvitationEntry.useEffect"], [
        type
    ]);
    function onOpened(guest) {
        sessionStorage.setItem(storageKey(type), JSON.stringify(guest));
        setPhase("open");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$CardSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSurface"], {
        type: type,
        busy: phase === "pending",
        children: [
            phase === "form" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$GuestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestForm"], {
                type: type,
                onOpened: onOpened
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationEntry.tsx",
                lineNumber: 40,
                columnNumber: 27
            }, this) : null,
            phase === "open" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationCard"], {
                type: type
            }, void 0, false, {
                fileName: "[project]/src/components/stationery/InvitationEntry.tsx",
                lineNumber: 41,
                columnNumber: 27
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stationery/InvitationEntry.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(InvitationEntry, "SMi+CfNG1QMDHxDxZ0sOki80wHk=");
_c = InvitationEntry;
var _c;
__turbopack_context__.k.register(_c, "InvitationEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/ReceptionInvitation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReceptionInvitation",
    ()=>ReceptionInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationComposition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
;
;
function ReceptionInvitation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationComposition"], {
        events: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].reception
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/ReceptionInvitation.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = ReceptionInvitation;
var _c;
__turbopack_context__.k.register(_c, "ReceptionInvitation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stationery/WeddingInvitation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeddingInvitation",
    ()=>WeddingInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stationery/InvitationComposition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-client] (ecmascript)");
;
;
;
function WeddingInvitation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stationery$2f$InvitationComposition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationComposition"], {
        events: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingConfig"].wedding
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/stationery/WeddingInvitation.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = WeddingInvitation;
var _c;
__turbopack_context__.k.register(_c, "WeddingInvitation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/invitation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_07mk-i3._.js.map