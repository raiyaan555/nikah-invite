export function pad(value: number, size = 2) {
  return String(Math.max(0, value)).padStart(size, "0");
}
