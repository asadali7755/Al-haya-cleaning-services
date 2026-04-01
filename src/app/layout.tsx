import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Haya Cleaning Services | Villa & Apartment Cleaning Dubai, Abu Dhabi, UAE",
    template: "%s | Al Haya Cleaning Services UAE",
  },
  description:
    "Best villa cleaning, apartment cleaning, deep cleaning & office cleaning services in Dubai, Abu Dhabi, Sharjah & all UAE Emirates. Professional cleaners, eco-friendly products. Call +971 545 567 799 for a free quote.",
  keywords: [
    "cleaning services Dubai", "villa cleaning Dubai", "apartment cleaning Dubai",
    "deep cleaning Dubai", "office cleaning Dubai", "cleaning company UAE",
    "house cleaning Abu Dhabi", "maid service Dubai", "cleaning services Abu Dhabi",
    "cleaning services Sharjah", "move out cleaning Dubai", "sofa cleaning Dubai",
    "carpet cleaning Dubai", "window cleaning Dubai", "post construction cleaning Dubai",
    "professional cleaning UAE", "home cleaning Dubai", "best cleaning company Dubai",
    "affordable cleaning services Dubai", "cleaning services near me",
  ],
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Al Haya Cleaning Services",
    images: [{ url: "/images/hero/hero-main.webp", width: 1920, height: 1080, alt: "Al Haya Cleaning Services - Professional Cleaning in UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/hero-main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: process.env.SITE_URL || "http://localhost:3000",
  },
  verification: {
    google: "Ol568I9cq3MjpiwjyX6L-LbunjtcXvdn15GY3cGTng0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-body antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
