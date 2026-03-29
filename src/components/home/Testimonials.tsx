import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by homeowners and businesses across the UAE"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-gold fill-gold"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{testimonial.reviewText}&rdquo;
              </p>
              <div className="border-t pt-4" style={{ borderColor: "var(--border-color)" }}>
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  {testimonial.customerName}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
