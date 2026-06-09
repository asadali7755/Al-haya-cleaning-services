"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Site-wide conversion tracking. Uses one delegated click listener to push
 * GA4-friendly events to the GTM dataLayer whenever a visitor clicks a
 * WhatsApp or phone (tel:) link — no per-button wiring needed.
 *
 * In GTM, create GA4 event tags triggered by Custom Events:
 *   - "whatsapp_click"  -> conversion event
 *   - "call_click"      -> conversion event
 *   - "generate_lead"   -> conversion event (fired by the contact form)
 */
export function ConversionTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      let event: string | null = null;
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        event = "whatsapp_click";
      } else if (href.startsWith("tel:")) {
        event = "call_click";
      }
      if (!event) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        link_url: href,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
