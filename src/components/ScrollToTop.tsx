"use client";

import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function forceScrollZero() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const isPopState = useRef(false);

  // Disable browser scroll restoration globally
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Track back/forward navigation
  useEffect(() => {
    const onPop = () => {
      isPopState.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const cleanupAndScroll = useCallback(() => {
    // Kill every ScrollTrigger from the previous page so pin-spacers
    // don't hold stale scroll offsets during the transition.
    ScrollTrigger.getAll().forEach((st) => st.kill());
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh(true);
    forceScrollZero();
  }, []);

  // BEFORE paint: nuke old ScrollTriggers + scroll to 0
  useLayoutEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    if (isPopState.current) {
      isPopState.current = false;
      return;
    }

    cleanupAndScroll();
  }, [pathname, cleanupAndScroll]);

  // AFTER paint: belt-and-suspenders — covers late hydration / lazy chunks
  useEffect(() => {
    if (isPopState.current) {
      isPopState.current = false;
      return;
    }
    forceScrollZero();

    // After one frame (layout may have shifted from hydration)
    const raf1 = requestAnimationFrame(() => {
      forceScrollZero();
      // After two frames (GSAP useGSAP hooks fire here)
      const raf2 = requestAnimationFrame(() => {
        forceScrollZero();
      });
      return () => cancelAnimationFrame(raf2);
    });

    // Delayed fallback — catches async images / fonts reflow
    const t1 = setTimeout(() => {
      forceScrollZero();
      ScrollTrigger.refresh();
    }, 50);

    const t2 = setTimeout(() => {
      forceScrollZero();
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
