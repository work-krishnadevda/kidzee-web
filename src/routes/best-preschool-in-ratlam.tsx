import { createFileRoute, Link } from "@tanstack/react-router";

import { Facebook, Instagram, Mail } from "lucide-react";

import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { FormSuccess } from "@/components/FormSuccess";
import { useSubmitForm } from "@/hooks/use-submit-form";
import heroChild from "@/assets/hero-child.jpg";
import heroChildWebp from "@/assets/hero-child.webp";
import campus from "@/assets/campus.jpg";
import campusWebp from "@/assets/campus.webp";
import activities from "@/assets/activities.jpg";
import activitiesWebp from "@/assets/activities.webp";
import { absoluteUrl, breadcrumbSchema, webPageSchema, faqSchema, NAP } from "@/lib/seo-config";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  GraduationCap,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Users,
  Award,
  MessageCircle,
  ChevronDown,
  Lock,
  Loader2,
} from "lucide-react";

const currentYear = new Date().getFullYear();
const nextYearShort = (currentYear + 1).toString().slice(-2);
const ADMISSION_YEAR = `${currentYear}-${nextYearShort}`;

const WHATSAPP_NUMBER = "919589208322";
const PHONE = "+919589208322";
const ADDRESS = NAP.fullAddress;

const faqs = [
  {
    q: "Which is the best preschool in Ratlam for playgroup and nursery admissions?",
    a: "Kidzee jeetshree, Ratlam is a leading preschool offering Playgroup, Nursery, Jr. KG and Sr. KG with the trusted Kidzee Pentemind curriculum, trained teachers, a safe CCTV-monitored campus and a child-first approach.",
  },
  {
    q: "What is the age criteria for admission?",
    a: "Playgroup: 1.5–2.5 yrs, Nursery: 2.5–3.5 yrs, Jr. KG: 3.5–4.5 yrs, Sr. KG: 4.5–5.5 yrs as on 1st June of the academic year.",
  },
  {
    q: `Are admissions open for the ${ADMISSION_YEAR} session?`,
    a: `Yes, admissions for ${ADMISSION_YEAR} are open with limited seats per class. Book a free campus tour or call +91 95892 08322 to reserve your child's seat.`,
  },
  {
    q: "What are the school timings and fee structure?",
    a: "Classes run on weekdays between 9:00 AM and 2:00 PM. Fee details are shared during your campus visit — flexible quarterly payment options are available.",
  },
  {
    q: "Where is Kidzee jeetshree located in Ratlam?",
    a: "Kidzee jeetshree School is located in Ratlam, Madhya Pradesh. Call +91 95892 08322 for directions, or book a tour and we'll share the exact Google Maps pin on WhatsApp.",
  },
  {
  q: "How can I get admission to Kidzee Jeetshree Ratlam?",
  a: "Getting started is easy. Contact our admissions team or visit our campus, and we'll guide you through the admission process, age eligibility, required documents, and fee details."
},
 {
  q: "What documents are required for preschool admission at Kidzee Jeetshree Ratlam?",
  a: "The required documents may vary depending on the admission process. Please contact our admissions team or visit our campus, and we'll guide you through the complete list of documents and assist you with the admission process."
},
  {
    q: "Is Kidzee jeetshree a CBSE or Kidzee-affiliated preschool?",
    a: "Kidzee jeetshree is part of Kidzee, India's largest and most trusted preschool network, and follows the proprietary Kidzee Pentemind curriculum designed to prepare children for CBSE, ICSE and state-board primary schools alike.",
  },
  {
    q: "How is Kidzee jeetshree different from other play schools in Ratlam?",
    a: "Unlike generic daycare or play schools in Ratlam, Kidzee jeetshree combines a structured, research-backed early-childhood curriculum with a nurturing, home-like environment, trained teachers and a CCTV-monitored, child-safe campus near Deendayal Nagar.",
  },
];

const trust = [
  { icon: Award, label: "Part of India's #1 preschool chain — Kidzee" },
  { icon: Users, label: "500+ happy children across Ratlam families" },
  { icon: ShieldCheck, label: "CCTV-monitored, child-safe campus" },
  { icon: Star, label: "4.9 average parent rating" },
];

const reasons = [
  { icon: GraduationCap, title: "Pentemind Curriculum", desc: "Kidzee's signature 5-mind approach — nurturing intellectual, emotional, physical, social and creative growth." },
  { icon: Heart, title: "Loving, Trained Teachers", desc: "Educators trained the Kidzee way — patient, joyful and attentive to every child." },
  { icon: ShieldCheck, title: "Safe Premium Campus", desc: "Child-safe interiors, CCTV, hygienic washrooms and a dedicated outdoor play zone." },
  { icon: Sparkles, title: "Holistic Activities", desc: "Music, art, phonics, storytelling, yoga and outdoor play — every day, every child." },
  { icon: Clock, title: "Convenient Timings", desc: "Flexible play hours that suit working parents in Ratlam." },
  { icon: CheckCircle2, title: "Proven Outcomes", desc: "School-ready children with confidence, language skills and curiosity that lasts." },
];

