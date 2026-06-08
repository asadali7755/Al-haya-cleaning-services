import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, Tag, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides | Al Haya Cleaning Services Blog",
  description:
    "Expert cleaning tips, cost guides, and checklists for villas and apartments across Dubai & the UAE. Practical advice from Al Haya Cleaning Services.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Cleaning Tips & Guides | Al Haya Cleaning Services Blog",
    description: "Expert cleaning tips, cost guides, and checklists for homes across Dubai & the UAE.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
      ])} />

      {/* ───────── Header ───────── */}
      <section className="relative py-20 md:py-24 px-5 overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-bold text-gold tracking-widest uppercase">Cleaning Tips & Guides</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
            The Al Haya <span className="text-gold">Blog</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Practical cleaning advice, cost guides, and checklists for villas and apartments across Dubai &amp; the UAE.
          </p>
        </div>
      </section>

      {/* ───────── Featured post ───────── */}
      {featured && (
        <section className="py-14 md:py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/10" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-primary)" }}>
                <div className="relative h-64 md:h-auto md:min-h-[340px] overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold text-black">Featured</span>
                </div>
                <div className="p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                    <span className="inline-flex items-center gap-1.5 text-gold font-semibold"><Tag className="w-3.5 h-3.5" />{featured.category}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(featured.datePublished)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readingTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-snug group-hover:text-gold transition-colors" style={{ color: "var(--text-primary)" }}>
                    {featured.title}
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-gold">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ───────── Grid ───────── */}
      {rest.length > 0 && (
        <section className="pb-20 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full rounded-2xl overflow-hidden border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold/10 group-hover:border-gold/40" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-primary)" }}>
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gold text-black">{post.category}</span>
                    <div className="absolute top-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(post.datePublished)}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readingTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold mb-2 leading-snug group-hover:text-gold transition-colors" style={{ color: "var(--text-primary)" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      Read article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
