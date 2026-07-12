"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import type { GalleryImage, GalleryCategory } from "@/data/gallery";

interface GalleryClientProps {
  images: GalleryImage[];
  categories: GalleryCategory[];
}

export function GalleryClient({ images, categories }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0c10 0%, #1a1810 40%, #0f1419 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Camera className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">Our Work Gallery</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            See the <span className="text-gold">Al Haya</span> Difference
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Browse real results from our professional cleaning projects across Dubai and all seven Emirates of the UAE.
            Every image represents our commitment to excellence.
          </p>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span><strong className="text-white">{images.length}+</strong> Projects Completed</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span><strong className="text-white">7</strong> Emirates Covered</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span><strong className="text-white">100%</strong> Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-30 border-b border-gold/10" style={{ background: "rgba(15, 17, 21, 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => { setActiveCategory(cat.slug); setLightboxIndex(null); }}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.slug
                    ? "bg-gold text-black shadow-lg shadow-gold/25"
                    : "bg-white/5 text-gray-300 hover:bg-gold/15 hover:text-gold border border-white/10 hover:border-gold/30"
                }`}
              >
                {cat.label}
                {cat.slug !== "all" && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat.slug ? "text-black/60" : "text-gray-500"}`}>
                    ({images.filter((img) => img.category === cat.slug).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-16 px-4" style={{ background: "linear-gradient(180deg, #0f1419 0%, #111518 50%, #0f1419 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4">
            {filtered.map((img, idx) => (
              <div
                key={`${img.category}-${idx}`}
                className="break-inside-avoid mb-3 sm:mb-4 group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-transparent hover:border-gold/40 transition-all duration-500 shadow-lg hover:shadow-gold/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={idx % 3 === 0 ? 650 : idx % 3 === 1 ? 500 : 400}
                    quality={75}
                    loading={idx < 8 ? "eager" : "lazy"}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 mb-2">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span className="text-xs font-bold text-white capitalize">
                          {categories.find((c) => c.slug === img.category)?.label || img.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-200 line-clamp-2">{img.alt}</p>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-gold/30 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #1a1810 0%, #0f1419 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-gold">Spotless</span> Space?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied customers across Dubai and the UAE. Book your professional cleaning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/971563129254?text=${encodeURIComponent("Hello, I saw your gallery and I need cleaning services")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/25"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
            <a
              href="tel:+971563129254"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gold font-bold rounded-full border-2 border-gold/50 hover:bg-gold/10 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call +971 56 312 9254
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0, 0, 0, 0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              quality={90}
              priority
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 mb-2">
                <span className="text-xs font-bold text-white capitalize">
                  {categories.find((c) => c.slug === filtered[lightboxIndex].category)?.label}
                </span>
              </div>
              <p className="text-sm text-gray-200">{filtered[lightboxIndex].alt}</p>
              <p className="text-xs text-gray-400 mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
