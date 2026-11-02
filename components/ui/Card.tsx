import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 border border-[#F0E4D4]",
        hoverEffect && "hover:-translate-y-1 hover:shadow-hover hover:border-gold/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

