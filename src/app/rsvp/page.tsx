"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { COUPLE } from "@/content/events";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInView from "@/components/motion/FadeInView";
import {
  P,
  RoyalPageHero,
  RoyalPageWrapper,
  RoyalSectionFrame,
  RoyalDivider,
  RoyalFlourish,
} from "@/components/shared/RoyalPageLayout";

const RSVP_PHONE = "+91 8976297193";
const RSVP_PHONE_HREF = "tel:+918976297193";
const WHATSAPP_HREF =
  "https://wa.me/918976297193?text=Hi%2C%20I%E2%80%99d%20like%20to%20RSVP%20for%20the%20wedding%20celebration.";

export default function RSVPPage() {
  return (
    <>
      <Navbar />
      <RoyalPageWrapper>
        <RoyalPageHero
          label="You're Invited"
          title="RSVP"
          subtitle="We'd love to have you celebrate with us"
        >
          <p
            className="mt-5 text-xs md:text-[11px] font-body tracking-[0.35em]"
            style={{ color: `${P.gold}60` }}
          >
            {COUPLE.hashtag}
          </p>
        </RoyalPageHero>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInView>
              <p
                className="font-serif italic text-lg md:text-xl leading-relaxed mb-2"
                style={{ color: `${P.cream}cc` }}
              >
                आपकी उपस्थिति हमारा सौभाग्य
              </p>
              <p
                className="font-body text-sm md:text-base leading-relaxed mb-10"
                style={{ color: `${P.cream}78` }}
              >
                Your presence is our blessing
              </p>
            </FadeInView>

            <FadeInView delay={0.12}>
              <RoyalSectionFrame glow className="p-8 md:p-12">
                <div className="flex flex-col items-center gap-6">
                  <p
                    className="text-xs md:text-[11px] font-body uppercase tracking-[0.3em]"
                    style={{ color: `${P.gold}90` }}
                  >
                    To confirm your attendance
                  </p>

                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${P.gold}18, ${P.gold}08)`,
                        border: `1px solid ${P.gold}30`,
                      }}
                    >
                      <Phone
                        size={22}
                        strokeWidth={1.4}
                        style={{ color: P.gold }}
                      />
                    </div>

                    <p
                      className="font-body text-sm leading-relaxed max-w-md"
                      style={{ color: `${P.cream}90` }}
                    >
                      Please reach out to us via call or WhatsApp for any
                      information regarding the celebrations, travel, stay, or to
                      confirm your RSVP.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 my-2">
                    <div
                      className="h-px w-10"
                      style={{
                        background: `linear-gradient(to right, transparent, ${P.gold}30)`,
                      }}
                    />
                    <div
                      className="w-1.5 h-1.5 rotate-45"
                      style={{ border: `1px solid ${P.gold}35` }}
                    />
                    <div
                      className="h-px w-10"
                      style={{
                        background: `linear-gradient(to left, transparent, ${P.gold}30)`,
                      }}
                    />
                  </div>

                  <a
                    href={RSVP_PHONE_HREF}
                    className="font-serif text-3xl md:text-4xl tracking-wide transition-opacity hover:opacity-80"
                    style={{ color: P.cream }}
                  >
                    {RSVP_PHONE}
                  </a>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full max-w-sm">
                    <a
                      href={RSVP_PHONE_HREF}
                      className="flex-1 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-body uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 rounded-sm"
                      style={{
                        color: P.bg,
                        background: `linear-gradient(135deg, ${P.gold}, #c9a030, ${P.gold})`,
                        boxShadow: `0 8px 24px rgba(212,175,55,0.18)`,
                      }}
                    >
                      <Phone size={14} strokeWidth={1.4} />
                      Call Now
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-body uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 rounded-sm"
                      style={{
                        color: `${P.cream}cc`,
                        border: `1px solid ${P.gold}28`,
                        background: `linear-gradient(to bottom, ${P.gold}08, transparent)`,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </RoyalSectionFrame>
            </FadeInView>

            <FadeInView delay={0.18}>
              <div className="mt-14 space-y-6">
                <RoyalDivider />
                <p
                  className="font-serif italic text-base md:text-lg"
                  style={{ color: `${P.cream}99` }}
                >
                  &ldquo;The celebration is incomplete without you.
                  <br />
                  We eagerly await your presence.&rdquo;
                </p>
                <p
                  className="font-serif text-sm"
                  style={{ color: `${P.gold}60` }}
                >
                  आपकी उपस्थिति हमारा सम्मान है
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.22}>
              <div className="mt-14 flex flex-col items-center gap-4">
                <RoyalFlourish />
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3 font-body text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-80 rounded-sm"
                  style={{
                    color: `${P.cream}80`,
                    border: `1px solid ${P.gold}18`,
                    background: `linear-gradient(to bottom, ${P.gold}06, transparent)`,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>
      </RoyalPageWrapper>
      <Footer />
    </>
  );
}
