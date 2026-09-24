import ExcelJS from "exceljs";
import { guestExportColumns, invitationTypeLabels } from "@/config/invitation";
import type { Guest, InvitationType } from "@/types/guest";

const sheetOrder: InvitationType[] = ["wedding", "reception", "both"];

export async function buildGuestWorkbook(guests: Guest[]) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Wedding Invitation";
  workbook.created = new Date();

  for (const type of sheetOrder) {
    const sheet = workbook.addWorksheet(invitationTypeLabels[type]);
    sheet.columns = [
      { header: guestExportColumns[0], key: "name", width: 32 },
      { header: guestExportColumns[1], key: "invitationType", width: 22 },
      { header: guestExportColumns[2], key: "timestamp", width: 28 },
    ];

    const matching = guests
      .filter((guest) => guest.invitationType === type)
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

    for (const guest of matching) {
      sheet.addRow({
        name: guest.name,
        invitationType: guest.invitationType,
        timestamp: guest.createdAt,
      });
    }

    sheet.eachRow((row, index) => {
      row.font = {
        name: "Calibri",
        bold: index === 1,
        color: { argb: "FF3C3934" },
      };
      row.alignment = { vertical: "middle" };
      row.height = index === 1 ? 22 : 18;
    });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}
