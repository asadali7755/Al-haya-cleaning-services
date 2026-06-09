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
    default: "Villa Cleaning Dubai | Al Haya Cleaning Services UAE",
    template: "%s",
  },
  description:
    "Top-rated villa & apartment cleaning in Dubai & all UAE Emirates. Eco-friendly products, trained staff. Trusted by 5000+ families. Call +971 56 312 9254.",
  keywords: [
    "villa cleaning Dubai", "apartment cleaning Dubai", "deep cleaning Dubai",
    "cleaning services Dubai", "villa cleaning UAE", "office cleaning Dubai",
    "maid service Dubai", "home cleaning Dubai", "cleaning company Dubai",
    "move out cleaning Dubai", "sofa cleaning Dubai", "carpet cleaning Dubai",
    "window cleaning Dubai", "post construction cleaning Dubai",
    "cleaning services Abu Dhabi", "cleaning services Sharjah",
    "professional cleaning UAE", "best cleaning company Dubai",
  ],
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Al Haya Cleaning Services",
    title: "Villa Cleaning Dubai | Al Haya Cleaning Services UAE",
    description: "Top-rated villa & apartment cleaning in Dubai & all UAE Emirates. Eco-friendly products, trained staff. Trusted by 5000+ families. Call +971 56 312 9254.",
    images: [{ url: "/images/hero/hero-main.webp", width: 1920, height: 1080, alt: "Al Haya Cleaning Services - Professional Villa Cleaning Dubai UAE" }],
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
    languages: {
      "en-AE": process.env.SITE_URL || "http://localhost:3000",
    },
  },
  verification: {
    google: "Ol568I9cq3MjpiwjyX6L-LbunjtcXvdn15GY3cGTng0",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WRFCQCG7');` }} />
        {/* End Google Tag Manager */}
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
        {/* Metricool tracking */}
        <script dangerouslySetInnerHTML={{ __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"ddb262a4cd6cee55ceef05ddca858cac"})});` }} />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-body antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRFCQCG7" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
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
