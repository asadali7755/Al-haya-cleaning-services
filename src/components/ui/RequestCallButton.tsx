"use client";

import { Phone } from "lucide-react";
import { useRequestCall } from "@/components/ui/RequestCallModal";

interface RequestCallButtonProps {
  /** Which page/section opened the modal — carried into the lead email. */
  source: string;
  /** "solid" for a gold fill, "outline" to sit next to an existing primary CTA. */
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  label?: string;
}

/**
 * Opens the callback modal. Exists as its own client component so server
 * components (the hero, service and location pages) can drop the button in
 * without becoming client components themselves.
 */
export function RequestCallButton({
  source,
  variant = "outline",
  size = "md",
  className = "",
  label = "Request a Call",
}: RequestCallButtonProps) {
  const { open } = useRequestCall();

  const sizing = size === "lg" ? "px-8 py-3 text-lg" : "px-6 py-2.5 text-base";
  const look =
    variant === "solid"
      ? "bg-gold text-black hover:bg-gold-dark border border-transparent"
      : "border-2 border-gold text-gold hover:bg-gold/10";

  return (
    <button
      onClick={() => open(source)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors cursor-pointer ${sizing} ${look} ${className}`}
    >
      <Phone className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {label}
    </button>
  );
}
