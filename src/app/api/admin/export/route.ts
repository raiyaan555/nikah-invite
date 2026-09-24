import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { buildGuestWorkbook } from "@/lib/excel";
import { listGuests } from "@/lib/guests";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  const workbook = await buildGuestWorkbook(listGuests("asc"));

  return new NextResponse(new Uint8Array(workbook), {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="wedding-guests.xlsx"',
      "Cache-Control": "no-store",
    },
  });
}
