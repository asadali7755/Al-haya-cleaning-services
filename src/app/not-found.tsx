import { Button } from "@/components/ui/Button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
          <Search className="w-10 h-10 text-gold" />
        </div>
        <h1 className="font-display text-5xl font-bold mb-4 text-gold">404</h1>
        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Page Not Found
        </h2>
        <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          <Button href="/#services" variant="outline" size="lg">
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
