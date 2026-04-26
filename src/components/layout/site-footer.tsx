import { socialLinks } from "@/data/portfolio";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="type-label-light text-white/60">
          Portfolio starter built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="type-media text-white/70 transition hover:text-brand-1"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