export const Route = createFileRoute("/best-preschool-in-ratlam")({
  head: () => ({
    meta: [
      { title: `Best Preschool in Ratlam | Kidzee jeetshree — Admissions Open ${ADMISSION_YEAR}` },
      {
        name: "description",
        content:
          "Looking for the best preschool in Ratlam? Kidzee jeetshree offers Playgroup, Nursery, Jr. KG & Sr. KG with safe campus, trained teachers & Pentemind curriculum. Book a free tour today!",
      },
      {
        name: "keywords",
        content: `best preschool in Ratlam, top preschool in Ratlam, best play school in Ratlam, playgroup in Ratlam, nursery school Ratlam, kindergarten Ratlam, Kidzee Ratlam, Kidzee jeetshree Ratlam, preschool admissions Ratlam ${ADMISSION_YEAR}, daycare Ratlam, play school near me Ratlam, preschool near Deendayal Nagar, preschool near Siddhi Vinayak Colony, CBSE feeder preschool Ratlam, Pentemind curriculum preschool, preschool with transport Ratlam, affordable preschool Ratlam, preschool admission process Ratlam`,
      },
      { property: "og:title", content: "Best Preschool in Ratlam | Kidzee jeetshree — Admissions Open" },
      {
        property: "og:description",
        content:
          "Safe campus, loving teachers and India's #1 Pentemind curriculum. Book a free school tour in Ratlam today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/best-preschool-in-ratlam") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Preschool in Ratlam | Kidzee jeetshree" },
      { name: "twitter:description", content: `Admissions Open ${ADMISSION_YEAR} — Playgroup, Nursery, Jr. KG & Sr. KG. Book a free tour.` },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/best-preschool-in-ratlam") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          webPageSchema({
            path: "/best-preschool-in-ratlam",
            name: `Best Preschool in Ratlam | Kidzee jeetshree — Admissions Open ${ADMISSION_YEAR}`,
            description:
              "Looking for the best preschool in Ratlam? Kidzee jeetshree offers Playgroup, Nursery, Jr. KG & Sr. KG with safe campus, trained teachers & Pentemind curriculum. Book a free tour today!",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Best Preschool in Ratlam", path: "/best-preschool-in-ratlam" },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema("/best-preschool-in-ratlam", [...faqs])),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <main>
      {/* HERO + LEAD FORM */}
      <section className="relative pt-10 sm:pt-14 pb-16">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 h-40 w-40 blob bg-[var(--sunshine)] opacity-50 animate-float" />
          <div className="absolute bottom-10 right-16 h-52 w-52 blob bg-[var(--mint)] opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="hover:text-primary transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Best Preschool in Ratlam</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Admissions Open • Limited Seats • {ADMISSION_YEAR}
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
              The <span className="text-primary">Best Preschool in Ratlam</span> for your little superstar
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Join 500+ Ratlam families who chose Kidzee jeetshree — India's most trusted preschool brand. Playgroup,
              Nursery, Jr. KG & Sr. KG with the famous Pentemind curriculum.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-foreground/85">
              {[
                "Free campus tour & meeting with Principal",
                "Personalised admission counselling",
                "Sibling & early-bird fee benefits",
                "Safe, AC classrooms & CCTV monitored",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.03] transition"
              >
                Book Free School Tour <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-card border-2 border-primary/20 px-6 py-3.5 font-bold text-foreground hover:border-primary transition"
              >
                <Phone className="h-5 w-5 text-primary" /> Call Now
              </a>
            </div>
          </div>

          {/* LEAD FORM */}
          <div id="enquiry" className="relative">
            <div className="absolute -inset-2 blob bg-gradient-to-br from-[var(--sunshine)] via-[var(--peach)] to-[var(--bubblegum)] opacity-70 -z-10" />
            <LeadForm />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-y border-border bg-card/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3 text-sm font-semibold text-foreground/85">
              <span className="h-10 w-10 blob bg-[var(--mint)] flex items-center justify-center shrink-0">
                <t.icon className="h-5 w-5 text-foreground" />
              </span>
              {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Why Ratlam Parents Choose Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">More than a preschool — a happy second home</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-3xl bg-card border border-border p-7 shadow-sm hover:-translate-y-1 transition">
                <div className="h-12 w-12 blob bg-[var(--sunshine)] flex items-center justify-center">
                  <r.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <picture>
              <source type="image/webp" srcSet={campusWebp} />
              <img src={campus} alt="Kidzee jeetshree campus in Ratlam" loading="lazy" decoding="async" width={1000} height={451} className="rounded-3xl border border-border w-full h-full object-cover aspect-[4/3]" />
            </picture>
            <picture>
              <source type="image/webp" srcSet={activitiesWebp} />
              <img src={activities} alt="Children doing activities at Kidzee jeetshree Ratlam" loading="lazy" decoding="async" width={551} height={515} className="rounded-3xl border border-border w-full h-full object-cover aspect-[4/3]" />
            </picture>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <Link to="/gallery" className="font-semibold text-primary hover:underline">
              See more photos of our campus and classrooms →
            </Link>
          </p>
        </div>
      </section>

      {/* OFFER STRIP */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-primary text-primary-foreground p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-48 w-48 blob bg-[var(--sunshine)] opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
  Admission Benefits
</h2>

<p className="mt-2 max-w-xl text-primary-foreground/85">
  Enquire today to learn about current admission benefits and available offers
  for the academic session.
</p>
              
            </div>
            <a
              href="#enquiry"
              className="relative inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-bold hover:scale-[1.03] transition shrink-0"
            >
                Enquire Now  <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <picture>
            <source type="image/webp" srcSet={heroChildWebp} />
            <img
              src={heroChild}
              alt="A happy child at Kidzee jeetshree preschool, Ratlam"
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="mx-auto h-24 w-24 blob object-cover"
            />
          </picture>
          <p className="mt-6 text-xl sm:text-2xl font-display text-foreground leading-relaxed">
            "We toured 5 preschools in Ratlam before choosing Kidzee jeetshree. The warmth of the teachers and the
            curriculum made the choice easy. Our daughter loves going every single day."
          </p>
          <div className="mt-4 text-sm font-semibold text-muted-foreground">— Priya S., Mother of Aanya (Nursery)</div>
          <div className="mt-2 flex justify-center gap-1 text-[oklch(0.75_0.18_80)]">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Parents Frequently Ask</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Everything you need to know</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-border p-5 open:shadow-[var(--shadow-soft)]">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-foreground list-none">
                  <span>{f.q}</span>
                  <ChevronDown className="h-5 w-5 text-primary group-open:rotate-180 transition" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2.5rem] bg-card border border-border p-10 sm:p-14 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Ready to give your child a joyful start?</h2>
              <p className="mt-4 text-muted-foreground">
                Visit our campus, meet the teachers, and see your little one's eyes light up. Free, no obligation.
              </p>
              <p className="mt-5 flex items-start gap-2 text-sm font-semibold text-foreground/85">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                {ADDRESS}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#enquiry"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.02] transition"
              >
                Book Free Tour
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-card border-2 border-primary/20 px-6 py-4 font-bold text-foreground hover:border-primary transition"
              >
                <Phone className="h-5 w-5 text-primary" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
       
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
             <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kidzee jeetshree School, Ratlam · The best preschool in Ratlam for Playgroup, Nursery, Jr. KG & Sr. KG · <Link to="/" className="underline hover:text-primary">Home</Link> · <Link to="/contact" className="underline hover:text-primary">Contact</Link>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about admissions at Kidzee jeetshree, Ratlam.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-soft)] hover:scale-110 transition"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] opacity-60 animate-ping" />
        <MessageCircle className="relative h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}

function LeadForm() {
  const { submit, isSubmitting, isSuccess, reset } = useSubmitForm();
  const [form, setForm] = useState({ name: "", phone: "", program: "Playgroup", child: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      formType: "landing-enquiry",
      parentName: form.name,
      phone: form.phone,
      child: form.child,
      program: form.program,
    });
  };

  if (isSuccess) {
    return (
      <FormSuccess
        title="Thank you!"
        description="Your enquiry is saved. WhatsApp is open — tap Send to notify us. We'll reach out within a few hours."
        onReset={() => {
          reset();
          setForm({ name: "", phone: "", program: "Playgroup", child: "" });
        }}
        resetLabel="Submit another enquiry"
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-card border border-border p-7 sm:p-8 shadow-[var(--shadow-soft)]"
    >
      <div className="flex items-center gap-2 text-xs font-bold text-primary">
        <Sparkles className="h-4 w-4" /> FREE CAMPUS TOUR · LIMITED SEATS
      </div>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">Book your child's spot</h2>
      <p className="mt-1 text-sm text-muted-foreground">Fill in below — we'll call you back within hours.</p>

      <div className="mt-6 space-y-4">
        <Field label="Parent's Name">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Priya Sharma"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </Field>
        <Field label="Mobile Number">
          <input
            required
            type="tel"
            pattern="[0-9+ ]{10,15}"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile number"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </Field>
        <Field label="Child's Name & Age">
          <input
            required
            value={form.child}
            onChange={(e) => setForm({ ...form, child: e.target.value })}
            placeholder="e.g. Aanya, 3 years"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </Field>
        <Field label="Interested Program">
          <select
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
          >
            <option>Playgroup (1.5–2.5 yrs)</option>
            <option>Nursery (2.5–3.5 yrs)</option>
            <option>Jr. KG (3.5–4.5 yrs)</option>
            <option>Sr. KG (4.5–5.5 yrs)</option>
            <option>Daycare</option>
          </select>
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.02] transition disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            Get Admission Details <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground inline-flex items-center justify-center gap-1.5 w-full">
        <Lock className="h-3.5 w-3.5 shrink-0" />
        Your details are safe with us. We'll never spam.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold text-foreground/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
