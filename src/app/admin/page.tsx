import { AdminDashboard } from "@/components/stationery/AdminDashboard";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { countGuests, listGuests } from "@/lib/guests";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [{ error }, authenticated] = await Promise.all([
    searchParams,
    isAdminAuthenticated(),
  ]);

  if (!authenticated) {
    return <AdminDashboard authenticated={false} error={error} total={0} counts={{ wedding: 0, reception: 0, both: 0 }} guests={[]} />;
  }

  const { total, counts } = countGuests();

  return (
    <AdminDashboard
      authenticated
      total={total}
      counts={counts}
      guests={listGuests("desc")}
    />
  );
}
