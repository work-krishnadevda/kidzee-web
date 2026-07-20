import { createFileRoute, Link } from "@tanstack/react-router";

import { Facebook, Instagram} from "lucide-react";

import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

import { SiteHeader } from "@/components/SiteHeader";
import { FormSuccess } from "@/components/FormSuccess";
import { useSubmitForm } from "@/hooks/use-submit-form";
import { absoluteUrl, breadcrumbSchema, webPageSchema, faqSchema, PROGRAMS } from "@/lib/seo-config";
import {
  Send,
  User,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  GraduationCap,
  Loader2,
  ChevronDown,
} from "lucide-react";

const currentYear = new Date().getFullYear();
const nextYearShort = (currentYear + 1).toString().slice(-2);
const ADMISSION_YEAR = `${currentYear}-${nextYearShort}`;

const admissionFaqs = [
  {
    q: "What is the age criteria for Playgroup, Nursery, Jr. KG and Sr. KG?",
    a: "Playgroup is for children aged 1.5–2.5 years, Nursery for 2.5–3.5 years, Jr. KG for 3.5–4.5 years and Sr. KG for 4.5–5.5 years, calculated as on 1st June of the academic year.",
  },
  {
    q: "What documents do I need for admission?",
    a: "You'll need the child's birth certificate, address proof, recent passport-size photographs and Aadhaar card copies of the child and parents. Our team can guide you through the full checklist.",
  },
  {
    q: "How long does the admission process take?",
    a: "Most admissions are confirmed within a few days of submitting the form — our team calls to confirm your seat, schedule a campus visit if needed, and share the fee and document details.",
  },
  {
    q: `Are seats still available for the ${ADMISSION_YEAR} academic session?`,
    a: `Yes, admissions for ${ADMISSION_YEAR} are currently open, though seats are limited per programme. Submitting the form below reserves your enquiry and secures priority callback.`,
  },
];

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: `Preschool Admission Form ${ADMISSION_YEAR} | Kidzee jeetshree, Ratlam` },
      {
        name: "description",
        content: `Apply for Playgroup, Nursery, Jr. KG or Sr. KG admission at Kidzee jeetshree, Ratlam. Admissions open for ${ADMISSION_YEAR} — limited seats, easy online form.`,
      },
      {
        name: "keywords",
        content:
          "preschool admission Ratlam, playgroup admission Ratlam, nursery admission Ratlam, Jr KG admission Ratlam, Sr KG admission Ratlam, Kidzee admissions open, preschool admission form Ratlam, preschool admission documents required, best preschool admission Ratlam, admission process for playgroup",
      },
      { property: "og:title", content: `Admissions Open ${ADMISSION_YEAR} | Kidzee jeetshree, Ratlam` },
      {
        property: "og:description",
        content: "Apply online for Playgroup, Nursery, Jr. KG or Sr. KG at Kidzee jeetshree, Ratlam.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/admissions") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Admissions Open ${ADMISSION_YEAR} | Kidzee jeetshree, Ratlam` },
      { name: "twitter:description", content: "Apply online for admission at Kidzee jeetshree preschool, Ratlam." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/admissions") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          webPageSchema({
            path: "/admissions",
            name: `Preschool Admission Form ${ADMISSION_YEAR} | Kidzee jeetshree, Ratlam`,
            description: `Apply for Playgroup, Nursery, Jr. KG or Sr. KG admission at Kidzee jeetshree, Ratlam. Admissions open for ${ADMISSION_YEAR} — limited seats, easy online form.`,
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Admissions", path: "/admissions" },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema("/admissions", admissionFaqs)),
      },
    ],
  }),
  component: AdmissionsForm,
});

function AdmissionsForm() {
  const { submit, isSubmitting, isSuccess, reset } = useSubmitForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ok = await submit({
      formType: "admission",
      studentName: String(formData.get("studentName") ?? ""),
      dateOfBirth: String(formData.get("dateOfBirth") ?? ""),
      gender: String(formData.get("gender") ?? ""),
      program: String(formData.get("program") ?? ""),
      parentName: String(formData.get("parentName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      address: String(formData.get("address") ?? ""),
    });

    if (ok) e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col">
      <div className="absolute inset-0 -z-10 pointer-events-none fixed">
        <div className="absolute top-0 left-0 h-96 w-96 blob bg-[var(--sky)] opacity-30 animate-float" />
        <div className="absolute top-40 right-10 h-72 w-72 blob bg-[var(--sunshine)] opacity-40 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-1/4 h-80 w-80 blob bg-[var(--mint)] opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-20 h-64 w-64 blob bg-[var(--peach)] opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <SiteHeader />

      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Admissions</span>
          </nav>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-4">
              <GraduationCap className="h-4 w-4" /> Admissions Open {ADMISSION_YEAR}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Begin Your Child's Journey
            </h1>
            <p className="mt-3 text-muted-foreground">
              Apply for Playgroup, Nursery, Jr. KG or Sr. KG admission at Kidzee jeetshree, Ratlam's trusted
              preschool. Please fill out the form below and our team will get in touch with you shortly to
              schedule a campus tour.
            </p>
          </div>

          {isSuccess ? (
            <FormSuccess
              title="Application received!"
              description="Your admission details are saved. WhatsApp is open — tap Send to notify us. Our team will call you soon."
              onReset={reset}
              resetLabel="Submit another application"
            />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card/80 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 sm:p-12 shadow-[var(--shadow-soft)]"
            >
              <div className="grid sm:grid-cols-2 gap-7">
                <div className="sm:col-span-2">
                  <h2 className="text-lg font-bold border-b border-border pb-2 mb-4 flex items-center gap-2 text-primary">
                    <User className="h-5 w-5" /> Student Details
                  </h2>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Student's Full Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    placeholder="Enter child's full name"
                    className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Date of Birth *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Gender *</label>
                  <select
                    name="gender"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm appearance-none"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Applying for Program *</label>
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

                <div className="sm:col-span-2 mt-4">
                  <h2 className="text-lg font-bold border-b border-border pb-2 mb-4 flex items-center gap-2 text-[var(--mint)]">
                    <Users className="h-5 w-5" /> Parent/Guardian Details
                  </h2>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    placeholder="Enter parent's or guardian's name"
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

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80 pl-1">Residential Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                    <textarea
                      name="address"
                      required
                      rows={3}
                      placeholder="Enter full address"
                      className="w-full rounded-2xl bg-background border border-border pl-11 pr-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm resize-none placeholder:text-muted-foreground/50"
                    />
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
                        Submit Application <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Your details will be saved, emailed to our team, and WhatsApp will open to confirm.
                  </p>
                </div>
              </div>
            </form>
          )}

          {/* PROGRAM SUMMARY */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-foreground text-center">Programs open for admission</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {PROGRAMS.map((p) => (
                <div key={p.name} className="rounded-2xl bg-card border border-border p-5 shadow-sm">
                  <div className="font-bold text-foreground">{p.name} <span className="font-normal text-muted-foreground">({p.ageRange})</span></div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-foreground text-center">Admission FAQs</h2>
            <div className="mt-6 space-y-3">
              {admissionFaqs.map((f) => (
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
              Prefer to see the campus first?{" "}
              <Link to="/book-tour" className="font-semibold text-primary hover:underline">
                Book a free school tour
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
