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
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/guests/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/invitation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/guests.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/guest.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weddingConfig"].entry.prompt
        }, {
            status: 400
        });
    }
    if (!body || typeof body !== "object") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weddingConfig"].entry.prompt
        }, {
            status: 400
        });
    }
    const record = body;
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeGuestName"])(record.name);
    const invitationType = record.invitationType;
    if (!name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$invitation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weddingConfig"].entry.prompt
        }, {
            status: 400
        });
    }
    if (typeof invitationType !== "string" || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInvitationType"])(invitationType)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "This invitation could not be found."
        }, {
            status: 400
        });
    }
    try {
        const guest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$guests$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGuest"])(name, invitationType);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            guest
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Please try again."
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/config/invitation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/guests.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/guest.ts [app-route] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$guest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInvitationType"])(row.invitation_type)) {
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
"[project]/src/types/guest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1da7ej9._.js.map