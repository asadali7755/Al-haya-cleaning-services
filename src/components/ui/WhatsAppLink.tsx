"use client";

import { clsx } from "clsx";
import { buttonSizes, buttonVariants } from "./Button";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface WhatsAppLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "onClick"> {
  href: string;
  /** Identifies which CTA was clicked, e.g. "floating_button", "homepage_cta". */
  source: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  children: React.ReactNode;
}

/** WhatsApp CTA that fires the `whatsapp_click` GA4 key event (via GTM's dataLayer) on click. */
export function WhatsAppLink({ href, source, variant, size, className, children, ...rest }: WhatsAppLinkProps) {
  const classes = variant || size
    ? clsx(
        "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        buttonVariants[variant ?? "primary"],
        buttonSizes[size ?? "md"],
        className
      )
    : className;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "whatsapp_click", click_source: source });
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
