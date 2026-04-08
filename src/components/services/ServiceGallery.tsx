import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";

interface ServiceGalleryProps {
  serviceName: string;
  images: string[];
}

export function ServiceGallery({ serviceName, images }: ServiceGalleryProps) {
  if (!images || images.length === 0) return null;

  const allImages = images;

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)" }}>
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <Camera className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">Our Work Gallery</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            See Our <span className="text-gold">{serviceName}</span> Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-gold" />
            Real results from real projects across the UAE
            <Sparkles className="w-5 h-5 text-gold" />
          </p>
        </div>
      </div>

      {/* Single Row - Left to Right */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...allImages, ...allImages, ...allImages, ...allImages].map((src, i) => (
            <div
              key={`g-${i}`}
              className="relative flex-shrink-0 w-[200px] sm:w-[420px] h-[180px] sm:h-[340px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-gold/20 hover:border-gold transition-all duration-500"
            >
              <Image
                src={src}
                alt={`${serviceName} work sample ${i + 1}`}
                fill
                sizes="(max-width: 640px) 200px, 420px"
                quality={55}
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">{serviceName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
