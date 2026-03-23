"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WeddingEvent } from "@/types";
import { P } from "@/components/shared/RoyalPageLayout";

interface ChapterCardProps {
  event: WeddingEvent;
}

export function ChapterCard({ event }: ChapterCardProps) {
  return (
    <Link
      href={`/chapter/${event.slug}`}
      className="group relative block overflow-hidden rounded-sm transition-all duration-700"
      style={{
        border: `1px solid ${P.gold}0a`,
        backgroundColor: `${P.muted}20`,
      }}
    >
      {/* Text-only header (no chapter imagery) */}
      <div
        className="relative h-24 md:h-28 overflow-hidden flex items-center justify-end px-5 md:px-6"
        style={{
          background: `linear-gradient(135deg, ${event.palette.muted}80 0%, ${event.palette.background}cc 50%, ${event.palette.primary}35 100%)`,
        }}
      >
        <span
          className="text-xs md:text-[10px] uppercase tracking-[0.3em] font-body"
          style={{ color: `${event.palette.foreground}50` }}
        >
          {String(event.chapterNumber).padStart(2, "0")}
        </span>
      </div>

      {/* Gold accent line */}
      <motion.div
        className="h-[1px] w-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${P.gold}60, transparent)`,
        }}
      />

      {/* Content */}
      <div className="p-6 md:p-7">
        <p
          className="text-xs md:text-[10px] uppercase tracking-[0.2em] font-body mb-4"
          style={{ color: `${P.cream}7c` }}
        >
          {event.date} · {event.time}
        </p>

        <h3
          className="font-serif text-xl md:text-2xl mb-1.5 leading-tight transition-colors duration-300"
          style={{ color: `${P.cream}cc` }}
        >
          {event.title}
        </h3>

        <p
          className="font-serif text-sm italic mb-4"
          style={{ color: `${event.palette.accent}99` }}
        >
          {event.subtitle}
        </p>

        <p
          className="text-[13px] font-body line-clamp-2 leading-relaxed"
          style={{ color: `${P.cream}8c` }}
        >
          {event.tagline}
        </p>

        <div
          className="mt-5 pt-4 flex items-center justify-between"
          style={{ borderTop: `1px solid ${P.gold}08` }}
        >
          <span
            className="text-xs md:text-[10px] uppercase tracking-[0.15em] font-body"
            style={{ color: `${P.cream}c4` }}
          >
            {event.location}
          </span>
          <span
            className="text-sm group-hover:translate-x-1 transition-all duration-300"
            style={{ color: `${P.gold}50` }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
