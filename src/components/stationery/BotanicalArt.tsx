import type { InvitationType } from "@/types/guest";

type Placement = [number, number, number, number];

const slender =
  "M0 2 C9 -10 16 -40 5 -86 C2 -48 1 -22 0 -8 C-1 -22 -2 -48 -5 -86 C-16 -40 -9 -10 0 2 Z";

const broad =
  "M0 2 C16 -8 28 -34 12 -72 C4 -40 2 -18 0 -8 C-2 -18 -4 -40 -12 -72 C-28 -34 -16 -8 0 2 Z";

const soft =
  "M0 0 C18 -6 30 -28 16 -64 C6 -36 3 -16 0 -8 C-3 -16 -6 -36 -16 -64 C-30 -28 -18 -6 0 0 Z";

function arc(
  count: number,
  cx: number,
  cy: number,
  radius: number,
  start: number,
  sweep: number,
  scale: number,
  turnOffset = 0,
): Placement[] {
  return Array.from({ length: count }, (_, index) => {
    const turn = start + (sweep * index) / Math.max(count - 1, 1);
    const wobble = ((index * 17) % 9) - 4;
    const distance = radius + wobble * 2.2;
    const x = cx + Math.cos(turn) * distance;
    const y = cy + Math.sin(turn) * distance;
    const rotation = (turn * 180) / Math.PI + 90 + turnOffset + ((index % 4) - 1.5) * 9;
    const size = scale * (0.9 + ((index * 3) % 5) * 0.045);
    return [
      Number(x.toFixed(1)),
      Number(y.toFixed(1)),
      Number(rotation.toFixed(1)),
      Number(size.toFixed(2)),
    ];
  });
}

function spray(count: number, originX: number, originY: number, step: number, scale: number): Placement[] {
  return Array.from({ length: count }, (_, index) => {
    const side = index % 2 === 0 ? 1 : -1;
    const x = originX + side * (18 + (index % 3) * 8) + Math.sin(index * 0.7) * 10;
    const y = originY + index * step;
    const rotation = side * (28 + (index % 3) * 8);
    const size = scale * (0.92 + (index % 4) * 0.06);
    return [Number(x.toFixed(1)), Number(y.toFixed(1)), Number(rotation.toFixed(1)), Number(size.toFixed(2))];
  });
}

function Leaves({ leaves, d }: { leaves: Placement[]; d: string }) {
  return (
    <>
      {leaves.map(([x, y, rotation, scale], index) => (
        <path
          key={`${x}-${y}-${index}`}
          d={d}
          transform={`translate(${x} ${y}) rotate(${rotation}) scale(${scale})`}
        />
      ))}
    </>
  );
}

function WeddingBotanical() {
  return (
    <svg viewBox="150 40 360 400" fill="currentColor" aria-hidden="true">
      <Leaves leaves={arc(20, 360, 230, 128, -2.6, 5.2, 1.22)} d={slender} />
      <Leaves leaves={arc(14, 368, 236, 78, -2.3, 4.7, 1.05, 16)} d={broad} />
      <Leaves leaves={arc(9, 372, 228, 38, -1.2, 4.4, 0.9)} d={broad} />
    </svg>
  );
}

function ReceptionBotanical() {
  return (
    <svg viewBox="240 0 240 820" fill="currentColor" aria-hidden="true">
      <path
        d="M360 8 C348 150 392 270 354 420 C326 560 388 670 352 820"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <Leaves leaves={spray(12, 348, 24, 62, 1.08)} d={soft} />
    </svg>
  );
}

function CombinedBotanical() {
  return (
    <svg viewBox="170 0 400 860" fill="currentColor" aria-hidden="true">
      <Leaves leaves={arc(16, 390, 200, 118, -2.5, 5, 1.12)} d={slender} />
      <Leaves leaves={arc(11, 398, 206, 70, -2.2, 4.6, 0.95, 14)} d={broad} />
      <g opacity="0.9">
        <path
          d="M360 430 C346 530 392 610 356 760"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <Leaves leaves={spray(6, 348, 440, 52, 0.95)} d={soft} />
      </g>
    </svg>
  );
}

export function BotanicalArt({ type }: { type: InvitationType }) {
  if (type === "wedding") return <WeddingBotanical />;
  if (type === "reception") return <ReceptionBotanical />;
  return <CombinedBotanical />;
}
