import { createFileRoute, Link } from "@tanstack/react-router";

import { Facebook, Instagram, MapPin } from "lucide-react";

import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

import { SiteHeader } from "@/components/SiteHeader";
import { FormSuccess } from "@/components/FormSuccess";
import { useSubmitForm } from "@/hooks/use-submit-form";
import { absoluteUrl, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo-config";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Send,
  Baby,
  Sparkles,
  Loader2,
  ChevronDown,
} from "lucide-react";

const tourFaqs = [
  {
    q: "Is the school tour at Kidzee jeetshree free?",
    a: "Yes, campus tours are completely free with no obligation. You'll meet our teachers, walk through the classrooms and play areas, and get all your admission questions answered.",
  },
  {
    q: "How long does a campus tour take?",
    a: "A typical visit takes around 30–40 minutes, including a walkthrough of the campus, a conversation with our principal, and time for any questions about the Pentemind curriculum or admissions.",
  },
  {
    q: "Can both parents and grandparents attend the tour?",
    a: "Absolutely — the whole family is welcome. Many parents bring grandparents along, especially for the first visit.",
  },
  {
    q: "Do I need to bring my child to the school tour?",
    a: "It's optional, but many parents like to bring their child along so they can experience the classrooms and play areas firsthand before enrolling.",
  },
];

export const Route = createFileRoute("/book-tour")({
  head: () => ({
    meta: [
      { title: "Book a Free School Tour | Kidzee jeetshree, Ratlam" },
      {
        name: "description",
        content:
          "Schedule a free campus tour at Kidzee jeetshree preschool, Ratlam. Meet our teachers and see our safe, joyful learning environment before you enrol.",
      },
      {
        name: "keywords",
        content:
          "book school visit Ratlam, schedule preschool visit Ratlam, book campus tour Kidzee Ratlam, visit our preschool, free preschool tour Ratlam, preschool open house Ratlam, meet the principal Kidzee Ratlam, playgroup visit booking",
      },
      { property: "og:title", content: "Book a Free School Tour | Kidzee jeetshree, Ratlam" },
      {
        property: "og:description",
        content: "Schedule a free campus tour at Kidzee jeetshree preschool, Ratlam.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/book-tour") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Free School Tour | Kidzee jeetshree, Ratlam" },
      { name: "twitter:description", content: "Schedule a free campus tour at Kidzee jeetshree preschool, Ratlam." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/book-tour") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          webPageSchema({
            path: "/book-tour",
            name: "Book a Free School Tour | Kidzee jeetshree, Ratlam",
            description:
              "Schedule a free campus tour at Kidzee jeetshree preschool, Ratlam. Meet our teachers and see our safe, joyful learning environment before you enrol.",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book a School Tour", path: "/book-tour" },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema("/book-tour", tourFaqs)),
      },
    ],
  }),
  component: BookTour,
});

