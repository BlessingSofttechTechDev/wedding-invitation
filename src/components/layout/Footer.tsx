import Image from "next/image";
import { COUPLE } from "@/content/events";
import { HashtagMark } from "@/components/HashtagMark";
import { P } from "@/components/shared/RoyalPageLayout";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: P.bgDeep, borderTop: `1px solid ${P.gold}08` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-24 text-center">
        {/* Mughal arch motif */}
        <div className="flex justify-center mb-5 md:mb-8">
          <svg
            viewBox="0 0 200 120"
            className="w-24 md:w-32 h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ opacity: 0.08 }}
          >
            <path
              d="M20 120 V55 Q20 10 100 4 Q180 10 180 55 V120"
              stroke={P.gold}
              strokeWidth="0.8"
            />
            <path
              d="M35 120 V60 Q35 20 100 14 Q165 20 165 60 V120"
              stroke={P.gold}
              strokeWidth="0.4"
            />
            <circle cx="100" cy="28" r="2.5" fill={`${P.gold}12`} />
          </svg>
        </div>

        {/* Devanagari accent */}
        <p
          className="font-serif text-sm mb-3 md:mb-4 font-semibold tracking-[0.12em]"
          style={{ color: "#f0d9a8", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
        >
          शुभ विवाह
        </p>

        {/* Couple names */}
        <p className="font-serif text-2xl sm:text-2xl md:text-3xl mb-1.5 md:mb-2" style={{ color: `${P.cream}e0` }}>
          {COUPLE.partner1}{" "}
          <span style={{ color: `${P.gold}99` }}>&amp;</span>{" "}
          {COUPLE.partner2}
        </p>

        <p
          className="text-xs sm:text-xs md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-body mb-6 md:mb-10"
          style={{ color: `${P.gold}70` }}
        >
          <HashtagMark />
        </p>

        {/* Gold flourish divider */}
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-10">
          <div
            className="h-px w-10 md:w-20"
            style={{
              background: `linear-gradient(to right, transparent, ${P.gold}20)`,
            }}
          />
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ border: `1px solid ${P.gold}25` }}
          />
          <div
            className="h-px w-10 md:w-20"
            style={{
              background: `linear-gradient(to left, transparent, ${P.gold}20)`,
            }}
          />
        </div>

        <p
          className="text-xs md:text-[11px] font-body tracking-wide mb-6 md:mb-8"
          style={{ color: `${P.cream}d8` }}
        >
          April 20–22, 2026 · {COUPLE.location}
        </p>

        {/* Copyright + Blessing Softtech */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-sm sm:text-sm font-body tracking-wide" style={{ color: `${P.cream}c8` }}>
          <span>© 2026 All Rights Reserved</span>
          <span style={{ color: `${P.gold}45` }}>|</span>
          <a
            href="https://blessingsofttech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: `${P.cream}e4` }}
            aria-label="Blessing Softtech"
          >
            <Image
              src="/images/blessing-softtech.svg"
              alt=""
              width={26}
              height={26}
              className="shrink-0"
            />
            <span>Blessing Softtech</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
