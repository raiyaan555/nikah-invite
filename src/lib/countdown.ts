export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
  totalMs: number;
};

export function getCountdown(targetIso: string, now = Date.now()): CountdownParts {
  const target = new Date(targetIso).getTime();
  const totalMs = Number.isNaN(target) ? 0 : Math.max(0, target - now);
  const complete = totalMs <= 0;

  const days = Math.floor(totalMs / 86_400_000);
  const hours = Math.floor((totalMs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((totalMs % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMs % 60_000) / 1000);

  return { days, hours, minutes, seconds, complete, totalMs };
}
