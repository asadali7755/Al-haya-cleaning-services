import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

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

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
      ])} />

      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-5">
            <Tag className="w-4 h-4 text-gold" />
            <span className="text-sm font-bold text-gold tracking-widest uppercase">Cleaning Tips & Guides</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Al Haya <span className="text-gold">Blog</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Practical cleaning advice, cost guides, and checklists for villas and apartments across Dubai & the UAE.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="h-full rounded-2xl overflow-hidden border transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-gold/10" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-primary)" }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gold text-black">{post.category}</span>
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
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
