import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceGrid() {
  return (
    <section id="services" className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Cleaning Services in Dubai & UAE"
          subtitle="Villa cleaning, apartment cleaning, deep cleaning & more across all Emirates"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="group relative overflow-hidden rounded-xl min-h-[280px] cursor-pointer">
                <Image
                  src={service.image}
                  alt={`${service.name} in Dubai & UAE - Al Haya Cleaning Services`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