function BookTour() {
  const { submit, isSubmitting, isSuccess, reset } = useSubmitForm();

const handleTourBooking = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // Save reference before await
  const formData = new FormData(form);

  const ok = await submit({
    formType: "book-tour",
    parentName: String(formData.get("parentName") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    program: String(formData.get("program") ?? ""),
    tourDate: String(formData.get("date") ?? ""),
    tourTime: String(formData.get("time") ?? ""),
  });

  if (ok) {
    form.reset();
  }
};

  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col">
      {/* BACKGROUND BLOBS (Matching Theme) */}
      <div className="absolute inset-0 -z-10 pointer-events-none fixed">
        <div className="absolute top-10 left-10 h-80 w-80 blob bg-[var(--sunshine)] opacity-40 animate-float" />
        <div className="absolute top-1/3 right-10 h-72 w-72 blob bg-[var(--bubblegum)] opacity-30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 blob bg-[var(--mint)] opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-20 h-64 w-64 blob bg-[var(--peach)] opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <SiteHeader />

      {/* FORM SECTION */}
      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Book a School Tour</span>
          </nav>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-4">
              <Sparkles className="h-4 w-4" /> Experience the Magic
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Book a School Tour
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Come see where little minds bloom! Walk through our safe, joyful campus and meet our wonderful educators.
            </p>
          </div>

          {isSuccess ? (
            <FormSuccess
              title="Tour request received!"
              description="Your tour booking is saved. WhatsApp is open — tap Send to notify us. We'll confirm your visit by phone soon."
              onReset={reset}
              resetLabel="Book another tour"
            />
          ) : (
          <form 
            onSubmit={handleTourBooking}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 sm:p-12 shadow-[var(--shadow-soft)]"
          >
            <div className="grid sm:grid-cols-2 gap-7">
              
              {/* Parent Details */}
              <div className="sm:col-span-2">
                <h2 className="text-lg font-bold border-b border-border pb-2 mb-4 flex items-center gap-2 text-primary">
                  <User className="h-5 w-5" /> Your Details
                </h2>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Parent's Full Name *</label>
                <input 
                  type="text" 
                  name="parentName"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+91"
                    className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="example@mail.com"
                    className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Child Details */}
              <div className="sm:col-span-2 mt-4">
                <h2 className="text-lg font-bold border-b border-border pb-2 mb-4 flex items-center gap-2 text-[var(--peach)]">
                  <Baby className="h-5 w-5" /> Child's Information
                </h2>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Interested Program *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
                  {["Playgroup", "Nursery", "Jr. KG", "Sr. KG"].map((prog) => (
                    <label key={prog} className="relative cursor-pointer">
                      <input type="radio" name="program" value={prog} className="peer sr-only" required />
                      <div className="rounded-xl border border-border bg-background px-4 py-3 text-center text-sm font-semibold hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition">
                        {prog}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Scheduling Details */}
              <div className="sm:col-span-2 mt-4">
                <h2 className="text-lg font-bold border-b border-border pb-2 mb-4 flex items-center gap-2 text-[var(--mint)]">
                  <Calendar className="h-5 w-5" /> Schedule Tour
                </h2>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Preferred Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="date" 
                    name="date"
                    required
                    className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80 pl-1">Preferred Time *</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select 
                    name="time"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm appearance-none"
                  >
                    <option value="" disabled>
                      Select a time slot
                    </option>
                    <option value="Morning (9:30 AM - 11:30 AM)">Morning (9:30 AM - 11:30 AM)</option>
                    <option value="Afternoon (12:00 PM - 2:00 PM)">Afternoon (12:00 PM - 2:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 mt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-pop)] hover:scale-[1.02] transition disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Confirm Tour Booking <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Your booking will be saved, emailed to our team, and WhatsApp will open to confirm.
                </p>
              </div>
            </div>
          </form>
          )}

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-foreground text-center">Tour FAQs</h2>
            <div className="mt-6 space-y-3">
              {tourFaqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-card border border-border p-5 open:shadow-[var(--shadow-soft)]">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-sm text-foreground list-none">
                    <span>{f.q}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-primary group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Ready to secure a seat instead?{" "}
              <Link to="/admissions" className="font-semibold text-primary hover:underline">
                Start the admission form
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
       <footer className="border-t border-border py-12">
              <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4">
                {/* Brand */}
                <div className="md:col-span-2">
                  <picture>
                    <source srcSet={logoWebp} type="image/webp" />
                    <img
                      src={logo}
                      alt="Kidzee jeetshree, Ratlam preschool logo"
                      loading="lazy"
                      decoding="async"
                      className="h-15 w-auto"
                    />
                  </picture>
      
                  <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                    Kidzee jeetshree School, Ratlam — a happy, premium preschool where
                    little minds bloom with joy & wonder.{" "}
                    Discover why families call us the{" "}
                    <Link
                      to="/best-preschool-in-ratlam"
                      className="font-semibold text-primary hover:underline"
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
                <div className="text-sm">
                  <h3 className="font-bold text-foreground">Visit Us</h3>
      
                  <p className="mt-3 flex gap-2 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      30, Siddhi Vinayak Colony, Near Deendayal Nagar, Ratlam,
                      Madhya Pradesh 457001.
                    </span>
                  </p>
                </div>
      
                {/* Contact */}
                <div className="text-sm">
                  <h3 className="font-bold text-foreground">Get in Touch</h3>
      
                  <ul className="mt-3 space-y-2 text-muted-foreground">
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
    </div>
  );
}