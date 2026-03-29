import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero-main.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          #1 Villa & Apartment Cleaning Services{" "}
          <span className="text-gold" style={{ textShadow: "0 2px 8px rgba(212, 175, 55, 0.3)" }}>in Dubai & All UAE</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional deep cleaning, office cleaning & home cleaning services in Dubai, Abu Dhabi, Sharjah & all 7 Emirates. Eco-friendly products, trained staff, satisfaction guaranteed.
        </p>
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
