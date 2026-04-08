import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && "text-center", className)}>
      <h2
        className="font-display text-3xl md:text-4xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "w-16 h-1 bg-gold mt-4 mb-4 rounded-full",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <h2
          className="font-display text-xl md:text-2xl font-semibold"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
}
