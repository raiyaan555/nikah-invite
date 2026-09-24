import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { Guest, InvitationType } from "@/types/guest";
import { isInvitationType } from "@/types/guest";

type GuestRow = {
  id: string;
  name: string;
  invitation_type: string;
  created_at: string;
};

const globalForGuests = globalThis as unknown as { guestsDb?: DatabaseSync };

function databasePath() {
  const directory = path.join(process.cwd(), "data");
  fs.mkdirSync(directory, { recursive: true });
  return path.join(directory, "guests.db");
}

function getDatabase() {
  if (!globalForGuests.guestsDb) {
    const database = new DatabaseSync(databasePath());
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

function mapGuest(row: GuestRow): Guest {
  if (!isInvitationType(row.invitation_type)) {
    throw new Error("Stored invitation type is invalid.");
  }

  return {
    id: row.id,
    name: row.name,
    invitationType: row.invitation_type,
    createdAt: row.created_at,
  };
}

export function normalizeGuestName(value: unknown) {
  if (typeof value !== "string") return null;
  const name = value.replace(/[\u0000-\u001F\u007F]/g, "").trim().replace(/\s+/g, " ");
  if (!name || name.length > 80) return null;
  return name;
}

export function createGuest(name: string, invitationType: InvitationType): Guest {
  const guest: Guest = {
    id: crypto.randomUUID(),
    name,
    invitationType,
    createdAt: new Date().toISOString(),
  };

  getDatabase()
    .prepare(
      "INSERT INTO guests (id, name, invitation_type, created_at) VALUES (?, ?, ?, ?)",
    )
    .run(guest.id, guest.name, guest.invitationType, guest.createdAt);

  return guest;
}

export function listGuests(order: "asc" | "desc" = "desc"): Guest[] {
  const direction = order === "asc" ? "ASC" : "DESC";
  const rows = getDatabase()
    .prepare(
      `SELECT id, name, invitation_type, created_at FROM guests ORDER BY created_at ${direction}`,
    )
    .all() as GuestRow[];

  return rows.map(mapGuest);
}

export function countGuests() {
  const counts: Record<InvitationType, number> = {
    wedding: 0,
    reception: 0,
    both: 0,
  };

  for (const guest of listGuests("asc")) {
    counts[guest.invitationType] += 1;
  }

  return {
    total: counts.wedding + counts.reception + counts.both,
    counts,
  };
}
