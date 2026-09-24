function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`corner ${className}`}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 70C10 38 32 10 68 8C48 28 24 42 8 70Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M12 92C14 48 40 14 86 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M92 12C48 14 14 40 12 86"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 72C24 44 48 24 78 22C58 38 36 48 24 68"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M72 20C44 24 24 48 22 78C38 58 48 36 68 24"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M28 54C40 28 70 26 86 44C70 36 48 42 36 58"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M54 28C28 40 26 70 44 86C36 70 42 48 58 36"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M96 18C108 8 128 12 134 28C124 16 108 16 96 18Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M18 96C8 108 12 128 28 134C16 124 16 108 18 96Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M78 32C90 22 108 30 106 46C96 34 84 36 78 32Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M32 78C22 90 30 108 46 106C34 96 36 84 32 78Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M58 48C66 34 84 38 84 54C74 44 64 48 58 48Z"
        fill="currentColor"
        opacity="0.4"
      />
      <g fill="currentColor">
        <circle cx="34" cy="34" r="3.4" />
        <circle cx="34" cy="24.5" r="2.6" />
        <circle cx="43.5" cy="34" r="2.6" />
        <circle cx="34" cy="43.5" r="2.6" />
        <circle cx="24.5" cy="34" r="2.6" />
        <circle cx="41" cy="27" r="2.1" opacity="0.85" />
        <circle cx="41" cy="41" r="2.1" opacity="0.85" />
        <circle cx="27" cy="41" r="2.1" opacity="0.85" />
        <circle cx="27" cy="27" r="2.1" opacity="0.85" />
      </g>
      <g fill="currentColor">
        <circle cx="108" cy="30" r="2.6" />
        <circle cx="108" cy="24.4" r="1.8" />
        <circle cx="113.6" cy="30" r="1.8" />
        <circle cx="108" cy="35.6" r="1.8" />
        <circle cx="102.4" cy="30" r="1.8" />
      </g>
      <g fill="currentColor">
        <circle cx="30" cy="108" r="2.6" />
        <circle cx="30" cy="102.4" r="1.8" />
        <circle cx="35.6" cy="108" r="1.8" />
        <circle cx="30" cy="113.6" r="1.8" />
        <circle cx="24.4" cy="108" r="1.8" />
      </g>
      <circle cx="70" cy="18" r="1.3" fill="currentColor" />
      <circle cx="18" cy="70" r="1.3" fill="currentColor" />
      <circle cx="128" cy="22" r="1.15" fill="currentColor" opacity="0.75" />
      <circle cx="22" cy="128" r="1.15" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

export function CoverCorners() {
  return (
    <>
      <FloralCorner className="is-tl" />
      <FloralCorner className="is-tr" />
      <FloralCorner className="is-br" />
      <FloralCorner className="is-bl" />
    </>
  );
}

export function CoverBotanicals() {
  return (
    <>
      <div className="cover-botanical is-tr" aria-hidden="true">
        <img src="/images/decorations/floral-tr.png" alt="" />
      </div>
      <div className="cover-botanical is-bl" aria-hidden="true">
        <img src="/images/decorations/floral-bl.png" alt="" />
      </div>
    </>
  );
}

export const PaperCorners = CoverCorners;

export function DecorativeDivider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-mark" />
      <span className="divider-line" />
    </div>
  );
}

export function FloralAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`floral ${className}`}
      width="84"
      height="28"
      viewBox="0 0 84 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 16C12 16 16 8 22 8C28 8 30 16 42 16C54 16 56 8 62 8C68 8 72 16 82 16"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="42" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function EventGlyph({
  type = "gathering",
}: {
  type?: "mehendi" | "haldi" | "ceremony" | "reception" | "gathering";
}) {
  if (type === "ceremony") {
    return (
      <svg className="event-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L16.4 10.2L23 11L18 15.6L19.5 22L14 18.7L8.5 22L10 15.6L5 11L11.6 10.2L14 4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "reception") {
    return (
      <svg className="event-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="6.5" stroke="currentColor" strokeWidth="1" />
        <path d="M14 7.5V4M14 24V20.5M7.5 14H4M24 14H20.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg className="event-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 22C14 22 7 16.5 7 11.5C7 8.5 9.4 6.5 12 6.5C13.2 6.5 14 7.2 14 7.2C14 7.2 14.8 6.5 16 6.5C18.6 6.5 21 8.5 21 11.5C21 16.5 14 22 14 22Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function PaperGrain() {
  return <div className="paper-grain" aria-hidden="true" />;
}
