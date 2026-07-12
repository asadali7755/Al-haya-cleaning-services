"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alhayacleaningllc/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    hoverClass: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/villadeepcleaningservicesdubai/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    hoverClass: "hover:text-blue-500",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/DeepCleaningdubai/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    hoverClass: "hover:text-red-500",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/alhayacleaner",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    hoverClass: "hover:text-sky-400",
  },
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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

          {/* Social icons */}
          <div className="flex items-center gap-2 border-l pl-4" style={{ borderColor: "var(--border-color)" }}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${s.hoverClass}`}
                style={{ color: "var(--text-secondary)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Call button */}
          <a
            href="tel:+971563129254"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{
              background: "var(--color-gold)",
              color: "#0f1419",
            }}
          >
            <Phone className="w-4 h-4" />
            +971 56 312 9254
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile right side */}
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

      {/* Mobile menu */}
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

          {/* Social icons in mobile menu */}
          <div className="flex items-center gap-3 pt-2 pb-1">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`p-2 rounded-full transition-all ${s.hoverClass}`}
                style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-secondary)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Call button in mobile menu */}
          <a
            href="tel:+971563129254"
            className="flex items-center gap-2 px-4 py-3 rounded-full font-semibold justify-center"
            style={{
              background: "var(--color-gold)",
              color: "#0f1419",
            }}
          >
            <Phone className="w-4 h-4" />
            +971 56 312 9254
          </a>
        </div>
      )}
    </header>
  );
}
