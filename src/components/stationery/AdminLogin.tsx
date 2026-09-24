export function AdminLogin({ error }: { error?: string }) {
  return (
    <div className="stationery-stage">
      <article className="stationery-card">
        <form className="stationery-copy is-entry" action="/api/admin/login" method="post">
          <label className="stationery-kicker" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            className="stationery-field"
            autoComplete="current-password"
            required
          />
          {error === "invalid" ? (
            <p className="stationery-note" role="alert">
              Please try again.
            </p>
          ) : null}
          {error === "unconfigured" ? (
            <p className="stationery-note" role="alert">
              Add ADMIN_PASSWORD to the server environment.
            </p>
          ) : null}
          <button className="stationery-action" type="submit">
            Enter
          </button>
        </form>
      </article>
    </div>
  );
}
