import { ChapterPalette } from "@/types";

interface DressCodeBadgeProps {
  title: string;
  palette: ChapterPalette;
  /** Use lighter secondary tones for text on dark backgrounds (e.g. itinerary). */
  onDarkBackground?: boolean;
}

export default function DressCodeBadge({ title, palette, onDarkBackground }: DressCodeBadgeProps) {
  const c = onDarkBackground ? palette.secondary : palette.accent;
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-body font-semibold border"
      style={{
        color: c,
        borderColor: `${c}40`,
        backgroundColor: `${c}14`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: c }}
      />
      {title}
    </span>
  );
}
