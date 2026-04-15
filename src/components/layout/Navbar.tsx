"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COUPLE, EVENTS_FOR_CHAPTER_NAV } from "@/content/events";
import { HashtagMark } from "@/components/HashtagMark";
import { P } from "@/components/shared/RoyalPageLayout";

const NAV_LINKS = [
  { href: "/story", label: "Our Story" },
  { href: "/itinerary", label: "Itinerary" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [chaptersHover, setChaptersHover] = useState(false);
  const [wardrobeOpen, setWardrobeOpen] = useState(false);
  const [wardrobeHover, setWardrobeHover] = useState(false);
  const chaptersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setChaptersOpen(false);
      setWardrobeOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
              backgroundColor: `${P.bg}e6`,
              backdropFilter: "blur(12px)",
              borderBottom: `1px solid ${P.gold}08`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-serif text-xl md:text-xl tracking-tight transition-colors duration-300 hover:opacity-80"
            style={{ color: P.cream }}
          >
            {COUPLE.partner1}{" "}
            <span style={{ color: `${P.gold}b3` }}>&amp;</span>{" "}
            {COUPLE.partner2}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {/* Chapters dropdown */}
            <div
              ref={chaptersRef}
              className="relative"
              onMouseEnter={() => setChaptersHover(true)}
              onMouseLeave={() => setChaptersHover(false)}
            >
              <button
                className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-body transition-colors duration-300 px-4 py-2 flex items-center gap-1"
                style={{ color: chaptersHover ? `${P.gold}e6` : `${P.cream}dc` }}
              >
                Chapters
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${chaptersHover ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {chaptersHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 min-w-[220px]"
                  >
                    <div
                      className="rounded-sm py-2 overflow-hidden"
                      style={{
                        backgroundColor: `${P.bg}f5`,
                        border: `1px solid ${P.gold}12`,
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                      }}
                    >
                      {EVENTS_FOR_CHAPTER_NAV.map((event) => (
                        <Link
                          key={event.slug}
                          href={`/chapter/${event.slug}`}
                          className="block px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-white/5"
                          style={{ color: `${P.cream}cc` }}
                        >
                          <span
                            className="text-xs md:text-[10px] uppercase tracking-wider block mb-0.5"
                            style={{ color: `${P.cream}8c` }}
                          >
                            Ch. {String(event.chapterNumber).padStart(2, "0")} · {event.dateShort} · {event.time.replace(/\s+onwards$/i, "").trim()}
                          </span>
                          <span className="font-serif">{event.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: `${P.gold}30` }} />
            {/* Wardrobe dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWardrobeHover(true)}
              onMouseLeave={() => setWardrobeHover(false)}
            >
              <button
                className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-body transition-colors duration-300 px-4 py-2 flex items-center gap-1"
                style={{ color: wardrobeHover ? `${P.gold}e6` : `${P.cream}dc` }}
              >
                Wardrobe
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${wardrobeHover ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {wardrobeHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 min-w-[220px]"
                  >
                    <div
                      className="rounded-sm py-2 overflow-hidden"
                      style={{
                        backgroundColor: `${P.bg}f5`,
                        border: `1px solid ${P.gold}12`,
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                      }}
                    >
                      {EVENTS_FOR_CHAPTER_NAV.map((event) => (
                        <Link
                          key={event.slug}
                          href={`/wardrobe?chapter=${event.slug}`}
                          className="block px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-white/5"
                          style={{ color: `${P.cream}cc` }}
                        >
                          <span
                            className="text-xs md:text-[10px] uppercase tracking-wider block mb-0.5"
                            style={{ color: `${P.cream}8c` }}
                          >
                            Ch. {String(event.chapterNumber).padStart(2, "0")} · {event.dateShort} · {event.time.replace(/\s+onwards$/i, "").trim()}
                          </span>
                          <span className="font-serif">{event.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: `${P.gold}30` }} />
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-body transition-colors duration-300 px-4 py-2"
                  style={{ color: `${P.cream}dc` }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = `${P.gold}cc`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = `${P.cream}dc`)
                  }
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span
                    className="w-0.5 h-0.5 rounded-full"
                    style={{ backgroundColor: `${P.gold}30` }}
                  />
                )}
              </span>
            ))}
            <Link
              href="/app"
              className="ml-3 text-xs md:text-[11px] uppercase tracking-[0.2em] font-body transition-all duration-300 px-4 py-1.5 rounded-sm"
              style={{
                color: `${P.gold}e6`,
                border: `1px solid ${P.gold}40`,
                background: `linear-gradient(to bottom, ${P.gold}10, transparent)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${P.gold}22, ${P.gold}08)`;
                e.currentTarget.style.borderColor = `${P.gold}70`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${P.gold}10, transparent)`;
                e.currentTarget.style.borderColor = `${P.gold}40`;
              }}
            >
              Open App
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center transition-colors"
            style={{ color: `${P.cream}e2` }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M6 18L18 6" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-hidden"
            style={{
              backgroundColor: `${P.bg}fa`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative arch in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 400 500"
                className="w-64 h-auto opacity-[0.03]"
                fill="none"
              >
                <path
                  d="M60 500 V220 Q60 80 200 30 Q340 80 340 220 V500"
                  stroke={P.gold}
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Scrollable menu  -  prevents overflow when Chapters / Wardrobe lists expand */}
            <div
              className="relative z-10 flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-4"
              style={{
                paddingTop: "calc(5.5rem + env(safe-area-inset-top, 0px))",
                paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
              }}
            >
              <div className="flex flex-col items-center gap-6 max-w-sm mx-auto w-full pb-4">
            {/* Chapters expandable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-stretch w-full gap-3"
            >
              <button
                type="button"
                onClick={() => setChaptersOpen(!chaptersOpen)}
                className="font-serif text-2xl sm:text-3xl transition-colors duration-300 flex items-center justify-center gap-2 shrink-0"
                style={{ color: `${P.cream}cc` }}
              >
                Chapters
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-200 ${chaptersOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {chaptersOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-h-[42vh] overflow-y-auto overflow-x-hidden flex flex-col gap-1.5 pr-1 -mr-1"
                  >
                    {EVENTS_FOR_CHAPTER_NAV.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/chapter/${event.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif text-base text-center py-2 px-3 rounded-sm transition-colors leading-tight"
                        style={{
                          color: `${P.cream}e2`,
                          backgroundColor: `${P.gold}08`,
                          border: `1px solid ${P.gold}12`,
                        }}
                      >
                        <span className="block text-[10px] uppercase tracking-[0.12em] mb-0.5 leading-tight" style={{ color: `${P.cream}c4` }}>
                          {event.dateShort} · {event.time.replace(/\s+onwards$/i, "").trim()} · Ch.{event.chapterNumber}
                        </span>
                        <span className="block">{event.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Wardrobe expandable (mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-stretch w-full gap-3"
            >
              <button
                type="button"
                onClick={() => setWardrobeOpen(!wardrobeOpen)}
                className="font-serif text-2xl sm:text-3xl transition-colors duration-300 flex items-center justify-center gap-2 shrink-0"
                style={{ color: `${P.cream}cc` }}
              >
                Wardrobe
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-200 ${wardrobeOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {wardrobeOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-h-[42vh] overflow-y-auto overflow-x-hidden flex flex-col gap-1.5 pr-1 -mr-1"
                  >
                    {EVENTS_FOR_CHAPTER_NAV.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/wardrobe?chapter=${event.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="font-serif text-base text-center py-2 px-3 rounded-sm transition-colors leading-tight"
                        style={{
                          color: `${P.cream}e2`,
                          backgroundColor: `${P.gold}08`,
                          border: `1px solid ${P.gold}12`,
                        }}
                      >
                        <span className="block text-[10px] uppercase tracking-[0.12em] mb-0.5 leading-tight" style={{ color: `${P.cream}c4` }}>
                          {event.dateShort} · {event.time.replace(/\s+onwards$/i, "").trim()} · Ch.{event.chapterNumber}
                        </span>
                        <span className="block">{event.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  delay: (i + 2) * 0.08 + 0.1,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="shrink-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl sm:text-3xl transition-colors duration-300 block text-center"
                  style={{ color: `${P.cream}cc` }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                delay: (NAV_LINKS.length + 2) * 0.08 + 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="shrink-0 w-full pt-2"
            >
              <Link
                href="/app"
                onClick={() => setMobileOpen(false)}
                className="block text-center font-body text-xs uppercase tracking-[0.25em] py-3 px-6 rounded-sm transition-colors"
                style={{
                  color: `${P.gold}e6`,
                  border: `1px solid ${P.gold}50`,
                  background: `linear-gradient(to bottom, ${P.gold}14, transparent)`,
                }}
              >
                Open App
              </Link>
            </motion.div>
              </div>
            </div>

            {/* Decorative bottom text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-20 shrink-0 flex flex-col items-center gap-2 py-4 border-t"
              style={{ borderColor: `${P.gold}10` }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-px w-8"
                  style={{
                    background: `linear-gradient(to right, transparent, ${P.gold}20)`,
                  }}
                />
                <div
                  className="w-1 h-1 rotate-45"
                  style={{ backgroundColor: `${P.gold}30` }}
                />
                <div
                  className="h-px w-8"
                  style={{
                    background: `linear-gradient(to left, transparent, ${P.gold}20)`,
                  }}
                />
              </div>
              <span
                className="text-xs md:text-[10px] tracking-[0.3em] font-body"
                style={{ color: `${P.gold}55` }}
              >
                <HashtagMark />
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
