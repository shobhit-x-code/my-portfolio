import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "grey" | "brand" | "dark" | "outline";
};

const variantClasses = {
  grey: "bg-grey text-white hover:bg-white/18",
  brand: "bg-brand-1 text-bg-1 hover:bg-brand-2",
  dark: "bg-bg-1 text-white hover:bg-bg-1/80",
  outline: "border border-brand-1 bg-bg-1 text-white hover:bg-brand-1/10",
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "type-button motion-button inline-flex items-center justify-center rounded-full px-8 py-4 transition duration-200",
        variantClasses[variant],
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
