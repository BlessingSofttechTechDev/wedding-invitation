"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { P } from "@/components/shared/RoyalPageLayout";

/**
 * Floating "Back to app" button. Only renders when the page was opened from
 * the webapp (via `?from=app` on the URL). Marketing-site internal navigation
 * never sets that param, so this button stays hidden in normal browsing.
 */
export default function AppBackButton() {
  const searchParams = useSearchParams();
  const fromApp = searchParams.get("from") === "app";
  if (!fromApp) return null;

  return (
    <Link
      href="/app/guest"
      className="fixed z-[60] flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-body transition-all duration-300 backdrop-blur-sm"
      style={{
        top: "calc(5rem + env(safe-area-inset-top, 0px))",
        left: "1rem",
        color: `${P.gold}e6`,
        border: `1px solid ${P.gold}40`,
        background: `${P.bg}cc`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${P.gold}80`;
        e.currentTarget.style.background = `${P.bg}e6`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${P.gold}40`;
        e.currentTarget.style.background = `${P.bg}cc`;
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M7.5 2.5L3.5 6l4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to app
    </Link>
  );
}
