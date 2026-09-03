import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ChevronRight, Calendar, Clock, Tag, Check, Sparkles, ArrowRight, ArrowUpRight, HelpCircle } from "lucide-react";

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

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function BlogArticle({ post }: BlogArticleProps) {
  const related = (post.relatedServices || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <article>
      {/* ───────── Hero ───────── */}
      <section className="relative h-[62vh] min-h-[440px] flex items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority quality={72} sizes="100vw" className="object-cover scale-105" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,16,0.96) 0%, rgba(10,12,16,0.7) 45%, rgba(10,12,16,0.35) 100%)" }} />
        {/* subtle gold glow */}
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-gold/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 pb-14">
          <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-200 line-clamp-1">{post.category}</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 backdrop-blur-sm mb-5">
            <Tag className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold text-gold tracking-widest uppercase">{post.category}</span>
          </span>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.12]">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" />{formatDate(post.datePublished)}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-gold" />{post.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="inline-flex items-center gap-2 text-gray-300">By <span className="text-gold font-semibold">Al Haya Team</span></span>
          </div>
        </div>
      </section>

      {/* ───────── Body ───────── */}
      <section className="relative py-16 md:py-20 px-5 overflow-hidden">
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">

          {/* Lead / intro with drop cap */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-12 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {post.intro}
          </p>

          {/* Table of contents */}
          {post.sections.length > 2 && (
            <nav className="mb-14 rounded-2xl p-6 md:p-7 border" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="font-display font-bold tracking-wide uppercase text-sm text-gold">In This Article</span>
              </div>
              <ol className="space-y-2.5">
                {post.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="group flex items-start gap-3 transition-colors" style={{ color: "var(--text-secondary)" }}>
                      <span className="font-display font-bold text-gold/70 text-sm w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="group-hover:text-gold transition-colors leading-snug">{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Sections */}
          {post.sections.map((section, idx) => (
            <div key={section.heading} id={slugify(section.heading)} className="mb-12 scroll-mt-28">
              <div className="flex items-center gap-4 mb-5">
                <span className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center font-display font-bold text-gold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-[1.75rem] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                  {section.heading}
                </h2>
              </div>

              <div className="md:pl-[3.75rem]">
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-[1.85] mb-5 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2" style={{ color: "var(--text-secondary)" }} dangerouslySetInnerHTML={{ __html: p }} />
                ))}

                {section.bullets && (
                  <div className="mt-5 grid gap-3">
                    {section.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 rounded-xl p-4 border transition-all duration-300 hover:border-gold/50"
                        style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-secondary)" }}
                      >
                        <span className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2" style={{ color: "var(--text-secondary)" }} dangerouslySetInnerHTML={{ __html: b }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Inline CTA banner */}
          <div className="my-14 relative overflow-hidden rounded-3xl p-8 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #0f1419 0%, #1a2332 55%, #0f1419 100%)" }}>
            <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <Sparkles className="w-7 h-7 text-gold mx-auto mb-3" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Want it done for you?</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">Get a free, no-obligation quote for professional cleaning across Dubai &amp; the UAE.</p>
              <Button href="/contact" size="lg">Get a Free Quote</Button>
            </div>
          </div>

          {/* FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-7">
                <HelpCircle className="w-6 h-6 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {post.faqs.map((f) => (
                  <div key={f.question} className="rounded-2xl p-6 border transition-all duration-300 hover:border-gold/40" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
                    <h3 className="font-display text-lg font-semibold mb-2 flex items-start gap-2" style={{ color: "var(--text-primary)" }}>
                      <span className="text-gold">Q.</span>{f.question}
                    </h3>
                    <p className="leading-relaxed md:pl-6" style={{ color: "var(--text-secondary)" }}>{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────── Related services ───────── */}
      {related.length > 0 && (
        <section className="py-16 px-5" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-bold text-gold tracking-widest uppercase">Related Services</span>
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                Book the service from this guide
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => s && (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl h-52 shadow-lg border border-gold/10 group-hover:border-gold/50 transition-all duration-500 group-hover:-translate-y-1.5">
                    <Image src={s.image} alt={s.name} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">{s.name}</h3>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                        Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Final CTA ───────── */}
      <section className="py-20 px-5 text-center bg-gold/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Ready for a Spotless Home?
          </h2>
          <p className="mb-7 text-lg" style={{ color: "var(--text-secondary)" }}>
            Villa, apartment &amp; deep cleaning across all 7 UAE Emirates. Trained teams, eco-friendly products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Get a Free Quote</Button>
            <Link href="/blog" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition-colors">
              More Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
