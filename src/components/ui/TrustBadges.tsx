import { ShieldCheck, Users, Leaf, Clock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Users, label: "5000+ Homes Cleaned" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: Clock, label: "Same-Day Available" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {badges.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-surface)" }}
        >
          <Icon className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
