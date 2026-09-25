module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/rsvp/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$google$2d$sheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/google-sheets.ts [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const defaultOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://raiyaan555.github.io"
];
function allowedOrigin(request) {
    const origin = request.headers.get("origin");
    if (!origin) return null;
    const configured = (process.env.RSVP_ALLOWED_ORIGINS ?? "").split(",").map((value)=>value.trim()).filter(Boolean);
    const allowed = new Set([
        ...defaultOrigins,
        ...configured
    ]);
    return allowed.has(origin) ? origin : null;
}
function withCors(response, request) {
    const origin = allowedOrigin(request);
    if (!origin) return response;
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}
function OPTIONS(request) {
    return withCors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 204
    }), request);
}
function isPayload(value) {
    if (!value || typeof value !== "object") return false;
    const body = value;
    return typeof body.attending === "boolean" && typeof body.name === "string" && typeof body.guestCount === "number" && Array.isArray(body.events) && typeof body.dietary === "string" && typeof body.message === "string" && typeof body.submittedAt === "string";
}
async function POST(request) {
    let payload;
    try {
        payload = await request.json();
    } catch  {
        return withCors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Invalid reply."
        }, {
            status: 400
        }), request);
    }
    if (!isPayload(payload) || !payload.name.trim()) {
        return withCors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Please complete the required fields."
        }, {
            status: 400
        }), request);
    }
    if (payload.invitationSource === "groom") {
        return withCors(await saveGroomRsvp(payload), request);
    }
    const webhook = process.env.RSVP_SHEET_WEBHOOK;
    if (!webhook) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Google Sheet is not connected yet. Add RSVP_SHEET_WEBHOOK to .env.local."
        }, {
            status: 503
        });
    }
    const sheetRow = {
        timestamp: payload.submittedAt,
        name: payload.name.trim(),
        attending: payload.attending ? "Yes" : "No",
        guests: payload.guestCount,
        events: payload.events.join(", "),
        dietary: payload.dietary || "",
        message: payload.message.trim()
    };
    try {
        const response = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sheetRow),
            redirect: "follow"
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Google Sheet did not accept the reply. Please try again."
            }, {
                status: 502
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Could not reach the Google Sheet. Please try again."
        }, {
            status: 502
        });
    }
}
async function saveGroomRsvp(payload) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$google$2d$sheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendGroomRsvp"])({
            timestamp: payload.submittedAt,
            name: payload.name.trim(),
            attending: payload.attending ? "Yes" : "No",
            guests: payload.guestCount,
            events: payload.events.join(", "),
            dietary: payload.dietary || "",
            message: payload.message.trim()
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$google$2d$sheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SheetConfigError"]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Google Sheet is not connected yet."
            }, {
                status: 503
            });
        }
        console.error(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$google$2d$sheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SheetAppendError"] ? "Groom RSVP sheet append failed" : "Groom RSVP sheet append failed unexpectedly");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Could not reach the Google Sheet. Please try again."
        }, {
            status: 502
        });
    }
}
}),
"[project]/src/lib/google-sheets.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SheetAppendError",
    ()=>SheetAppendError,
    "SheetConfigError",
    ()=>SheetConfigError,
    "appendGroomRsvp",
    ()=>appendGroomRsvp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const tokenUrl = "https://oauth2.googleapis.com/token";
const sheetsScope = "https://www.googleapis.com/auth/spreadsheets";
const headerRow = [
    "timestamp",
    "name",
    "attending",
    "guests",
    "events",
    "dietary",
    "message",
    "invitation source"
];
class SheetConfigError extends Error {
    constructor(){
        super("Google Sheet is not configured.");
        this.name = "SheetConfigError";
    }
}
class SheetAppendError extends Error {
    constructor(){
        super("Google Sheet did not accept the reply.");
        this.name = "SheetAppendError";
    }
}
function privateKeyFromEnv(value) {
    const trimmed = value.trim();
    const unquoted = trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'") ? trimmed.slice(1, -1) : trimmed;
    return unquoted.replace(/\\n/g, "\n");
}
function readSheetConfig() {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
    const privateKey = process.env.GOOGLE_PRIVATE_KEY ? privateKeyFromEnv(process.env.GOOGLE_PRIVATE_KEY) : "";
    const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim();
    const tab = process.env.GOOGLE_SHEET_TAB?.trim() || "Sheet1";
    if (!email || !privateKey || !spreadsheetId) {
        throw new SheetConfigError();
    }
    return {
        email,
        privateKey,
        spreadsheetId,
        tab
    };
}
function sheetRange(tab, cells) {
    const safe = /^[A-Za-z0-9_]+$/.test(tab) ? tab : `'${tab.replace(/'/g, "''")}'`;
    return `${safe}!${cells}`;
}
function base64url(value) {
    return Buffer.from(value).toString("base64url");
}
async function accessToken(email, privateKey) {
    const issuedAt = Math.floor(Date.now() / 1000);
    const header = base64url(JSON.stringify({
        alg: "RS256",
        typ: "JWT"
    }));
    const claims = base64url(JSON.stringify({
        iss: email,
        scope: sheetsScope,
        aud: tokenUrl,
        iat: issuedAt,
        exp: issuedAt + 3600
    }));
    const unsigned = `${header}.${claims}`;
    const signer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createSign"])("RSA-SHA256");
    signer.update(unsigned);
    signer.end();
    const assertion = `${unsigned}.${signer.sign(privateKey).toString("base64url")}`;
    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            assertion
        })
    });
    if (!response.ok) throw new SheetAppendError();
    const data = await response.json();
    if (!data.access_token) throw new SheetAppendError();
    return data.access_token;
}
async function sheetsFetch(token, url, init) {
    const response = await fetch(url, {
        ...init,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            ...init?.headers
        }
    });
    if (!response.ok) throw new SheetAppendError();
    return response;
}
async function ensureHeader(config, token) {
    const range = encodeURIComponent(sheetRange(config.tab, "A1:H1"));
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.spreadsheetId)}/values/${range}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) throw new SheetAppendError();
    const data = await response.json();
    if (data.values?.length) return;
    await sheetsFetch(token, `${url}?valueInputOption=USER_ENTERED`, {
        method: "PUT",
        body: JSON.stringify({
            values: [
                headerRow
            ]
        })
    });
}
async function appendGroomRsvp(row) {
    const config = readSheetConfig();
    const token = await accessToken(config.email, config.privateKey);
    await ensureHeader(config, token);
    const range = encodeURIComponent(sheetRange(config.tab, "A:H"));
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.spreadsheetId)}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    await sheetsFetch(token, url, {
        method: "POST",
        body: JSON.stringify({
            values: [
                [
                    row.timestamp,
                    row.name,
                    row.attending,
                    row.guests,
                    row.events,
                    row.dietary,
                    row.message,
                    "groom"
                ]
            ]
        })
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1qooq6c._.js.map