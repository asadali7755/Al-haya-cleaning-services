import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/hero-main.webp"
        alt="Professional villa and apartment cleaning services in Dubai and UAE - Al Haya Cleaning"
        fill
        priority
        loading="eager"
        quality={65}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAACf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          #1 Villa & Apartment Cleaning Services{" "}
          <span className="text-gold" style={{ textShadow: "0 2px 8px rgba(212, 175, 55, 0.3)" }}>in Dubai & All UAE</span>
        </h1>
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
          Trusted Villa, Apartment & Deep Cleaning Company Across Dubai, Abu Dhabi, Sharjah & All 7 Emirates
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Get a Free Quote
          </Button>
          <Button href="#services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
