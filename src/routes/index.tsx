import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, breadcrumbSchema, webPageSchema, faqSchema, PROGRAMS } from "@/lib/seo-config";
import heroChild from "@/assets/hero-child.jpg";
import heroChildWebp from "@/assets/hero-child.webp";

import activities from "@/assets/activities.jpg";
import activitiesWebp from "@/assets/activities.webp";
import campus from "@/assets/campus.jpg";
import campusWebp from "@/assets/campus.webp";
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Palette,
  GraduationCap,
  Brain,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Star,
  Sun,
  Music,
  BookOpen,
  Bike,
  Apple,
  Smile,
  Instagram,
  Facebook,
  MessageCircle,
  Backpack,
  Lightbulb,
  Baby,
  Rocket,
  Quote,
  ChevronDown,
} from "lucide-react";

// Dynamically calculate the admission year (e.g., 2026-27)
const currentYear = new Date().getFullYear();
const nextYearShort = (currentYear + 1).toString().slice(-2);
const ADMISSION_YEAR = `${currentYear}-${nextYearShort}`;

const homeFaqs = [
  {
    q: "What programs does Kidzee jeetshree, Ratlam offer?",
    a: "Kidzee jeetshree offers Playgroup (2.5–3.5 yrs), Nursery (3.5–4.5 yrs), Jr. KG (4.5–5.5 yrs) and Sr. KG (5.5–6.5 yrs), all built on Kidzee's signature Pentemind curriculum.",
  },
  {
    q: "Why is Kidzee jeetshree considered one of the best preschools in Ratlam?",
    a: "Parents choose us for our safe, CCTV-monitored campus, loving and trained teachers, playful Pentemind curriculum, and a track record of 500+ happy children across Ratlam.",
  },
  {
    q: "How do I apply for preschool admission at Kidzee jeetshree?",
    a: "You can apply online through our Admissions page, or book a free school tour to meet our principal and complete the admission form on campus.",
  },
  {
    q: "What are the school timings at Kidzee jeetshree, Ratlam?",
    a: "Classes run Monday to Saturday from 9:00 AM to 2:00 PM, with a flexible daily schedule of circle time, phonics, snacks, art, music and outdoor play.",
  },
  {
    q: "Is Kidzee jeetshree a safe environment for young children?",
    a: "Yes — our campus is CCTV-monitored across all zones, with child-safe interiors, trained caregivers and hygienic, kid-friendly washrooms.",
  },
];

const WHATSAPP_NUMBER = "919589208322";
const WHATSAPP_MESSAGE = `Hi Kidzee jeetshree, Ratlam! 👋 I'd like to know more about Admissions ${ADMISSION_YEAR} and book a school tour. Please share the details. Thank you!`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kidzee jeetshree, Ratlam — Best Preschool & Play School Admissions" },
      {
        name: "description",
        content: `Kidzee jeetshree, Ratlam — a trusted preschool for Playgroup, Nursery, Jr. KG & Sr. KG with the Pentemind curriculum, safe campus & loving teachers. Admissions open ${ADMISSION_YEAR}.`,
      },
      {
        name: "keywords",
        content: "Kidzee Jeetshree Ratlam, best preschool in Ratlam, best play school in Ratlam, preschool in Ratlam, nursery school in Ratlam, kindergarten school in Ratlam, preschool admissions Ratlam",
      },
      { property: "og:title", content: "Kidzee jeetshree, Ratlam — A joyful start for little learners" },
      {
        property: "og:description",
        content: "Loving teachers, a safe campus, and playful learning that helps every child bloom. Book a school tour today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kidzee jeetshree, Ratlam — Best Preschool & Play School Admissions" },
      {
        name: "twitter:description",
        content: "Playgroup, Nursery, Jr. KG & Sr. KG with the Pentemind curriculum in a safe, joyful campus in Ratlam.",
      },
    ],
    links: [
      { rel: "canonical", href: absoluteUrl("/") },
     {
  rel: "preload",
  as: "image",
  href: heroChildWebp,
  type: "image/webp",
  fetchPriority: "high",
},
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          webPageSchema({
            path: "/",
            name: "Kidzee jeetshree, Ratlam — Best Preschool & Play School Admissions",
            description: `Kidzee jeetshree, Ratlam — a trusted preschool for Playgroup, Nursery, Jr. KG & Sr. KG with the Pentemind curriculum, safe campus & loving teachers. Admissions open ${ADMISSION_YEAR}.`,
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Home", path: "/" }])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema("/", homeFaqs)),
      },
    ],
  }),
  component: Home,
});

