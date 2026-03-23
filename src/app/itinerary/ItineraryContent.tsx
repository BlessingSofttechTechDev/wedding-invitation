"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { EVENTS } from "@/content/events";
import { WeddingEvent } from "@/types";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInView from "@/components/motion/FadeInView";
import DressCodeBadge from "@/components/shared/DressCodeBadge";
import {
  P,
  RoyalPageHero,
  RoyalPageWrapper,
  RoyalFlourish,
} from "@/components/shared/RoyalPageLayout";

/** Readable on maroon cards; lighter than raw palette.accent */
const itineraryAccentText = (event: WeddingEvent) => event.palette.secondary;

/** Schedule times / section dates — bright gold, bold */
const ITINERARY_GOLD_TEXT = "#f8e8b8";
const ITINERARY_GOLD_MUTED = "#e8d48a";

/* ────────────────────────────────────────────────────────
   Google Calendar — opens directly in the calendar app
   ──────────────────────────────────────────────────────── */

function to24h(hours: number, period: string): number {
  if (period === "PM" && hours !== 12) return hours + 12;
  if (period === "AM" && hours === 12) return 0;
  return hours;
}

function parseEventTime(time: string): { startH: number; startM: number; endH: number; endM: number } {
  const onwardsMatch = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*onwards/i);
  if (onwardsMatch) {
    const h = to24h(parseInt(onwardsMatch[1]), onwardsMatch[3].toUpperCase());
    const m = parseInt(onwardsMatch[2]);
    return { startH: h, startM: m, endH: Math.min(h + 4, 23), endM: m };
  }

  const rangeMatch = time.match(
    /(\d{1,2}):(\d{2})\s*(AM|PM)\s*[–\-]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i
  );
  if (rangeMatch) {
    return {
      startH: to24h(parseInt(rangeMatch[1]), rangeMatch[3].toUpperCase()),
      startM: parseInt(rangeMatch[2]),
      endH: to24h(parseInt(rangeMatch[4]), rangeMatch[6].toUpperCase()),
      endM: parseInt(rangeMatch[5]),
    };
  }

  const byMatch = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (byMatch) {
    const h = to24h(parseInt(byMatch[1]), byMatch[3].toUpperCase());
    return { startH: Math.max(h - 3, 0), startM: 0, endH: h, endM: parseInt(byMatch[2]) };
  }

  return { startH: 18, startM: 0, endH: 22, endM: 0 };
}

const DATE_MAP: Record<string, string> = {
  "Apr 19": "20260419",
  "Apr 20": "20260420",
  "Apr 21": "20260421",
  "Apr 22": "20260422",
};

