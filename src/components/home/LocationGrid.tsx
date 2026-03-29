import Link from "next/link";
import Image from "next/image";
import { emirates } from "@/data/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationGrid() {
  return (
    <section id="locations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="We Serve All Emirates"
          subtitle="Professional cleaning services across the UAE"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {emirates.map((emirate) => (
            <Link key={emirate.slug} href={`/locations/${emirate.slug}`}>
              <div className="group relative overflow-hidden rounded-xl min-h-[280px] cursor-pointer">
                <Image
                  src={emirate.image}
                  alt={emirate.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {emirate.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {emirate.cities.length} areas served
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
