import { clsx } from "clsx";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300",
        className
      )}
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-color)",
      }}
    >
      {children}
    </div>
  );
}
