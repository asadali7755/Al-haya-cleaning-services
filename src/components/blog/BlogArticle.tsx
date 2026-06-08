import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ChevronRight, Calendar, Clock, Tag, Check } from "lucide-react";

interface BlogArticleProps {
  post: BlogPost;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export function BlogArticle({ post }: BlogArticleProps) {
  const related = (post.relatedServices || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority quality={70} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-10">
          <nav className="flex items-center gap-2 text-sm mb-5 flex-wrap text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5"><Tag className="w-4 h-4 text-gold" />{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" />{formatDate(post.datePublished)}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" />{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mt-4">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14 pt-10 border-t" style={{ borderColor: "var(--border-color)" }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.question}</h3>
                    <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related services (internal links to money pages) */}
      {related.length > 0 && (
        <section className="py-14 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => s && (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl h-44">
                    <Image src={s.image} alt={s.name} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-display font-semibold text-gold">{s.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-gold/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Need Professional Cleaning?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Get a free, no-obligation quote from Al Haya — villa, apartment & deep cleaning across the UAE.
          </p>
          <Button href="/contact" size="lg">Get a Free Quote</Button>
        </div>
      </section>
    </article>
  );
}