function getGoogleCalendarUrl(event: WeddingEvent): string {
  const dateStr = DATE_MAP[event.dateShort] || "20260420";
  const { startH, startM, endH, endM } = parseEventTime(event.time);

  const pad = (n: number) => String(n).padStart(2, "0");
  const startIST = `${dateStr}T${pad(startH)}${pad(startM)}00`;
  const endIST = `${dateStr}T${pad(endH)}${pad(endM)}00`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.title} — T & S Wedding`,
    dates: `${startIST}/${endIST}`,
    ctz: "Asia/Kolkata",
    location: `${event.location}, ${event.venue}`,
    details: event.description,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/* ────────────────────────────────────────────────────────
   Group events by date
   ──────────────────────────────────────────────────────── */

interface DateGroup {
  dateShort: string;
  fullDate: string;
  day: string;
  events: WeddingEvent[];
}

const dateGroups: DateGroup[] = EVENTS.reduce<DateGroup[]>((acc, event) => {
  const existing = acc.find((g) => g.dateShort === event.dateShort);
  if (existing) {
    existing.events.push(event);
  } else {
    acc.push({
      dateShort: event.dateShort,
      fullDate: event.date,
      day: event.day,
      events: [event],
    });
  }
  return acc;
}, []);

/* ────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────── */

export default function ItineraryContent() {
  const [activeSlug, setActiveSlug] = useState<string>(EVENTS[0].slug);
  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px" }
    );

    Object.values(eventRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollToEvent(slug: string) {
    eventRefs.current[slug]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <RoyalPageWrapper>
      <Navbar />

      <RoyalPageHero
        label="Udaipur"
        title="The Itinerary"
        subtitle="The celebration in Udaipur"
      />

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-6 pb-40 lg:flex lg:gap-16">
        {/* Sticky sidebar — desktop only */}
        <aside className="hidden lg:block lg:w-60 shrink-0 sticky top-32 h-fit self-start">
          <nav>
            <p
              className="text-[11px] uppercase tracking-[0.25em] mb-5 font-semibold"
              style={{ color: ITINERARY_GOLD_MUTED }}
            >
              Chapters
            </p>
            <div className="space-y-1">
              {EVENTS.map((event) => (
                <button
                  key={event.slug}
                  onClick={() => scrollToEvent(event.slug)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-sm text-sm transition-all duration-300",
                    activeSlug === event.slug
                      ? "font-medium"
                      : ""
                  )}
                  style={{
                    backgroundColor:
                      activeSlug === event.slug
                        ? `${P.muted}40`
                        : "transparent",
                    border: `1px solid ${activeSlug === event.slug
                      ? `${P.gold}12`
                      : "transparent"
                      }`,
                    color:
                      activeSlug === event.slug
                        ? P.cream
                        : `${P.cream}98`,
                  }}
                >
                  <span
                    className="block text-xs md:text-[10px] uppercase tracking-widest mb-0.5"
                    style={{ color: `${P.cream}7c` }}
                  >
                    {event.dateShort} ·{" "}
                    {event.time.split(/[–\-]/)[0].replace("onwards", "").trim()}
                  </span>
                  <span className="block">{event.title}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Timeline content */}
        <main className="flex-1 min-w-0">
          {dateGroups.map((group, gi) => (
            <section key={group.dateShort} className={gi > 0 ? "mt-28" : ""}>
              {/* Date heading */}
              <FadeInView>
                <div className="mb-14 pl-10">
                  <p
                    className="text-[11px] uppercase tracking-[0.3em] mb-2 font-semibold"
                    style={{ color: ITINERARY_GOLD_MUTED }}
                  >
                    {group.day}
                  </p>
                  <h2
                    className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
                    style={{ color: ITINERARY_GOLD_TEXT }}
                  >
                    {group.fullDate}
                  </h2>
                  <RoyalFlourish className="mt-4 justify-start" />
                </div>
              </FadeInView>

              {/* Timeline */}
              <div className="relative pl-10">
                {/* Vertical line */}
                <div
                  className="absolute left-[7px] top-2 bottom-0 w-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${P.gold}70, ${P.gold}35, transparent)`,
                  }}
                />

                {group.events.map((event, ei) => (
                  <div
                    key={event.slug}
                    id={event.slug}
                    ref={(el) => {
                      eventRefs.current[event.slug] = el;
                    }}
                    className={cn("relative", ei > 0 ? "mt-14" : "")}
                  >
                    <FadeInView delay={ei * 0.12}>
                      {/* Timeline dot — diamond shape */}
                      <div
                        className="absolute -left-10 top-8 z-10 flex items-center justify-center"
                        style={{ width: 16, height: 16 }}
                      >
                        <div
                          className="w-3 h-3 rotate-45 transition-all duration-500"
                          style={{
                            border: `1.5px solid ${P.gold}`,
                            backgroundColor:
                              activeSlug === event.slug
                                ? `${P.gold}45`
                                : P.bg,
                            boxShadow:
                              activeSlug === event.slug
                                ? `0 0 14px ${P.gold}55`
                                : "none",
                          }}
                        />
                      </div>

                      {/* Event card */}
                      <div
                        className="rounded-sm p-7 md:p-9 transition-all duration-700 relative overflow-hidden"
                        style={{
                          backgroundColor: `${event.palette.primary}12`,
                          border: `1px solid ${P.gold}0a`,
                          boxShadow:
                            activeSlug === event.slug
                              ? `0 0 80px ${event.palette.primary}10`
                              : "none",
                        }}
                      >
                        {/* Corner ornaments */}
                        <div
                          className="absolute top-2 left-2 w-3 h-3"
                          style={{
                            borderTop: `1px solid ${P.gold}10`,
                            borderLeft: `1px solid ${P.gold}10`,
                          }}
                        />
                        <div
                          className="absolute top-2 right-2 w-3 h-3"
                          style={{
                            borderTop: `1px solid ${P.gold}10`,
                            borderRight: `1px solid ${P.gold}10`,
                          }}
                        />

                        {/* Time pill — light gold, bold (readable on dark cards) */}
                        <div
                          className="inline-flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-sm mb-5"
                          style={{
                            color: ITINERARY_GOLD_TEXT,
                            backgroundColor: `${P.gold}22`,
                            border: `1px solid ${P.gold}35`,
                          }}
                        >
                          <Clock size={13} strokeWidth={2.25} />
                          <span>{event.time}</span>
                        </div>

                        <p
                          className="text-xs md:text-[10px] uppercase tracking-[0.3em] font-body font-semibold mb-2"
                          style={{ color: itineraryAccentText(event) }}
                        >
                          {event.chapterNumber >= 1
                            ? `Chapter ${event.chapterNumber}`
                            : "The Finale"}
                        </p>
                        <h3
                          className="font-serif text-2xl md:text-3xl mb-1.5 leading-tight"
                          style={{ color: P.cream }}
                        >
                          {event.title}
                        </h3>
                        {event.subtitle ? (
                          <p
                            className="text-sm italic font-medium mb-5"
                            style={{ color: itineraryAccentText(event) }}
                          >
                            {event.subtitle}
                          </p>
                        ) : (
                          <div className="mb-5" />
                        )}

                        <p
                          className="leading-[1.8] mb-6 max-w-2xl text-[15px]"
                          style={{ color: `${P.cream}d8` }}
                        >
                          {event.description}
                        </p>

                        <div
                          className="flex items-center gap-2 text-sm mb-5"
                          style={{ color: `${P.cream}98` }}
                        >
                          <MapPin size={14} className="shrink-0" />
                          <span>
                            {event.location}, {event.venue}
                          </span>
                        </div>

                        <div className="mb-7">
                          <DressCodeBadge
                            title={event.dressCode.title}
                            palette={event.palette}
                            onDarkBackground
                          />
                        </div>

                        {/* Actions */}
                        <div
                          className="flex flex-wrap items-center gap-6 pt-5"
                          style={{ borderTop: `1px solid ${P.gold}0a` }}
                        >
                          {event.slug !== "gratitude" && event.slug !== "departure" && (
                            <Link
                              href={`/chapter/${event.slug}`}
                              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                              style={{ color: itineraryAccentText(event) }}
                            >
                              Explore Chapter
                              <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </Link>
                          )}

                          <a
                            href={getGoogleCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:opacity-80"
                            style={{ color: `${P.cream}98` }}
                          >
                            <Calendar size={14} />
                            Add to Calendar
                          </a>
                        </div>
                      </div>
                    </FadeInView>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </RoyalPageWrapper>
  );
}