const benefits = [
  {
    icon: Palette,
    title: "Playful Learning",
    desc: "Hands-on activities that turn every concept into a tiny adventure.",
    color: "var(--sunshine)",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Nurturing",
    desc: "CCTV-monitored campus, trained caregivers and lots of warm hugs.",
    color: "var(--mint)",
  },
  {
    icon: Heart,
    title: "Expert Teachers",
    desc: "Loving educators trained the Kidzee way — patient, joyful, attentive.",
    color: "var(--bubblegum)",
  },
  {
    icon: Sparkles,
    title: "Holistic Development",
    desc: "Music, art, movement and social play — we grow the whole little human.",
    color: "var(--peach)",
  },
  {
    icon: Brain,
    title: "Pentemind Curriculum",
    desc: "Kidzee's signature 5-mind approach that nurtures every spark of curiosity.",
    color: "var(--sky)",
  },
  {
    title: "Innovative Learning",
    desc: "Engaging, modern teaching methods that make learning fun and impactful.",
    icon: Lightbulb,
    color: "var(--sky, #7dd3fc)" // Replace with your specific variable or hex
  },
  // 2nd New Card: All-Inclusive Supplies
  {
    title: "All-Inclusive Essentials",
    desc: "From textbooks and stationery to school uniforms, everything is provided by the school so you have one less thing to worry about.",
    icon: Backpack, 
    color: "var(--bubblegum, #f9a8d4)" // Replace with your specific variable or hex
  }
];

const programs = [
  { name: "Playgroup", age: "1.5 – 2.5 yrs", icon: Baby, tint: "var(--peach)" },
  { name: "Nursery", age: "2.5 – 3.5 yrs", icon: Palette, tint: "var(--sunshine)" },
  { name: "Jr. KG", age: "3.5 – 4.5 yrs", icon: BookOpen, tint: "var(--mint)" },
  { name: "Sr. KG", age: "4.5 – 5.5 yrs", icon: Rocket, tint: "var(--sky)" },
];

const day = [
  { time: "10:00 AM", title: "Sunshine Circle", desc: "Hellos, hugs and the song of the day.", icon: Sun },
  { time: "10:30 AM", title: "Story & Phonics", desc: "Picture books, rhymes and tiny giggles.", icon: BookOpen },
  { time: "11:00 AM", title: "Snack & Smiles", desc: "Healthy bites and lots of friendly chatter.", icon: Apple },
  { time: "11:50 PM", title: "Art & Craft", desc: "Paint, paste, sparkle — the messier the better.", icon: Palette },
  { time: "12:30 PM", title: "Music & Movement", desc: "Dance, drums and dramatic poses.", icon: Music },
  { time: "1:00 PM", title: "Outdoor Play", desc: "Slides, scooters and lots of fresh air.", icon: Bike },
];

const testimonials = [
  {
    quote:
      "My daughter runs into school every morning. The teachers genuinely love every child — we couldn't have asked for a warmer start.",
    name: "Priya Sharma",
    child: "Mother of Aanya, Nursery",
  },
  {
    quote:
      "The Pentemind activities have made our son so curious. He sings new rhymes and tells little stories every evening!",
    name: "Rahul Mehta",
    child: "Father of Vivaan, Jr. KG",
  },
  {
    quote:
      "Clean, safe, and full of joy. The daily updates from teachers make us feel completely at ease.",
    name: "Neha Agarwal",
    child: "Mother of Ira, Playgroup",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <SiteHeader />

      <main>
      {/* HERO */}
      <section id="top" className="relative pt-10 sm:pt-16 pb-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 h-40 w-40 blob bg-[var(--sunshine)] opacity-60 animate-float" />
          <div className="absolute bottom-10 right-16 h-52 w-52 blob bg-[var(--mint)] opacity-50 animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/3 right-1/3 h-24 w-24 blob bg-[var(--peach)] opacity-60 animate-float" style={{ animationDelay: "0.8s" }} />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Admissions Open • {ADMISSION_YEAR}
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Where Little Minds <span className="text-primary">Bloom</span> with{" "}
              <span className="relative inline-block">
                Joy
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--sunshine)] -z-10 rounded-full" />
              </span>{" "}
              & Wonder
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Encouraging every child to learn with an open mind at{" "}
              <span className="font-semibold text-foreground">Kidzee jeetshree School, Ratlam</span>.
              A warm, magical world built around your little one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.03] transition"
              >
                Admissions Open {ADMISSION_YEAR}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              {/* UPDATED: Changed from <a> to <Link> for Book a School Tour */}
              <Link
                to="/book-tour"
                className="inline-flex items-center gap-2 rounded-full bg-card border-2 border-primary/20 px-7 py-4 text-base font-bold text-foreground hover:border-primary transition"
              >
                <Calendar className="h-5 w-5 text-primary" /> Book a School Tour
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
              <span className="rounded-full bg-card border border-border px-3 py-1">Playgroup</span>
              <span className="rounded-full bg-card border border-border px-3 py-1">Nursery</span>
              <span className="rounded-full bg-card border border-border px-3 py-1">Jr. KG</span>
              <span className="rounded-full bg-card border border-border px-3 py-1">Sr. KG</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              <div className="absolute inset-0 blob bg-gradient-to-br from-[var(--sunshine)] via-[var(--peach)] to-[var(--bubblegum)] opacity-90" />
              <picture>
  <source type="image/webp" srcSet={heroChildWebp} />

  <img
    src={heroChild}
    alt="A joyful child welcoming you to Kidzee jeetshree preschool, Ratlam"
    width={525}
    height={541}
    fetchPriority="high"
    decoding="async"
    className="absolute inset-3 blob object-cover w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] shadow-[var(--shadow-soft)]"
  />
