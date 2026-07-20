import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logo}
              alt="Kidzee Jeetshree, Ratlam Preschool Logo"
              loading="lazy"
              decoding="async"
              className="h-15 w-auto"
            />
          </picture>

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Kidzee Jeetshree School, Ratlam — a happy, premium preschool where
            little minds bloom with joy & wonder. Discover why families call us
            the{" "}
            <Link
              to="/best-preschool-in-ratlam"
              className="font-semibold text-primary transition-colors hover:underline"
            >
              best preschool in Ratlam
            </Link>
            .
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/kidzee.jeetshree/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-sm font-bold text-foreground">Visit Us</h3>

          <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              30, Siddhi Vinayak Colony, Near Deendayal Nagar, Ratlam,
              Madhya Pradesh 457001.
            </span>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold text-foreground">Get in Touch</h3>

          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919589208322">+91 95892 08322</a>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+918305952666">+91 83059 52666</a>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+917723888303">+91 77238 88303</a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:kidzee5789@kidzee.com">
                kidzee5789@kidzee.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;