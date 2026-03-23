"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { COUPLE } from "@/content/events";
import FadeInView from "@/components/motion/FadeInView";
import {
  P,
  RoyalFlourish,
  RoyalDivider,
  RoyalPageWrapper,
} from "@/components/shared/RoyalPageLayout";

/** Single editorial image — venue only (meaningful, one network decode). */
const VENUE_IMAGE =
  "/cdn-images/f_auto,q_auto:good,w_1600/v1773415146/fairmont_rbltfh.jpg";

/* ─────────────────────────────────────────────────────────────── */
/*  Light ornament — fewer nodes than full mehendi border          */
/* ─────────────────────────────────────────────────────────────── */

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-px flex-1 max-w-24"
        style={{
          background: `linear-gradient(to right, transparent, ${P.gold}35)`,
        }}
      />
      <div
        className="w-1.5 h-1.5 rotate-45 shrink-0"
        style={{ border: `1px solid ${P.gold}40` }}
      />
      <div
        className="h-px flex-1 max-w-24"
        style={{
          background: `linear-gradient(to left, transparent, ${P.gold}35)`,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Hero — gradient only, no grain / no parallax / no photo        */
/* ─────────────────────────────────────────────────────────────── */

function StoryHero() {
  return (
    <section
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
      style={{
        backgroundColor: P.bg,
        backgroundImage: `
          radial-gradient(ellipse 80% 55% at 50% -10%, rgba(139, 26, 26, 0.14), transparent 55%),
          radial-gradient(ellipse 50% 40% at 80% 60%, rgba(212, 175, 55, 0.06), transparent 60%),
          radial-gradient(ellipse 45% 35% at 15% 70%, rgba(212, 175, 55, 0.04), transparent 55%),
          linear-gradient(180deg, ${P.bgDeep} 0%, ${P.bg} 45%, ${P.bg} 100%)
        `,
      }}
    >
      {/* Subtle arch — static SVG, no animation */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-24 opacity-[0.07]">
        <svg
          viewBox="0 0 400 320"
          className="w-[min(90vw,28rem)] h-auto"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M40 320 V140 Q40 40 200 24 Q360 40 360 140 V320"
            stroke={P.gold}
            strokeWidth="0.6"
          />
          <path
            d="M64 320 V152 Q64 64 200 48 Q336 64 336 152 V320"
            stroke={P.gold}
            strokeWidth="0.35"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeInView>
          <p
            className="mb-8 text-xs md:text-[10px] font-body font-semibold uppercase tracking-[0.42em] md:text-[11px]"
            style={{
              color: "#f5e8c8",
              textShadow: "0 1px 2px rgba(0,0,0,0.45)",
            }}
          >
            Their Story ·{" "}
            <span className="text-[0.85em] font-medium">प्रेम कथा</span>
          </p>
        </FadeInView>

        <FadeInView delay={0.06}>
          <GoldRule className="mb-10" />
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="mb-8 font-serif text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] tracking-tight overflow-visible">
            <span className="block" style={{ color: P.cream }}>Our Love</span>
            <span
              className="block font-serif italic leading-[1.25]"
              style={{
                background: `linear-gradient(180deg, ${P.gold}, ${P.bronze})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Story
            </span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.18}>
          <p
            className="mx-auto mb-6 max-w-xl font-serif text-lg italic leading-relaxed md:text-xl"
            style={{ color: `${P.cream}b8` }}
          >
            &ldquo;{COUPLE.tagline}&rdquo;
          </p>
        </FadeInView>

        <FadeInView delay={0.22}>
          <p
            className="font-serif text-sm"
            style={{ color: `${P.gold}8c` }}
          >
            एक प्रेम कहानी, जो हमेशा लिखी जानी थी
          </p>
        </FadeInView>

        <FadeInView delay={0.28}>
          <GoldRule className="mt-14" />
        </FadeInView>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Prose section — typography-first                               */
/* ─────────────────────────────────────────────────────────────── */

function ProseSection({
  label,
  labelHindi,
  title,
  titleAccent,
  children,
}: {
  label: string;
  labelHindi?: string;
  title: string;
  titleAccent?: string;
  children: ReactNode;
}) {
  return (
    <section
      className="relative px-6 py-20 md:py-28"
      style={{
        backgroundColor: P.bg,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 0%, rgba(139,26,26,0.05), transparent 65%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[40rem]">
        <FadeInView duration={0.9}>
          <span
            className="text-xs md:text-[10px] font-body uppercase tracking-[0.38em]"
            style={{ color: `${P.gold}b0` }}
          >
            {label}
            {labelHindi && (
              <span className="ml-2 text-[0.85em]">· {labelHindi}</span>
            )}
          </span>
        </FadeInView>

        <FadeInView delay={0.08} duration={0.9}>
          <h2
            className="mt-5 font-serif text-3xl leading-tight md:text-4xl"
            style={{ color: `${P.cream}ee` }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span
                  className="italic"
                  style={{
                    background: `linear-gradient(180deg, ${P.gold}, ${P.bronze})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {titleAccent}
                </span>
              </>
            )}
          </h2>
        </FadeInView>

        <FadeInView delay={0.14} duration={0.8}>
          <RoyalFlourish className="my-8" />
        </FadeInView>

        <div
          className="space-y-6 font-body text-[15px] leading-[1.85] md:text-base md:leading-[1.9]"
          style={{ color: `${P.cream}dc` }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function ProseParagraph({ children }: { children: ReactNode }) {
  return (
    <FadeInView delay={0.04} duration={0.85}>
      <p>{children}</p>
    </FadeInView>
  );
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <FadeInView delay={0.06} duration={0.9} direction="left">
      <blockquote
        className="my-10 border-l-2 py-1 pl-6 font-serif text-base italic md:text-lg"
        style={{
          borderColor: `${P.gold}30`,
          color: `${P.gold}a3`,
        }}
      >
        &ldquo;{children}&rdquo;
      </blockquote>
    </FadeInView>
  );
}

function QuoteBand({ quote }: { quote: string }) {
  return (
    <section
      className="relative px-6 py-16 md:py-20"
      style={{
        backgroundColor: P.bgDeep,
        borderTop: `1px solid ${P.gold}0d`,
        borderBottom: `1px solid ${P.gold}0d`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.04), transparent 70%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeInView duration={0.8}>
          <RoyalFlourish className="mb-8 opacity-80" />
        </FadeInView>
        <FadeInView delay={0.1} duration={1}>
          <p
            className="font-serif text-xl italic leading-snug tracking-tight md:text-2xl lg:text-3xl"
            style={{ color: `${P.cream}d9` }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </FadeInView>
        <FadeInView delay={0.15} duration={0.8}>
          <RoyalFlourish className="mt-8 opacity-80" />
        </FadeInView>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Single venue image                                              */
/* ─────────────────────────────────────────────────────────────── */

function VenueMoment() {
  return (
    <section
      className="relative px-0"
      style={{
        backgroundColor: P.bg,
      }}
    >
      <FadeInView className="w-full" duration={1}>
        <div className="relative mx-auto max-w-5xl px-6">
          <div
            className="relative aspect-[21/10] max-h-[min(42vh,520px)] w-full overflow-hidden rounded-sm md:aspect-[2.2/1]"
            style={{ boxShadow: `0 24px 80px rgba(0,0,0,0.35), inset 0 0 0 1px ${P.gold}14` }}
          >
            <Image
              src={VENUE_IMAGE}
              alt={`${COUPLE.venue} — ${COUPLE.location}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              quality={80}
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,10,10,0.75) 0%, transparent 45%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              {/* <p
                className="text-xs md:text-[10px] font-body uppercase tracking-[0.35em]"
                style={{ color: `${P.gold}c4` }}
              >
                Where we say forever · {COUPLE.venue}
              </p> */}
              <p
                className="mt-2 font-serif text-xl md:text-2xl"
                style={{ color: P.cream }}
              >
                {COUPLE.location}
              </p>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Timeline — each milestone animates in on scroll                 */
/* ─────────────────────────────────────────────────────────────── */

const MILESTONES = [
  {
    year: "2018",
    title: "The First Meeting",
    desc: "A Bollywood-worthy meet-cute in Mumbai. Two strangers who didn't know their lives were about to change forever.",
  },
  {
    year: "2020",
    title: "Off to London",
    desc: "Both pursuing their Masters in London — late-night chai and new cities drew them close again.",
  },
  {
    year: "2021",
    title: "Friendship Becomes Love",
    desc: "Somewhere between shared adventures, friendship quietly turned into love — right time, right person.",
  },
  {
    year: "2023",
    title: "The Families Unite",
    desc: "December 2023 — with blessings from both families, every piece fell beautifully into place.",
  },
  {
    year: "2026",
    title: "The Celebration",
    desc: "In Udaipur, their story arrives at its most magical moment — three days, countless memories, one celebration.",
  },
] as const;

function Timeline() {
  return (
    <section
      className="relative px-6 py-20 md:py-28"
      style={{
        backgroundColor: P.bg,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 50% 30%, rgba(212,175,55,0.04), transparent 70%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl lg:max-w-4xl">
        <FadeInView>
          <div className="mb-14 text-center">
            <RoyalDivider className="mb-8" />
            <span
              className="mb-4 block text-xs md:text-[10px] font-body uppercase tracking-[0.38em]"
              style={{ color: `${P.gold}b0` }}
            >
              The Journey · यात्रा
            </span>
            <h2
              className="font-serif text-3xl md:text-4xl"
              style={{ color: `${P.cream}ee` }}
            >
              How We Got Here
            </h2>
          </div>
        </FadeInView>

        <div className="relative pl-0">
          {/* Center axis — milestones alternate left / right of this line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px sm:left-1/2 sm:-translate-x-1/2"
            style={{
              background: `linear-gradient(to bottom, transparent, ${P.gold}28, ${P.gold}30, ${P.gold}28, transparent)`,
            }}
            aria-hidden="true"
          />
          <ul className="relative space-y-12 md:space-y-16">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={m.year}
                  className="relative grid grid-cols-1 pl-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-0 sm:pl-0"
                >
                  {/* Marker sits on the center line (not a grid item — avoids pushing content into one column) */}
                  <div
                    className="absolute left-[11px] top-1.5 z-10 size-2.5 -translate-x-1/2 rotate-45 sm:left-1/2 sm:-translate-x-1/2"
                    style={{
                      border: `1px solid ${P.gold}55`,
                      backgroundColor: `${P.gold}12`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className={
                      isLeft
                        ? "sm:col-start-1 sm:row-start-1 sm:pr-10 sm:text-right"
                        : "sm:col-start-2 sm:row-start-1 sm:pl-10 sm:text-left"
                    }
                  >
                    <FadeInView
                      delay={0.06}
                      duration={0.85}
                      direction={isLeft ? "right" : "left"}
                    >
                      <span
                        className="font-serif text-2xl md:text-3xl"
                        style={{
                          background: `linear-gradient(180deg, ${P.gold}, ${P.bronze})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {m.year}
                      </span>
                      <h3
                        className="mt-1 font-serif text-lg"
                        style={{ color: `${P.cream}cc` }}
                      >
                        {m.title}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: `${P.cream}8e` }}
                      >
                        {m.desc}
                      </p>
                    </FadeInView>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Parents' blessing — simplified frame                           */
/* ─────────────────────────────────────────────────────────────── */

function ParentsBlessingSection() {
  return (
    <section
      className="relative px-6 py-20 md:py-28"
      style={{
        backgroundColor: P.bg,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,26,26,0.06), transparent 70%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <FadeInView duration={0.9}>
          <RoyalDivider className="mb-10" />
        </FadeInView>
        <FadeInView delay={0.06} duration={0.85}>
          <span
            className="mb-3 block text-xs md:text-[10px] font-body uppercase tracking-[0.38em]"
            style={{ color: `${P.gold}a0` }}
          >
            With the Blessings of Our Families · परिवार का आशीर्वाद
          </span>
          <p
            className="mb-10 font-serif text-xs italic md:text-sm"
            style={{ color: `${P.gold}78` }}
          >
            सर्वे भवन्तु सुखिनः
          </p>
        </FadeInView>

        <FadeInView delay={0.12} duration={0.9}>
          <div
            className="rounded-sm px-6 py-10 md:px-10 md:py-12"
            style={{
              border: `1px solid ${P.gold}14`,
              background: `linear-gradient(165deg, ${P.gold}05, transparent 55%, ${P.gold}03)`,
            }}
          >
            <GoldRule className="mb-8" />
            <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:justify-center md:gap-12">
              <div className="flex-1 space-y-2 text-center">
                <p
                  className="font-serif text-base md:text-lg"
                  style={{ color: `${P.cream}d0` }}
                >
                  The Goel Family
                </p>
                <p
                  className="text-xs md:text-[9px] font-body uppercase tracking-[0.22em]"
                  style={{ color: `${P.cream}84` }}
                >
                  Groom&apos;s Family
                </p>
                <div
                  className="mx-auto my-3 w-10"
                  style={{ borderTop: `1px solid ${P.gold}22` }}
                />
                <p
                  className="font-serif text-sm"
                  style={{ color: `${P.cream}95` }}
                >
                  Mr. Atul &amp; Mrs. Amrita Goel
                </p>
              </div>
              <div
                className="hidden w-px md:block"
                style={{ backgroundColor: `${P.gold}18` }}
                aria-hidden="true"
              />
              <div className="flex-1 space-y-2 text-center">
                <p
                  className="font-serif text-base md:text-lg"
                  style={{ color: `${P.cream}d0` }}
                >
                  The Harlalka Family
                </p>
                <p
                  className="text-xs md:text-[9px] font-body uppercase tracking-[0.22em]"
                  style={{ color: `${P.cream}84` }}
                >
                  Bride&apos;s Family
                </p>
                <div
                  className="mx-auto my-3 w-10"
                  style={{ borderTop: `1px solid ${P.gold}22` }}
                />
                <p
                  className="font-serif text-sm"
                  style={{ color: `${P.cream}95` }}
                >
                  Mr. Sanjay &amp; Mrs. Vandana Harlalka
                </p>
              </div>
            </div>
            <GoldRule className="mt-8" />
          </div>
        </FadeInView>

        <FadeInView delay={0.12}>
          <RoyalDivider className="mt-12" />
        </FadeInView>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  CTA                                                            */
/* ─────────────────────────────────────────────────────────────── */

function StoryCTA() {
  return (
    <section
      className="relative px-6 py-20 md:py-28"
      style={{ backgroundColor: P.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 40% at 50% 50%, rgba(139,26,26,0.05), transparent 70%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <FadeInView>
          <RoyalFlourish className="mb-8" />
          <p
            className="mb-5 text-xs md:text-[10px] font-body uppercase tracking-[0.38em]"
            style={{ color: `${P.gold}a0` }}
          >
            The Next Verse · अगला पड़ाव
          </p>
          <h2
            className="mb-2 font-serif text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: `${P.cream}e8` }}
          >
            And so the story continues
          </h2>
          <h2
            className="mb-8 font-serif text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{
              background: `linear-gradient(180deg, ${P.gold}, ${P.bronze})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            in Udaipur
          </h2>
          <p
            className="mx-auto mb-10 max-w-md text-sm leading-relaxed md:text-[15px]"
            style={{ color: `${P.cream}d6` }}
          >
            Three days of celebration, woven from heritage and love — we&apos;d
            love to share it with you.
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/itinerary"
              className="inline-flex min-w-[200px] items-center justify-center px-10 py-3.5 text-[11px] font-body font-medium uppercase tracking-[0.22em] transition-opacity hover:opacity-92"
              style={{
                color: P.bg,
                background: `linear-gradient(135deg, ${P.gold}, #c9a030, ${P.gold})`,
                boxShadow: `0 10px 28px rgba(212,175,55,0.18)`,
              }}
            >
              View the itinerary
            </Link>
            <Link
              href="/rsvp"
              className="inline-flex min-w-[200px] items-center justify-center px-10 py-3.5 text-[11px] font-body uppercase tracking-[0.22em] transition-opacity hover:opacity-90"
              style={{
                color: `${P.cream}e4`,
                border: `1px solid ${P.gold}22`,
                background: `linear-gradient(to bottom, ${P.gold}06, transparent)`,
              }}
            >
              RSVP
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.14}>
          <RoyalFlourish className="mt-14" />
        </FadeInView>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Page                                                           */
/* ─────────────────────────────────────────────────────────────── */

export default function StoryPageContent() {
  return (
    <RoyalPageWrapper>
      <StoryHero />

      <ProseSection
        label="Verse One"
        labelHindi="आरंभ"
        title="Where It All"
        titleAccent="Began"
      >
        <ProseParagraph>
          She grew up in the lively lanes of Mumbai, he in the cultural heart of
          Pune. Both foodies, both dreamers, both chasing big-city ambitions
          with warmth in their hearts.
        </ProseParagraph>
        <ProseParagraph>
          Their story began in what can only be described as a true Bollywood
          meet-cute — the kind you see on screen and think, &ldquo;that only
          happens in movies.&rdquo; Sometimes, life writes better scripts.
        </ProseParagraph>
        <ProseParagraph>
          In a city of millions, fate chose an ordinary day to introduce two
          extraordinary souls — the first page of a story that would span
          continents.
        </ProseParagraph>
        <PullQuote>
          Some love stories start with a quiet certainty — that you&apos;ve
          found someone who understands your silence.
        </PullQuote>
      </ProseSection>

      <QuoteBand quote="In the city of dreams, two dreamers found each other." />

      <ProseSection
        label="Verse Two"
        labelHindi="लंदन"
        title="London"
        titleAccent="Calling"
      >
        <ProseParagraph>
          Life carried them both to London for their Masters — different
          universities, same city, same appetite for adventure. Friendly
          catch-ups turned into something neither of them expected.
        </ProseParagraph>
        <ProseParagraph>
          Somewhere between late-night chai, weekend wanderings, and shared
          laughter, friendship quietly became love — the kind that feels like
          right time, right person.
        </ProseParagraph>
        <PullQuote>
          We didn&apos;t plan to fall in love. London just made it impossible
          not to.
        </PullQuote>
      </ProseSection>

      <Timeline />

      <QuoteBand quote="Every piece of their story had been quietly waiting to complete the puzzle." />

      <ProseSection
        label="Verse Three"
        labelHindi="सगाई"
        title="When Everything"
        titleAccent="Fell Into Place"
      >
        <ProseParagraph>
          By December 2023, with their families&apos; blessings, everything fell
          beautifully into place. Two families — different cities, different
          traditions — united by the same joy.
        </ProseParagraph>
        <ProseParagraph>
          The Goels and the Harlalkas came together for more than a ceremony: a
          shared belief that these two were always meant to be.
        </ProseParagraph>
        <PullQuote>
          When the families came together, it felt less like a beginning and
          more like a homecoming.
        </PullQuote>
      </ProseSection>

      <VenueMoment />

      <ProseSection
        label="The Celebration"
        labelHindi="उत्सव"
        title="A Royal Verse in"
        titleAccent="Udaipur"
      >
        <ProseParagraph>
          Against the timeless romance of Udaipur — palaces, lakes, and the
          Aravallis as quiet witnesses — their story arrives at its most magical
          moment.
        </ProseParagraph>
        <ProseParagraph>
          A three-day celebration across intimate courtyards, gilded nights,
          sacred rituals, and joy written with intention — each gathering its
          own memory.
        </ProseParagraph>
        <PullQuote>
          Not just a wedding — a story told across three days, many moments, and
          one breathtaking city.
        </PullQuote>
      </ProseSection>

      <ParentsBlessingSection />

      <StoryCTA />
    </RoyalPageWrapper>
  );
}
