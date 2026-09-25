(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/decorative/Arabic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllahMark",
    ()=>AllahMark,
    "ArabicCoupleNames",
    ()=>ArabicCoupleNames,
    "ArabicText",
    ()=>ArabicText,
    "Bismillah",
    ()=>Bismillah,
    "Salaam",
    ()=>Salaam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
;
;
function ArabicText({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `arabic ${className}`.trim(),
        lang: "ar",
        dir: "rtl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Arabic.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ArabicText;
function Bismillah({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArabicText, {
        className: `arabic-bismillah ${className}`.trim(),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.bismillah
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Arabic.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = Bismillah;
function AllahMark({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `arabic arabic-allah ${className}`.trim(),
        lang: "ar",
        dir: "rtl",
        "aria-label": "Allah",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.allah
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Arabic.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c2 = AllahMark;
function Salaam({ className = "" }) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArabicText, {
        className: `arabic-salaam ${className}`.trim(),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.salaam
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Arabic.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c3 = Salaam;
function ArabicCoupleNames({ className = "" }) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.enabled) return null;
    const { person1, person2 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `arabic arabic-names ${className}`.trim(),
        lang: "ar",
        dir: "rtl",
        children: [
            person1.arabicName,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "arabic-names-join",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.joiner
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Arabic.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            person2.arabicName
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Arabic.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = ArabicCoupleNames;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ArabicText");
__turbopack_context__.k.register(_c1, "Bismillah");
__turbopack_context__.k.register(_c2, "AllahMark");
__turbopack_context__.k.register(_c3, "Salaam");
__turbopack_context__.k.register(_c4, "ArabicCoupleNames");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/decorative/Monogram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Monogram",
    ()=>Monogram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Monogram({ initialOne, initialTwo, joiner = "·", size = "md", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `monogram is-${size}${className ? ` ${className}` : ""}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "monogram-initial",
                children: initialOne
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Monogram.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "monogram-join",
                children: joiner
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Monogram.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "monogram-initial",
                children: initialTwo
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Monogram.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Monogram.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Monogram;
var _c;
__turbopack_context__.k.register(_c, "Monogram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoverBotanicals",
    ()=>CoverBotanicals,
    "CoverCorners",
    ()=>CoverCorners,
    "DecorativeDivider",
    ()=>DecorativeDivider,
    "EventGlyph",
    ()=>EventGlyph,
    "FloralAccent",
    ()=>FloralAccent,
    "PaperCorners",
    ()=>PaperCorners,
    "PaperGrain",
    ()=>PaperGrain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FloralCorner({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `corner ${className}`,
        viewBox: "0 0 160 160",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 70C10 38 32 10 68 8C48 28 24 42 8 70Z",
                fill: "currentColor",
                opacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 92C14 48 40 14 86 12",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92 12C48 14 14 40 12 86",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 72C24 44 48 24 78 22C58 38 36 48 24 68",
                stroke: "currentColor",
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M72 20C44 24 24 48 22 78C38 58 48 36 68 24",
                stroke: "currentColor",
                strokeWidth: "0.9",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 54C40 28 70 26 86 44C70 36 48 42 36 58",
                fill: "currentColor",
                opacity: "0.22"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M54 28C28 40 26 70 44 86C36 70 42 48 58 36",
                fill: "currentColor",
                opacity: "0.18"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M96 18C108 8 128 12 134 28C124 16 108 16 96 18Z",
                fill: "currentColor",
                opacity: "0.72"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 96C8 108 12 128 28 134C16 124 16 108 18 96Z",
                fill: "currentColor",
                opacity: "0.72"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M78 32C90 22 108 30 106 46C96 34 84 36 78 32Z",
                fill: "currentColor",
                opacity: "0.55"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 78C22 90 30 108 46 106C34 96 36 84 32 78Z",
                fill: "currentColor",
                opacity: "0.55"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M58 48C66 34 84 38 84 54C74 44 64 48 58 48Z",
                fill: "currentColor",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "34",
                        cy: "34",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "34",
                        cy: "24.5",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "43.5",
                        cy: "34",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "34",
                        cy: "43.5",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "24.5",
                        cy: "34",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "41",
                        cy: "27",
                        r: "2.1",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "41",
                        cy: "41",
                        r: "2.1",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "27",
                        cy: "41",
                        r: "2.1",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "27",
                        cy: "27",
                        r: "2.1",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "108",
                        cy: "30",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "108",
                        cy: "24.4",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "113.6",
                        cy: "30",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "108",
                        cy: "35.6",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "102.4",
                        cy: "30",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30",
                        cy: "108",
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30",
                        cy: "102.4",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "35.6",
                        cy: "108",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30",
                        cy: "113.6",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "24.4",
                        cy: "108",
                        r: "1.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decorative/Ornaments.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "70",
                cy: "18",
                r: "1.3",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "70",
                r: "1.3",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "128",
                cy: "22",
                r: "1.15",
                fill: "currentColor",
                opacity: "0.75"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22",
                cy: "128",
                r: "1.15",
                fill: "currentColor",
                opacity: "0.75"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = FloralCorner;
function CoverCorners() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloralCorner, {
                className: "is-tl"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloralCorner, {
                className: "is-tr"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloralCorner, {
                className: "is-br"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloralCorner, {
                className: "is-bl"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c1 = CoverCorners;
function CoverBotanicals() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cover-botanical is-tr",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/decorations/floral-tr.png",
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/src/components/decorative/Ornaments.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cover-botanical is-bl",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/decorations/floral-bl.png",
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/src/components/decorative/Ornaments.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c2 = CoverBotanicals;
const PaperCorners = CoverCorners;
function DecorativeDivider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divider",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "divider-line"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "divider-mark"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "divider-line"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c3 = DecorativeDivider;
function FloralAccent({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `floral ${className}`,
        width: "84",
        height: "28",
        viewBox: "0 0 84 28",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 16C12 16 16 8 22 8C28 8 30 16 42 16C54 16 56 8 62 8C68 8 72 16 82 16",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "42",
                cy: "16",
                r: "1.6",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c4 = FloralAccent;
function EventGlyph({ type = "gathering" }) {
    if (type === "ceremony") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "event-icon",
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 4L16.4 10.2L23 11L18 15.6L19.5 22L14 18.7L8.5 22L10 15.6L5 11L11.6 10.2L14 4Z",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/decorative/Ornaments.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/decorative/Ornaments.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this);
    }
    if (type === "reception") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "event-icon",
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "14",
                    cy: "14",
                    r: "6.5",
                    stroke: "currentColor",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/decorative/Ornaments.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 7.5V4M14 24V20.5M7.5 14H4M24 14H20.5",
                    stroke: "currentColor",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/decorative/Ornaments.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/decorative/Ornaments.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "event-icon",
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 22C14 22 7 16.5 7 11.5C7 8.5 9.4 6.5 12 6.5C13.2 6.5 14 7.2 14 7.2C14 7.2 14.8 6.5 16 6.5C18.6 6.5 21 8.5 21 11.5C21 16.5 14 22 14 22Z",
            stroke: "currentColor",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/decorative/Ornaments.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_c5 = EventGlyph;
function PaperGrain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "paper-grain",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/decorative/Ornaments.tsx",
        lineNumber: 192,
        columnNumber: 10
    }, this);
}
_c6 = PaperGrain;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FloralCorner");
__turbopack_context__.k.register(_c1, "CoverCorners");
__turbopack_context__.k.register(_c2, "CoverBotanicals");
__turbopack_context__.k.register(_c3, "DecorativeDivider");
__turbopack_context__.k.register(_c4, "FloralAccent");
__turbopack_context__.k.register(_c5, "EventGlyph");
__turbopack_context__.k.register(_c6, "PaperGrain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/invitation/InvitationCover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationCover",
    ()=>InvitationCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Arabic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Monogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Monogram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$OpeningAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/invitation/OpeningAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InvitationContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function InvitationCover() {
    _s();
    const { isOpen, isOpening, openInvitation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"])();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const dateLine = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.coverLine;
    const mark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monogramMarks"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$OpeningAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpeningAnimation"], {
        show: !isOpen,
        opening: isOpening,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cover-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaperGrain"], {}, void 0, false, {
                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoverBotanicals"], {}, void 0, false, {
                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cover-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: isOpening && !reduce ? {
                                opacity: 0
                            } : {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.4,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bismillah"], {}, void 0, false, {
                                fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Monogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Monogram"], {
                            initialOne: mark.one,
                            initialTwo: mark.two,
                            joiner: mark.joiner,
                            size: "md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cover-names",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "cover-name",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personName"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.person1)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cover-and",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.monogramJoiner
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "cover-name",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personName"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.person2)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cover-together",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.togetherWithFamilies
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cover-date",
                            children: dateLine
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            className: "cover-open",
                            onClick: openInvitation,
                            animate: isOpening && !reduce ? {
                                opacity: 0,
                                y: 10
                            } : {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.openInvitation
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cover-hint",
                            children: "Tap to open"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "visually-hidden",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"])()
                        }, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/invitation/InvitationCover.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/invitation/InvitationCover.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/invitation/InvitationCover.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(InvitationCover, "ys9xOGZCwsABZ6MIKVKDJW1uTe4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = InvitationCover;
var _c;
__turbopack_context__.k.register(_c, "InvitationCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/invitation/InvitationExperience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationExperience",
    ()=>InvitationExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$CoupleIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/CoupleIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Countdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/EventsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Gallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$GuestStay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/GuestStay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$RSVP$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/RSVP.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$SaveTheDate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/SaveTheDate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$VenueSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/VenueSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$WeddingDate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/WeddingDate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/invitation/InvitationCover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FloatingNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MusicControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MusicControl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InvitationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function InvitationExperience({ startOpen = false, scrollTo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationProvider"], {
        startOpen: startOpen,
        scrollTo: scrollTo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invitation$2f$InvitationCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvitationCover"], {}, void 0, false, {
                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "paper",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].decorations.showPaperGrain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaperGrain"], {}, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                            lineNumber: 32,
                            columnNumber: 49
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoverCorners"], {}, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingNavigation"], {}, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MusicControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MusicControl"], {}, void 0, false, {
                            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "invitation-main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$SaveTheDate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveTheDate"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$CoupleIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoupleIntro"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$WeddingDate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeddingDate"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Countdown"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$EventsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsSection"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$VenueSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VenueSection"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$GuestStay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestStay"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].showPhotography ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gallery"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 44,
                                    columnNumber: 40
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$RSVP$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RSVP"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/invitation/InvitationExperience.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = InvitationExperience;
var _c;
__turbopack_context__.k.register(_c, "InvitationExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/invitation/OpeningAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpeningAnimation",
    ()=>OpeningAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OpeningAnimation({ show, opening, children }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "cover",
            role: "dialog",
            "aria-label": "Wedding invitation cover",
            initial: false,
            animate: opening && !reduce ? {
                opacity: 0,
                y: -36
            } : {
                opacity: 1,
                y: 0
            },
            exit: reduce ? {
                opacity: 0
            } : {
                opacity: 0,
                y: -52
            },
            transition: {
                duration: reduce ? 0.18 : 1.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/invitation/OpeningAnimation.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/invitation/OpeningAnimation.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(OpeningAnimation, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = OpeningAnimation;
var _c;
__turbopack_context__.k.register(_c, "OpeningAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Countdown",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/countdown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Countdown() {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Countdown.useEffect": ()=>{
            const tick = {
                "Countdown.useEffect.tick": ()=>setNow(Date.now())
            }["Countdown.useEffect.tick"];
            tick();
            const id = window.setInterval(tick, 1000);
            return ({
                "Countdown.useEffect": ()=>window.clearInterval(id)
            })["Countdown.useEffect"];
        }
    }["Countdown.useEffect"], []);
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountdown"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.iso, now ?? 0);
    const ready = now !== null;
    const cells = [
        {
            value: ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(parts.days, parts.days > 99 ? 3 : 2) : "—",
            label: "Days"
        },
        {
            value: ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(parts.hours) : "—",
            label: "Hours"
        },
        {
            value: ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(parts.minutes) : "—",
            label: "Minutes"
        },
        {
            value: ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(parts.seconds) : "—",
            label: "Seconds"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "countdown",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.countdownLabel
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Countdown.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown",
                "aria-live": "polite",
                children: cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-cell",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "countdown-value",
                                children: cell.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Countdown.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "countdown-unit",
                                children: cell.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Countdown.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, cell.label, true, {
                        fileName: "[project]/src/components/sections/Countdown.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Countdown.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            ready && parts.complete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "countdown-complete",
                children: "The celebration has begun."
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Countdown.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Countdown.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Countdown, "z7BF03mi9TSA+mHelO7IwQHRwX4=");
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/CoupleIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoupleIntro",
    ()=>CoupleIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Arabic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function CoupleIntro() {
    const { person1, person2 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "story",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.ourStory
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "couple-names",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "name",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personName"])(person1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "star-join",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "name",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personName"])(person2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArabicText"], {
                className: "arabic-dua",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.dua
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "1.6rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeDivider"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArabicText"], {
                className: "arabic-ayah",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.ayah
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArabicText"], {
                className: "ayah-ref",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.ayahRef
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "invite-copy",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.romanticLine
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CoupleIntro.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/CoupleIntro.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = CoupleIntro;
var _c;
__turbopack_context__.k.register(_c, "CoupleIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/EventCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventCard",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CalendarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CalendarButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MapButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MapButton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function EventCard({ event }) {
    const address = [
        event.address,
        event.city
    ].filter(Boolean).join(", ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "event-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventGlyph"], {
                type: event.icon
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "event-name",
                children: event.name
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: event.dateLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EventCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: event.timeLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EventCard.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "event-venue",
                children: event.venue
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            event.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "event-meta",
                children: event.description
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 20,
                columnNumber: 28
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MapButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapButton"], {
                        address: address,
                        mapUrl: event.mapUrl
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EventCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    event.addToCalendar !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CalendarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarButton"], {
                        event: event
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EventCard.tsx",
                        lineNumber: 23,
                        columnNumber: 42
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/EventCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/EventCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = EventCard;
var _c;
__turbopack_context__.k.register(_c, "EventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/EventsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventsSection",
    ()=>EventsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/EventCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function EventsSection() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "events",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.eventsHeading
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventsSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-list",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventCard"], {
                                event: event
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/EventsSection.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "2.2rem"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeDivider"], {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/EventsSection.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/EventsSection.tsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, event.id, true, {
                        fileName: "[project]/src/components/sections/EventsSection.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/EventsSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/EventsSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = EventsSection;
var _c;
__turbopack_context__.k.register(_c, "EventsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Monogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Monogram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const mark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monogramMarks"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "site-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Monogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Monogram"], {
                initialOne: mark.one,
                initialTwo: mark.two,
                joiner: mark.joiner,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.footerNote
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "place-line",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.fullLine
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Gallery() {
    _s();
    const images = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].gallery;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].showPhotography || !images.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "gallery",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "label section-heading",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.galleryHeading
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "album",
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `album-item is-${image.orientation}`,
                        onClick: ()=>setActive(index),
                        "aria-label": `Open ${image.alt}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSlot"], {
                            src: image.src,
                            alt: image.alt
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Gallery.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, image.id, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightbox, {
                images: images,
                index: active,
                onClose: ()=>setActive(null),
                onIndex: setActive
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Gallery.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Gallery, "UiziKGcot5E8nbuQQ2ZlRLdhk5k=");
_c = Gallery;
function Lightbox({ images, index, onClose, onIndex }) {
    _s1();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "Lightbox.useSyncExternalStore[mounted]": ()=>({
                "Lightbox.useSyncExternalStore[mounted]": ()=>undefined
            })["Lightbox.useSyncExternalStore[mounted]"]
    }["Lightbox.useSyncExternalStore[mounted]"], {
        "Lightbox.useSyncExternalStore[mounted]": ()=>true
    }["Lightbox.useSyncExternalStore[mounted]"], {
        "Lightbox.useSyncExternalStore[mounted]": ()=>false
    }["Lightbox.useSyncExternalStore[mounted]"]);
    const image = index === null ? null : images[index];
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Lightbox.useCallback[go]": (direction)=>{
            if (index === null) return;
            const next = (index + direction + images.length) % images.length;
            onIndex(next);
        }
    }["Lightbox.useCallback[go]"], [
        images.length,
        index,
        onIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightbox.useEffect": ()=>{
            if (index === null) return;
            const onKey = {
                "Lightbox.useEffect.onKey": (event)=>{
                    if (event.key === "Escape") onClose();
                    if (event.key === "ArrowRight") go(1);
                    if (event.key === "ArrowLeft") go(-1);
                }
            }["Lightbox.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            document.documentElement.classList.add("is-locked");
            return ({
                "Lightbox.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.documentElement.classList.remove("is-locked");
                }
            })["Lightbox.useEffect"];
        }
    }["Lightbox.useEffect"], [
        go,
        index,
        onClose
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: image && index !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "lightbox",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": image.alt,
            initial: reduce ? {
                opacity: 1
            } : {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "lightbox-close",
                    onClick: onClose,
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Gallery.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lightbox-frame",
                    onClick: (event)=>event.stopPropagation(),
                    onTouchStart: (event)=>{
                        const startX = event.changedTouches[0]?.clientX ?? 0;
                        const target = event.currentTarget;
                        const handleEnd = (endEvent)=>{
                            const endX = endEvent.changedTouches[0]?.clientX ?? startX;
                            const delta = endX - startX;
                            if (Math.abs(delta) > 48) go(delta < 0 ? 1 : -1);
                            target.removeEventListener("touchend", handleEnd);
                        };
                        target.addEventListener("touchend", handleEnd);
                    },
                    children: [
                        image.src ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "lightbox-image",
                            src: image.src,
                            alt: image.alt
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Gallery.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-slot",
                            style: {
                                aspectRatio: image.orientation === "landscape" ? "16 / 10" : "3 / 4"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "image-slot-fallback",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: image.alt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Gallery.tsx",
                                    lineNumber: 122,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Gallery.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Gallery.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "lightbox-nav is-prev",
                            onClick: ()=>go(-1),
                            "aria-label": "Previous photograph",
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Gallery.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "lightbox-nav is-next",
                            onClick: ()=>go(1),
                            "aria-label": "Next photograph",
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Gallery.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Gallery.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 85,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Gallery.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this), document.body);
}
_s1(Lightbox, "xegwZeWdoEN9KoEKVZcvbFpeS3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c1 = Lightbox;
var _c, _c1;
__turbopack_context__.k.register(_c, "Gallery");
__turbopack_context__.k.register(_c1, "Lightbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/GuestStay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestStay",
    ()=>GuestStay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function GuestStay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "stay",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.stayHeading
            }, void 0, false, {
                fileName: "[project]/src/components/sections/GuestStay.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "0.2rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeDivider"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/GuestStay.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/GuestStay.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "invite-copy",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.stayNote
            }, void 0, false, {
                fileName: "[project]/src/components/sections/GuestStay.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/GuestStay.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = GuestStay;
var _c;
__turbopack_context__.k.register(_c, "GuestStay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/RSVP.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RSVP",
    ()=>RSVP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Arabic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rsvp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function RSVP() {
    _s();
    const [attending, setAttending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [guestCount, setGuestCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedEvents, setSelectedEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dietary, setDietary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const guestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RSVP.useMemo[guestOptions]": ()=>Array.from({
                length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.maxGuests
            }, {
                "RSVP.useMemo[guestOptions]": (_, i)=>i + 1
            }["RSVP.useMemo[guestOptions]"])
    }["RSVP.useMemo[guestOptions]"], []);
    async function onSubmit(event) {
        event.preventDefault();
        if (attending === null) return;
        if (attending && selectedEvents.length === 0) {
            setError("Please choose at least one event.");
            return;
        }
        if (attending && !dietary) {
            setError("Please choose veg or non-veg.");
            return;
        }
        setError("");
        setPending(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitRsvp"])({
            attending,
            name: name.trim(),
            guestCount: attending ? guestCount : 0,
            events: attending ? selectedEvents : [],
            dietary: attending ? dietary : "",
            message: message.trim(),
            submittedAt: new Date().toISOString()
        });
        setPending(false);
        if (!result.ok) {
            setError(result.error ?? "We could not save your reply. Please try again.");
            return;
        }
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "rsvp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.rsvpHeading
            }, void 0, false, {
                fileName: "[project]/src/components/sections/RSVP.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "invite-copy",
                style: {
                    marginTop: 0
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.rsvpQuestion
            }, void 0, false, {
                fileName: "[project]/src/components/sections/RSVP.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArabicText"], {
                        className: "arabic-quiet",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].arabic.mashaAllah
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/RSVP.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rsvp-thanks",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.rsvpThankYou
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/RSVP.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/RSVP.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rsvp-choices",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn is-full",
                                "aria-pressed": attending === true,
                                onClick: ()=>setAttending(true),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.rsvpYes
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn is-ghost is-full",
                                "aria-pressed": attending === false,
                                onClick: ()=>setAttending(false),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.rsvpNo
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/RSVP.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    attending !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "rsvp-form",
                        onSubmit: onSubmit,
                        autoComplete: "off",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "rsvp-name",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "rsvp-name",
                                        name: "name",
                                        autoComplete: "name",
                                        required: true,
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            attending && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.showGuestCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "rsvp-guests",
                                        children: "Number of guests"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "rsvp-guests",
                                        value: guestCount,
                                        onChange: (e)=>setGuestCount(Number(e.target.value)),
                                        children: guestOptions.map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: count,
                                                children: count
                                            }, count, false, {
                                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                                lineNumber: 115,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this),
                            attending && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.showEventSelection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "field choice-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        children: "Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "choice-list",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events.map((item)=>{
                                            const checked = selectedEvents.includes(item.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `choice-card ${checked ? "is-checked" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "visually-hidden",
                                                        type: "checkbox",
                                                        checked: checked,
                                                        onChange: (e)=>{
                                                            setSelectedEvents((current)=>e.target.checked ? [
                                                                    ...current,
                                                                    item.id
                                                                ] : current.filter((id)=>id !== item.id));
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "choice-tick",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TickMark, {}, void 0, false, {
                                                            fileName: "[project]/src/components/sections/RSVP.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "choice-label",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                                lineNumber: 130,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, this),
                            attending && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.showDietary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "field choice-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        children: "Dietary preference"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "choice-list is-split",
                                        children: [
                                            {
                                                value: "veg",
                                                label: "Veg"
                                            },
                                            {
                                                value: "non-veg",
                                                label: "Non-veg"
                                            }
                                        ].map((option)=>{
                                            const checked = dietary === option.value;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `choice-card ${checked ? "is-checked" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "visually-hidden",
                                                        type: "radio",
                                                        name: "dietary",
                                                        checked: checked,
                                                        onChange: ()=>setDietary(option.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "choice-tick",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TickMark, {}, void 0, false, {
                                                            fileName: "[project]/src/components/sections/RSVP.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "choice-label",
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, option.value, true, {
                                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                                lineNumber: 166,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 157,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "rsvp-message",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "rsvp-message",
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/RSVP.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 189,
                                columnNumber: 17
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rsvp-error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 199,
                                columnNumber: 24
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn is-full",
                                type: "submit",
                                disabled: pending,
                                children: pending ? "Sending" : "Send Reply"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/RSVP.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/RSVP.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/RSVP.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/RSVP.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(RSVP, "pc5mOq1uKJ2u74MiyQ/c1K/fL1M=");
_c = RSVP;
function TickMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.2 6.2L4.7 8.7L9.8 3.3",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/RSVP.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/RSVP.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c1 = TickMark;
var _c, _c1;
__turbopack_context__.k.register(_c, "RSVP");
__turbopack_context__.k.register(_c1, "TickMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/SaveTheDate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveTheDate",
    ()=>SaveTheDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Arabic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decorative/Ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function SaveTheDate() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "date",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Arabic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bismillah"], {
                className: "arabic-quiet"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.saveTheDate
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "couple-names",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "name",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.person1.firstName
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cover-and",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.monogramJoiner
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "name",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].couple.person2.firstName
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "place-line",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.fullLine
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "place-line",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.location,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.city ? `  ·  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display.city}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "1.8rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decorative$2f$Ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeDivider"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "invite-copy",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.togetherWithFamilies,
                    "\n",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.inviteYou
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "visually-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"])()
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SaveTheDate.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/SaveTheDate.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SaveTheDate;
var _c;
__turbopack_context__.k.register(_c, "SaveTheDate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/VenueSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VenueSection",
    ()=>VenueSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MapButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MapButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CalendarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CalendarButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function VenueSection() {
    const mainEvent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events.find((event)=>event.id === "wedding") ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].events[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "venue",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.venueHeading
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "venue-name",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].venue.name
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "venue-address",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["venueFullAddress"])()
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "place-line",
                style: {
                    marginTop: "1rem"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].venue.dateLabel
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].venue.timeLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "place-line",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].venue.timeLabel
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MapButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapButton"], {}, void 0, false, {
                        fileName: "[project]/src/components/sections/VenueSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MapButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapButton"], {
                        directions: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/VenueSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    mainEvent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CalendarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarButton"], {
                        event: mainEvent
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/VenueSection.tsx",
                        lineNumber: 26,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/VenueSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/VenueSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = VenueSection;
var _c;
__turbopack_context__.k.register(_c, "VenueSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/WeddingDate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeddingDate",
    ()=>WeddingDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function WeddingDate() {
    const { month, year, days } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "wedding-date",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.saveTheDate
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WeddingDate.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "date-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "date-month",
                        children: month
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "date-year",
                        children: year
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "date-rule"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "date-pair",
                        children: days.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "date-pair-day",
                                children: [
                                    index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "date-pair-join",
                                        "aria-hidden": "true",
                                        children: "&"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "date-pair-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "date-weekday",
                                                children: item.weekday
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WeddingDate.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "date-day",
                                                children: item.day
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WeddingDate.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.day, true, {
                                fileName: "[project]/src/components/sections/WeddingDate.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WeddingDate.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WeddingDate.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/WeddingDate.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = WeddingDate;
var _c;
__turbopack_context__.k.register(_c, "WeddingDate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CalendarButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarButton",
    ()=>CalendarButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calendar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CalendarButton({ event }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarButton.useEffect": ()=>{
            if (!open) return;
            const onPointer = {
                "CalendarButton.useEffect.onPointer": (event)=>{
                    if (!rootRef.current?.contains(event.target)) setOpen(false);
                }
            }["CalendarButton.useEffect.onPointer"];
            const onKey = {
                "CalendarButton.useEffect.onKey": (event)=>{
                    if (event.key === "Escape") setOpen(false);
                }
            }["CalendarButton.useEffect.onKey"];
            document.addEventListener("pointerdown", onPointer);
            document.addEventListener("keydown", onKey);
            return ({
                "CalendarButton.useEffect": ()=>{
                    document.removeEventListener("pointerdown", onPointer);
                    document.removeEventListener("keydown", onKey);
                }
            })["CalendarButton.useEffect"];
        }
    }["CalendarButton.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "calendar-menu",
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn is-ghost",
                onClick: ()=>setOpen((v)=>!v),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.addToCalendar
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CalendarButton.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calendar-pop",
                role: "menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["googleCalendarUrl"])(event),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        role: "menuitem",
                        onClick: ()=>setOpen(false),
                        children: "Google Calendar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CalendarButton.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadIcs"])(event);
                            setOpen(false);
                        },
                        children: "Apple / ICS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CalendarButton.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CalendarButton.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CalendarButton.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(CalendarButton, "G2BV1pZrz+1GzCpP8X8+Oinj/0Y=");
_c = CalendarButton;
var _c;
__turbopack_context__.k.register(_c, "CalendarButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/FloatingNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNavigation",
    ()=>FloatingNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InvitationContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FloatingNavigation() {
    _s();
    const { isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingNavigation.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "FloatingNavigation.useEffect.onKey": (event)=>{
                    if (event.key === "Escape") setOpen(false);
                }
            }["FloatingNavigation.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "FloatingNavigation.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["FloatingNavigation.useEffect"];
        }
    }["FloatingNavigation.useEffect"], [
        open
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "float-nav",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "icon-btn",
                    "aria-expanded": open,
                    "aria-label": "Open invitation menu",
                    onClick: ()=>setOpen(true),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuGlyph, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    className: "nav-panel",
                    initial: reduce ? {
                        opacity: 1
                    } : {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    },
                    "aria-label": "Invitation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-btn nav-close",
                            "aria-label": "Close menu",
                            onClick: ()=>setOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseGlyph, {}, void 0, false, {
                                fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${item.id}`,
                                onClick: ()=>setOpen(false),
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(FloatingNavigation, "LGyro68NZRVHN+MYst48hg98bQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = FloatingNavigation;
function MenuGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 5.5H15M3 9H15M3 12.5H15",
            stroke: "currentColor",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c1 = MenuGlyph;
function CloseGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 5L13 13M13 5L5 13",
            stroke: "currentColor",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FloatingNavigation.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c2 = CloseGlyph;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FloatingNavigation");
__turbopack_context__.k.register(_c1, "MenuGlyph");
__turbopack_context__.k.register(_c2, "CloseGlyph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ImageSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageSlot",
    ()=>ImageSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ImageSlot({ src, alt, sizes = "(max-width: 768px) 100vw, 480px", priority = false, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `image-slot ${className}`.trim(),
        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            fill: true,
            sizes: sizes,
            priority: priority,
            loading: priority ? undefined : "lazy"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ImageSlot.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "image-slot-fallback",
            role: "img",
            "aria-label": alt,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloralMini, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/ImageSlot.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.photographPlaceholder
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ImageSlot.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ImageSlot.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ImageSlot.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ImageSlot;
function FloralMini() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "42",
        height: "42",
        viewBox: "0 0 42 42",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "21",
                cy: "21",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ImageSlot.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 8V12M21 30V34M8 21H12M30 21H34",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ImageSlot.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ImageSlot.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c1 = FloralMini;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImageSlot");
__turbopack_context__.k.register(_c1, "FloralMini");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/MapButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapButton",
    ()=>MapButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function MapButton({ address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["venueFullAddress"])(), mapUrl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].venue.mapUrl, directions = false }) {
    const fallback = directions ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}` : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const label = directions ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.getDirections : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.viewOnMaps;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "btn",
        href: fallback,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (event)=>{
            const preferred = directions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["directionsUrl"])(address) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapsSearchUrl"])(address, mapUrl);
            if (preferred !== fallback) {
                event.preventDefault();
                window.open(preferred, "_blank", "noopener,noreferrer");
            }
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/ui/MapButton.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = MapButton;
var _c;
__turbopack_context__.k.register(_c, "MapButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/MusicControl.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MusicControl",
    ()=>MusicControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InvitationContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MusicControl() {
    _s();
    const { isOpen, musicOn, toggleMusic, canPlayMusic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"])();
    if (!isOpen || !canPlayMusic) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "music-control",
        onClick: toggleMusic,
        "aria-pressed": musicOn,
        disabled: !canPlayMusic,
        "aria-label": musicOn ? "Pause music" : "Play music",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "music-note",
                "aria-hidden": "true",
                children: "♪"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MusicControl.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: musicOn ? "Pause" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].music.label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MusicControl.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MusicControl.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(MusicControl, "tilKjAWZJFoXRQN2sq8FveXknsU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InvitationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvitation"]
    ];
});
_c = MusicControl;
var _c;
__turbopack_context__.k.register(_c, "MusicControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Section({ id, children, className = "" }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        id: id,
        className: `section ${className}`.trim(),
        initial: reduce ? false : {
            opacity: 0,
            y: 28
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.18,
            margin: "80px 0px 80px 0px"
        },
        transition: {
            duration: 0.9,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Section, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/ui/SectionHeading.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SectionHeading.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/wedding.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        title: "Zoya & Raiyaan — Our Wedding",
        description: "Join us in Lucknow on 9 & 10 January 2027.",
        ogImageAlt: "Wedding invitation for Zoya and Raiyaan"
    },
    theme: "ivory-gold",
    locale: "en-US",
    couple: {
        person1: {
            firstName: "Zoya",
            lastName: "",
            initial: "Z",
            arabicName: "زويا",
            arabicInitial: "ز",
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
        iso: "2027-01-09T00:00:00+05:30",
        timezone: "Asia/Kolkata",
        display: {
            weekday: "Saturday & Sunday",
            month: "January",
            day: "9 & 10",
            year: "2027",
            time: "",
            city: "Lucknow",
            location: "MB Club",
            fullLine: "9 & 10 January 2027",
            coverLine: "January  •  9 & 10  •  2027",
            days: [
                {
                    weekday: "Saturday",
                    arabicWeekday: "السبت",
                    day: "9"
                },
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
        dateLabel: "9 & 10 January 2027",
        timeLabel: "",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MB+Club+Mahomed+Bagh+202+MG+Marg+Lucknow",
        imageSrc: ""
    },
    events: [
        {
            id: "wedding",
            name: "Nikah",
            arabicName: "النكاح",
            dateLabel: "Saturday, 9 January 2027",
            timeLabel: "Time to be announced",
            venue: "MB Club",
            address: "202, M.G. Marg, Cantonment",
            city: "Lucknow",
            description: "",
            icon: "ceremony",
            startIso: "2027-01-09T10:00:00+05:30",
            endIso: "2027-01-09T22:00:00+05:30",
            addToCalendar: true
        },
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
        invite: "تتشرف أسرتانا بدعوتكم\nلحضور عقد النكاح",
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
            id: "story",
            label: "The Couple",
            arabicLabel: "العروسان"
        },
        {
            id: "date",
            label: "Save the Date",
            arabicLabel: "احفظوا التاريخ"
        },
        {
            id: "events",
            label: "Events",
            arabicLabel: "الاحتفال"
        },
        {
            id: "venue",
            label: "Venue",
            arabicLabel: "المكان"
        },
        {
            id: "stay",
            label: "Stay",
            arabicLabel: "الضيافة"
        },
        {
            id: "rsvp",
            label: "RSVP",
            arabicLabel: "الرجاء الرد"
        }
    ],
    copy: {
        togetherWithFamilies: "Together with their families",
        inviteYou: "we invite you to celebrate\ntheir nikah",
        openInvitation: "Open Invitation",
        saveTheDate: "Save the Date",
        ourStory: "The Couple",
        romanticLine: "And of His signs is that He created for you spouses, that you may find rest in them, and He placed between you love and mercy.",
        countdownLabel: "Until we celebrate",
        eventsHeading: "The Celebration",
        venueHeading: "The Venue",
        stayHeading: "For Our Guests",
        stayNote: "Stay will be provided.\nKindly arrange your own travel.",
        galleryHeading: "Moments",
        rsvpHeading: "Kindly Reply",
        rsvpQuestion: "Will you be joining us, insha’Allah?",
        rsvpYes: "Yes, I’ll be there",
        rsvpNo: "Regretfully, no",
        rsvpThankYou: "JazakAllah khair. We have received your reply.",
        footerNote: "May Allah bless this union.",
        viewOnMaps: "View on Maps",
        getDirections: "Get Directions",
        addToCalendar: "Add to Calendar",
        photographPlaceholder: "Photograph"
    },
    rsvp: {
        showGuestCount: true,
        showEventSelection: true,
        showDietary: true,
        showMessage: true,
        maxGuests: 8
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/InvitationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvitationProvider",
    ()=>InvitationProvider,
    "useInvitation",
    ()=>useInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const InvitationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const MUSIC_KEY = "wedding:music";
function subscribeToHash(onChange) {
    window.addEventListener("hashchange", onChange);
    return ()=>window.removeEventListener("hashchange", onChange);
}
function getHash() {
    return window.location.hash.replace("#", "");
}
function InvitationProvider({ children, startOpen = false, scrollTo }) {
    _s();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToHash, getHash, {
        "InvitationProvider.useSyncExternalStore[hash]": ()=>""
    }["InvitationProvider.useSyncExternalStore[hash]"]);
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startOpen);
    const [isOpening, setIsOpening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicOn, setMusicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canPlayMusic = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].music.enabled && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].music.source);
    const isOpen = opened || startOpen || Boolean(hash);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvitationProvider.useEffect": ()=>{
            document.documentElement.classList.toggle("is-locked", !isOpen);
            return ({
                "InvitationProvider.useEffect": ()=>document.documentElement.classList.remove("is-locked")
            })["InvitationProvider.useEffect"];
        }
    }["InvitationProvider.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvitationProvider.useEffect": ()=>{
            if (!canPlayMusic) return;
            const audio = new Audio(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].music.source);
            audio.loop = true;
            audio.preload = "none";
            audioRef.current = audio;
            return ({
                "InvitationProvider.useEffect": ()=>{
                    audio.pause();
                    audioRef.current = null;
                }
            })["InvitationProvider.useEffect"];
        }
    }["InvitationProvider.useEffect"], [
        canPlayMusic
    ]);
    const playMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvitationProvider.useCallback[playMusic]": async ()=>{
            if (!audioRef.current) return;
            try {
                await audioRef.current.play();
                setMusicOn(true);
                sessionStorage.setItem(MUSIC_KEY, "on");
            } catch  {
                setMusicOn(false);
            }
        }
    }["InvitationProvider.useCallback[playMusic]"], []);
    const pauseMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvitationProvider.useCallback[pauseMusic]": ()=>{
            audioRef.current?.pause();
            setMusicOn(false);
            sessionStorage.setItem(MUSIC_KEY, "off");
        }
    }["InvitationProvider.useCallback[pauseMusic]"], []);
    const toggleMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvitationProvider.useCallback[toggleMusic]": ()=>{
            if (musicOn) pauseMusic();
            else void playMusic();
        }
    }["InvitationProvider.useCallback[toggleMusic]"], [
        musicOn,
        pauseMusic,
        playMusic
    ]);
    const openInvitation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvitationProvider.useCallback[openInvitation]": ()=>{
            if (isOpen || isOpening) return;
            setIsOpening(true);
            const reduce = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.setTimeout({
                "InvitationProvider.useCallback[openInvitation]": ()=>{
                    setOpened(true);
                    setIsOpening(false);
                }
            }["InvitationProvider.useCallback[openInvitation]"], reduce ? 80 : 1650);
            const preference = sessionStorage.getItem(MUSIC_KEY);
            if (canPlayMusic && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].music.autoplayAfterOpen && preference !== "off") {
                void playMusic();
            }
        }
    }["InvitationProvider.useCallback[openInvitation]"], [
        canPlayMusic,
        isOpen,
        isOpening,
        playMusic
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvitationProvider.useEffect": ()=>{
            const id = hash || scrollTo;
            if (!id || !isOpen) return;
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }["InvitationProvider.useEffect"], [
        hash,
        isOpen,
        scrollTo
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvitationProvider.useMemo[value]": ()=>({
                isOpen,
                isOpening,
                openInvitation,
                musicOn,
                toggleMusic,
                canPlayMusic
            })
    }["InvitationProvider.useMemo[value]"], [
        canPlayMusic,
        isOpen,
        isOpening,
        musicOn,
        openInvitation,
        toggleMusic
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InvitationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/InvitationContext.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(InvitationProvider, "ARHLzNFowGy/tqicm+GECl9ZQkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = InvitationProvider;
function useInvitation() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InvitationContext);
    if (!ctx) {
        throw new Error("useInvitation must be used within InvitationProvider");
    }
    return ctx;
}
_s1(useInvitation, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "InvitationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/calendar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildIcs",
    ()=>buildIcs,
    "downloadIcs",
    ()=>downloadIcs,
    "googleCalendarUrl",
    ()=>googleCalendarUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-client] (ecmascript)");
;
function toUtcStamp(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
function icsEscape(value) {
    return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}
function buildIcs(event) {
    const start = toUtcStamp(event.startIso);
    const end = toUtcStamp(event.endIso);
    const title = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"])()} — ${event.name}`;
    const location = [
        event.venue,
        event.address,
        event.city
    ].filter(Boolean).join(", ");
    const description = event.description || `${event.name} for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"])()}`;
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
        "END:VCALENDAR"
    ].join("\r\n");
}
function downloadIcs(event) {
    const ics = buildIcs(event);
    const blob = new Blob([
        ics
    ], {
        type: "text/calendar;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.id}.ics`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}
function googleCalendarUrl(event) {
    const start = toUtcStamp(event.startIso);
    const end = toUtcStamp(event.endIso);
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"])()} — ${event.name}`,
        dates: `${start}/${end}`,
        details: event.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].copy.inviteYou.replace(/\n/g, " "),
        location: [
            event.venue,
            event.address,
            event.city
        ].filter(Boolean).join(", ")
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/countdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCountdown",
    ()=>getCountdown
]);
function getCountdown(targetIso, now = Date.now()) {
    const target = new Date(targetIso).getTime();
    const totalMs = Number.isNaN(target) ? 0 : Math.max(0, target - now);
    const complete = totalMs <= 0;
    const days = Math.floor(totalMs / 86_400_000);
    const hours = Math.floor(totalMs % 86_400_000 / 3_600_000);
    const minutes = Math.floor(totalMs % 3_600_000 / 60_000);
    const seconds = Math.floor(totalMs % 60_000 / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
        complete,
        totalMs
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pad",
    ()=>pad
]);
function pad(value, size = 2) {
    return String(Math.max(0, value)).padStart(size, "0");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/maps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "directionsUrl",
    ()=>directionsUrl,
    "mapsSearchUrl",
    ()=>mapsSearchUrl
]);
function isAppleDevice() {
    if (typeof navigator === "undefined") return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function mapsSearchUrl(address, mapUrl) {
    if (mapUrl) return mapUrl;
    const query = encodeURIComponent(address);
    if (isAppleDevice()) {
        return `https://maps.apple.com/?q=${query}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
function directionsUrl(address) {
    const query = encodeURIComponent(address);
    if (isAppleDevice()) {
        return `https://maps.apple.com/?daddr=${query}&dirflg=d`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/rsvp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readRsvpDraft",
    ()=>readRsvpDraft,
    "submitRsvp",
    ()=>submitRsvp
]);
async function submitRsvp(payload) {
    if ("TURBOPACK compile-time truthy", 1) {
        sessionStorage.setItem("wedding:rsvp", JSON.stringify(payload));
    }
    try {
        const response = await fetch("/api/rsvp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json().catch(()=>({}));
        if (!response.ok || !data.ok) {
            return {
                ok: false,
                error: data.error ?? "We could not save your reply. Please try again."
            };
        }
        return {
            ok: true
        };
    } catch  {
        return {
            ok: false,
            error: "We could not save your reply. Please check your connection and try again."
        };
    }
}
function readRsvpDraft() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = sessionStorage.getItem("wedding:rsvp");
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1c1w4u1._.js.map