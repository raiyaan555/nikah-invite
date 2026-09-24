import { AdminLogin } from "@/components/stationery/AdminLogin";
import { ExcelExport } from "@/components/stationery/ExcelExport";
import { adminCopy, coupleLine, invitationTypeLabels } from "@/config/invitation";
import type { Guest, InvitationType } from "@/types/guest";

const order: InvitationType[] = ["wedding", "reception", "both"];

function formatTimestamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export function AdminDashboard({
  authenticated,
  error,
  total,
  counts,
  guests,
}: {
  authenticated: boolean;
  error?: string;
  total: number;
  counts: Record<InvitationType, number>;
  guests: Guest[];
}) {
  if (!authenticated) {
    return <AdminLogin error={error} />;
  }

  return (
    <div className="stationery-stage">
      <article className="stationery-card is-admin">
        <div className="stationery-copy">
          <p className="stationery-names stationery-names-quiet">{coupleLine()}</p>
          <dl className="guest-counts">
            <div>
              <dt>{adminCopy.totalGuests}</dt>
              <dd>{total}</dd>
            </div>
            {order.map((type) => (
              <div key={type}>
                <dt>{invitationTypeLabels[type]}</dt>
                <dd>{counts[type]}</dd>
              </div>
            ))}
          </dl>
          <ExcelExport />
          {guests.length > 0 ? (
            <ul className="guest-list">
              {guests.map((guest) => (
                <li key={guest.id}>
                  <span className="guest-name">{guest.name}</span>
                  <span className="guest-meta">
                    {invitationTypeLabels[guest.invitationType]}
                    <span aria-hidden="true"> · </span>
                    <time dateTime={guest.createdAt}>{formatTimestamp(guest.createdAt)}</time>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          <form action="/api/admin/logout" method="post">
            <button className="stationery-quiet" type="submit">
              {adminCopy.signOut}
            </button>
          </form>
        </div>
      </article>
    </div>
  );
}