</picture>
              <div className="absolute -top-4 -right-2 rounded-2xl bg-card shadow-[var(--shadow-soft)] px-4 py-3 flex items-center gap-2 animate-float">
                <Smile className="h-6 w-6 text-primary" />
                <div className="text-xs">
                  <div className="font-bold text-foreground">500+ Happy Kids</div>
                  <div className="text-muted-foreground">& counting!</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 rounded-2xl bg-card shadow-[var(--shadow-soft)] px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                <Star className="h-6 w-6 text-[oklch(0.75_0.18_80)] fill-[oklch(0.85_0.16_85)]" />
                <div className="text-xs">
                  <div className="font-bold text-foreground">4.9 Parent Rated</div>
                  <div className="text-muted-foreground">Loved in Ratlam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Why Parents Choose Us</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A place built around little hearts</h2>
            <p className="mt-4 text-muted-foreground">
              Every corner, every lesson, every smile — designed to make your child feel safe, seen and excited.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-3xl bg-card border border-border p-7 hover:-translate-y-1 transition shadow-sm hover:shadow-[var(--shadow-soft)]"
              >
                <div
                  className="h-14 w-14 blob flex items-center justify-center group-hover:animate-wiggle"
                  style={{ background: b.color }}
                >
                  <b.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Our Programs</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A perfect step for every age</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              From first words to first stories — our programs grow gently alongside your child.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div
                key={p.name}
                className="relative rounded-3xl p-7 overflow-hidden border border-border hover:-translate-y-1.5 transition shadow-sm hover:shadow-[var(--shadow-pop)]"
                style={{ background: `color-mix(in oklab, ${p.tint} 55%, white)` }}
              >
                <div className="h-14 w-14 flex items-center justify-center">
                  <p.icon className="h-10 w-10 text-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground/70">{p.age}</p>
                <p className="mt-3 text-sm text-foreground/75">
                  {PROGRAMS.find((prog) => prog.name === p.name)?.description ??
                    "Curated experiences that build confidence, language and curiosity at every stage."}
                </p>
                <a href="#admissions" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Enquire <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A DAY */}
      <section id="day" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">A Day at Kidzee jeetshree</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A day full of giggles, growth & glitter</h2>
              <p className="mt-4 text-muted-foreground">
                Our days flow gently — full of learning moments, creativity, fresh air and lots of friendship.
              </p>
              <picture>
                <source type="image/webp" srcSet={activitiesWebp} />
                <img
                  src={activities}
                  alt="Children doing creative activities at Kidzee jeetshree preschool, Ratlam"
                  loading="lazy"
                  decoding="async"
                  width={551}
                  height={515}
                  className="mt-8 w-full rounded-3xl border border-border bg-card"
                />
              </picture>
            </div>
            <div className="relative">
              <div className="absolute left-7 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-[var(--sunshine)] via-[var(--mint)] to-[var(--sky)]" />
              <ul className="space-y-5">
                {day.map((d) => (
                  <li key={d.time} className="relative flex gap-5 pl-2">
                    <div className="relative z-10 h-14 w-14 blob bg-card border-2 border-primary/20 flex items-center justify-center shadow-sm">
                      <d.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-card border border-border p-5 shadow-sm">
                      <div className="text-xs font-bold text-primary">{d.time}</div>
                      <div className="mt-1 text-lg font-bold">{d.title}</div>
                      <div className="text-sm text-muted-foreground">{d.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section id="campus" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Our Campus</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Bright, safe & made for tiny explorers</h2>
              <p className="mt-4 text-muted-foreground">
                Sun-lit classrooms, a soft play zone, a library nook and a green outdoor area — every corner has been
                lovingly designed for joyful learning.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold">
                {["Child-safe interiors with rounded edges", "CCTV across all zones", "Dedicated outdoor play area", "Hygienic, kid-friendly washrooms"].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-[var(--mint)] flex items-center justify-center">
                      <Heart className="h-3.5 w-3.5 text-foreground" />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
                <picture>
                  <source type="image/webp" srcSet={campusWebp} />
                  <img src={campus} alt="Kidzee jeetshree campus in Ratlam" loading="lazy" decoding="async" width={1000} height={451} className="h-full w-full object-cover" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section id="parents" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Happy Parents Speak</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Words straight from the heart</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="rounded-3xl bg-card border border-border p-7 shadow-sm relative">
                <div className="absolute -top-4 left-7 h-8 w-8 blob bg-[var(--sunshine)] flex items-center justify-center">
                  <Quote className="h-4 w-4 text-foreground" />
                </div>
                <p className="mt-3 text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="h-12 w-12 blob flex items-center justify-center font-bold text-foreground"
                    style={{ background: i === 0 ? "var(--peach)" : i === 1 ? "var(--mint)" : "var(--sky)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.child}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Frequently Asked Questions</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Parents often ask us</h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers about admissions, programs and daily life at Kidzee jeetshree, Ratlam.
            </p>
          </div>
          <div className="mt-10 space-y-3">
            {homeFaqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-border p-5 open:shadow-[var(--shadow-soft)]">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-foreground list-none">
                  <span>{f.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary group-open:rotate-180 transition" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            More questions?{" "}
            <Link to="/best-preschool-in-ratlam" className="font-semibold text-primary hover:underline">
              See our full admissions FAQ
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              contact us directly
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section id="admissions" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-16">
            <div className="absolute -top-10 -right-10 h-64 w-64 blob bg-[var(--sunshine)] opacity-30" />
            <div className="absolute -bottom-16 -left-10 h-72 w-72 blob bg-[var(--peach)] opacity-25" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold">
                  <GraduationCap className="h-4 w-4" /> Admissions Open {ADMISSION_YEAR}
                </div>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
                  Let's begin your child's happiest chapter
                </h2>
                <p className="mt-4 text-primary-foreground/85 max-w-lg">
                  Limited seats available for Playgroup, Nursery, Jr. KG and Sr. KG. Book a personal campus tour with our
                  principal today.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="tel:+919589208322"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-bold hover:scale-[1.03] transition"
                  >
                    <Phone className="h-4 w-4" /> +91 95892 08322
                  </a>
                  <a
                    href="tel:+918305952666"
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-6 py-3.5 font-bold hover:bg-white/25 transition"
                  >
                    <Phone className="h-4 w-4" /> +91 83059 52666
                  </a>
                   <a
                    href="tel:+917723888303 "
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-6 py-3.5 font-bold hover:bg-white/25 transition"
                  >
                    <Phone className="h-4 w-4" /> +91  7723888303 
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {programs.map((p) => (
                  <div key={p.name} className="rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm">
                    <p.icon className="h-8 w-8 text-primary-foreground" strokeWidth={1.75} />
                    <div className="mt-3 font-bold">{p.name}</div>
                    <div className="text-xs text-primary-foreground/80">{p.age}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="Kidzee jeetshree, Ratlam preschool logo" loading="lazy" decoding="async" className="h-15 w-auto" />
            </picture>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Kidzee jeetshree School, Ratlam — a happy, premium preschool where little minds bloom with joy & wonder.
              {" "}Discover why families call us the{" "}
              <Link to="/best-preschool-in-ratlam" className="font-semibold text-primary hover:underline">
                best preschool in Ratlam
              </Link>
              .
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.instagram.com/kidzee.jeetshree/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/kidzee.jeetshree/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-bold text-foreground">Visit Us</div>
            <p className="mt-3 text-muted-foreground flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              30, Siddhi Vinayak Colony, Near Deendayal Nagar, Ratlam, Madhya Pradesh 457001.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-bold text-foreground">Get in Touch</div>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 95892 08322</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 83059 52666</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 77238 88303</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> kidzee5789@kidzee.com</li>
            </ul>
          </div>
        </div>
      
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp about admissions and school tours"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center gap-3"
      >
        <span className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition rounded-full bg-card border border-border px-4 py-2 text-sm font-bold text-foreground shadow-[var(--shadow-soft)]">
          Chat for Admissions
        </span>
        <span className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-soft)] hover:scale-110 transition">
          <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] opacity-60 animate-ping" />
          <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} />
        </span>
      </a>
    </div>
  );
}