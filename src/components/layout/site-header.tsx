import { navigationLinks } from "@/data/portfolio";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-bg-2/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-5">
        <a href="#top" className="type-logo text-brand-1">
          S.
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-menu text-white/80 transition hover:text-brand-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
