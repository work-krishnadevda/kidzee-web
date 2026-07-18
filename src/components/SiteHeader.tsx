import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { lazy, Suspense } from "react";
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

// Lazy-loaded: keeps the Radix Dialog primitive (used for the mobile Sheet) out
// of the critical initial bundle on every page — it's only needed once the
// hamburger button is actually opened.
const MobileMenu = lazy(() => import("./MobileMenu"));

const sectionLinks = [
  { label: "Why Us", hash: "why" },
  { label: "Programs", hash: "programs" },
  { label: "A Day Here", hash: "day" },
  { label: "Campus", hash: "campus" },
  { label: "FAQ", hash: "faq" },
] as const;

const routeLinks = [
  { label: "Book a Tour", to: "/book-tour" as const },
  { label: "Contact Us", to: "/contact" as const },
  { label: "Gallery", to: "/gallery" as const },
] as const;

function navLinkClass(isActive: boolean) {
  return `hover:text-primary transition ${isActive ? "text-primary" : "text-foreground/80"}`;
}

function mobileNavLinkClass(isActive: boolean) {
  return `block rounded-lg px-4 py-3 text-base font-semibold transition ${
    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
  }`;
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logo}
              alt="Kidzee jeetshree, Ratlam — preschool logo"
              width={121}
              height={48}
              decoding="async"
              fetchPriority="high"
              className="h-12 w-auto object-contain"
            />
          </picture>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {sectionLinks.map((link) => (
            <a key={link.hash} href={`/#${link.hash}`} className={navLinkClass(pathname === "/")}>
              {link.label}
            </a>
          ))}
          {routeLinks.map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClass(pathname === link.to)} aria-current={pathname === link.to ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Suspense
            fallback={
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-foreground border border-border/60 bg-background hover:bg-muted transition"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            }
          >
            <MobileMenu
              pathname={pathname}
              sectionLinks={sectionLinks}
              routeLinks={routeLinks}
              mobileNavLinkClass={mobileNavLinkClass}
            />
          </Suspense>

          <Link
            to="/admissions"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-[var(--shadow-soft)] hover:scale-[1.03] transition ${
              pathname === "/admissions"
                ? "bg-primary/90 text-primary-foreground ring-2 ring-primary ring-offset-2"
                : "bg-primary text-primary-foreground"
            }`}
          >
            Admission open <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
