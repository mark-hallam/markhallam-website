interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 ${
        hover ? "transition-all duration-300 hover:border-muted hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
