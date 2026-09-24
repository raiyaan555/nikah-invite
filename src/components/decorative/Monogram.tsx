type MonogramProps = {
  initialOne: string;
  initialTwo: string;
  joiner?: string;
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
  arabic?: boolean;
  className?: string;
};

export function Monogram({
  initialOne,
  initialTwo,
  joiner = "·",
  size = "md",
  className = "",
}: MonogramProps) {
  return (
    <div
      className={`monogram is-${size}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <span className="monogram-initial">{initialOne}</span>
      <span className="monogram-join">{joiner}</span>
      <span className="monogram-initial">{initialTwo}</span>
    </div>
  );
}
