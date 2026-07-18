import { ArrowRight, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type SectionLink = { label: string; hash: string };
type RouteLink = { label: string; to: string };

interface MobileMenuProps {
  pathname: string;
  sectionLinks: readonly SectionLink[];
  routeLinks: readonly RouteLink[];
  mobileNavLinkClass: (isActive: boolean) => string;
}

// Split into its own chunk (see SiteHeader.tsx) so the Radix Dialog primitive
// this depends on is only fetched/parsed once the user actually opens the
// mobile menu, instead of shipping on every page's initial bundle.
export default function MobileMenu({ pathname, sectionLinks, routeLinks, mobileNavLinkClass }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-foreground border border-border/60 bg-background hover:bg-muted transition"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
        <SheetTitle className="font-display text-xl font-bold">Menu</SheetTitle>
        <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
          {sectionLinks.map((link) => (
            <SheetClose key={link.hash} asChild>
              <a href={`/#${link.hash}`} className={mobileNavLinkClass(pathname === "/")}>
                {link.label}
              </a>
            </SheetClose>
          ))}
          {routeLinks.map((link) => (
            <SheetClose key={link.to} asChild>
              <Link to={link.to} className={mobileNavLinkClass(pathname === link.to)}>
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link
              to="/admissions"
              className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-[var(--shadow-soft)] transition ${
                pathname === "/admissions"
                  ? "bg-primary/90 text-primary-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Admission open <ArrowRight className="h-4 w-4" />
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
