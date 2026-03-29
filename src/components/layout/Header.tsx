"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function AlHayaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Al Haya Cleaning Services"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-gold)" />
          <stop offset="50%" stopColor="var(--color-gold-light)" />
          <stop offset="100%" stopColor="var(--color-gold)" />
        </linearGradient>
      </defs>
      {/* Sparkle accent */}
      <g fill="url(#goldGrad)">
        <path d="M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5L12 8z" opacity="0.9" />
        <path d="M6 20l0.8 1.8L8.6 22.6l-1.8 0.8L6 25.2l-0.8-1.8L3.4 22.6l1.8-0.8L6 20z" opacity="0.6" />
      </g>
      {/* Al Haya text */}
      <text
        x="28"
        y="32"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="700"
        fill="url(#goldGrad)"
        letterSpacing="1"
      >
        Al Haya
      </text>
      {/* Cleaning Services subtitle */}
      <text
        x="29"
        y="44"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontSize="9"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="3"
        opacity="0.7"
      >
        CLEANING SERVICES
      </text>
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg-surface) 80%, transparent)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <Link href="/" className="block" aria-label="Al Haya Home">
          <AlHayaLogo className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold tracking-wide transition-colors hover:text-gold"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-gold/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-3"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold tracking-wide transition-colors hover:text-gold"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
