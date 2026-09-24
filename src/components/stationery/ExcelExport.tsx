import { adminCopy } from "@/config/invitation";

export function ExcelExport() {
  return (
    <a className="stationery-action" href="/api/admin/export">
      {adminCopy.exportExcel}
    </a>
  );
}
