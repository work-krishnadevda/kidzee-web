import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useSubmitForm } from "@/hooks/use-submit-form";
import { SITE_URL, absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/seo-config";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  MessageCircle,
  PhoneCall,
  Loader2,
  ChevronDown,
} from "lucide-react";

const contactFaqs = [
  {
    q: "What is the fastest way to reach Kidzee jeetshree, Ratlam?",
    a: "Calling or messaging us on WhatsApp at +91 95892 08322 is the quickest way to get a response, usually within office hours (Mon–Sat, 8:30 AM–3:30 PM).",
  },
  {
    q: "Where exactly is the school located?",
    a: "Kidzee jeetshree School is at 30, Siddhi Vinayak Colony, near Deendayal Nagar, Ratlam, Madhya Pradesh 457001. Use the map on this page for exact directions.",
  },
  {
    q: "Can I ask about admissions through the contact form?",
    a: "Yes — mention your child's age and preferred programme in the message box, and our admissions team will follow up with the next steps.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kidzee jeetshree, Ratlam | Preschool Near DDU Nagar" },
      {
        name: "description",
        content:
          "Contact Kidzee jeetshree preschool in Ratlam for admissions, campus visits or queries. Call, WhatsApp or visit us near Deendayal Nagar, Ratlam.",
      },
      {
        name: "keywords",
        content:
          "contact Kidzee jeetshree Ratlam, preschool phone number Ratlam, preschool near Deendayal Nagar, preschool address Ratlam, Kidzee Ratlam WhatsApp number, preschool enquiry Ratlam",
      },
      { property: "og:title", content: "Contact Kidzee jeetshree, Ratlam" },
      {
        property: "og:description",
        content: "Reach Kidzee jeetshree preschool, Ratlam for admissions and campus tour enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Kidzee jeetshree, Ratlam" },
      { name: "twitter:description", content: "Call, WhatsApp or visit Kidzee jeetshree preschool in Ratlam." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${absoluteUrl("/contact")}#webpage`,
          url: absoluteUrl("/contact"),
          name: "Contact Kidzee jeetshree, Ratlam",
          description:
            "Contact Kidzee jeetshree preschool in Ratlam for admissions, campus visits or queries. Call, WhatsApp or visit us near Deendayal Nagar, Ratlam.",
          inLanguage: "en-IN",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          breadcrumb: { "@id": `${absoluteUrl("/contact")}#breadcrumb` },
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema("/contact", contactFaqs)),
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  const { submit, isSubmitting } = useSubmitForm();

 const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // ✅ Save reference first
  const formData = new FormData(form);

  const ok = await submit({
    formType: "contact",
    parentName: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  });

  if (ok) {
    form.reset(); 
  }
};

  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col">
      {/* BACKGROUND BLOBS (Matching Theme) */}
      <div className="absolute inset-0 -z-10 pointer-events-none fixed">
        <div className="absolute top-0 left-0 h-96 w-96 blob bg-[var(--sky)] opacity-30 animate-float" />
        <div className="absolute top-40 right-10 h-72 w-72 blob bg-[var(--sunshine)] opacity-40 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 left-1/4 h-80 w-80 blob bg-[var(--mint)] opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-20 h-64 w-64 blob bg-[var(--peach)] opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <SiteHeader />

      {/* CONTENT SECTION */}
      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Contact Us</span>
          </nav>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-4">
              <Sparkles className="h-4 w-4" /> We'd love to hear from you
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Have questions about{" "}
              <Link to="/admissions" className="font-semibold text-primary hover:underline">
                admissions
              </Link>
              , programs, or just want to say hello? Our friendly team is here to help!
            </p>
          </div>

          {/* ROW 1: 4 Info Cards - REDUCED HEIGHT */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            <div className="rounded-[1.5rem] bg-card/80 backdrop-blur-xl border border-border p-5 shadow-sm hover:-translate-y-1 transition hover:shadow-[var(--shadow-soft)]">
              <div className="h-10 w-10 rounded-full bg-[var(--sunshine)] flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-bold text-base mb-1">Visit Us</h2>
              <p className="text-sm text-muted-foreground leading-tight">
                Kidzee jeetshree School<br />
                Ratlam, Madhya Pradesh
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-card/80 backdrop-blur-xl border border-border p-5 shadow-sm hover:-translate-y-1 transition hover:shadow-[var(--shadow-soft)]">
              <div className="h-10 w-10 rounded-full bg-[var(--mint)] flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-bold text-base mb-1">Call Us</h2>
              <p className="text-sm text-muted-foreground flex flex-col gap-0.5 leading-tight">
                <a href="tel:+919589208322" className="hover:text-primary transition">+91 95892 08322</a>
                <a href="tel:+918305952666" className="hover:text-primary transition">+91 83059 52666</a>
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-card/80 backdrop-blur-xl border border-border p-5 shadow-sm hover:-translate-y-1 transition hover:shadow-[var(--shadow-soft)]">
              <div className="h-10 w-10 rounded-full bg-[var(--peach)] flex items-center justify-center mb-3">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-bold text-base mb-1">Email Us</h2>
              <p className="text-sm text-muted-foreground leading-tight">
                <a href="mailto:kidzee5789@kidzee.com" className="hover:text-primary transition break-all">kidzee5789@kidzee.com</a>
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-card/80 backdrop-blur-xl border border-border p-5 shadow-sm hover:-translate-y-1 transition hover:shadow-[var(--shadow-soft)]">
              <div className="h-10 w-10 rounded-full bg-[var(--sky)] flex items-center justify-center mb-3">
                <Clock className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-bold text-base mb-1">Office Hours</h2>
              <p className="text-sm text-muted-foreground leading-tight">
                Monday - Saturday<br />
                8:30 AM to 3:30 PM
              </p>
            </div>
          </div>

          {/* ROW 2: Form and Map */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Left Column: Message Box */}
            <div className="rounded-[2.5rem] bg-card/80 backdrop-blur-xl border border-border p-8 sm:p-10 shadow-[var(--shadow-soft)] flex flex-col justify-center">
              <h2 className="font-bold text-2xl mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" /> Send us a message
              </h2>
              <form onSubmit={handleSendMessage} className="space-y-5" aria-label="Contact form">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  aria-label="Your Name"
                  required
                  className="w-full rounded-2xl bg-background border border-border px-5 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  aria-label="Phone Number"
                  required
                  className="w-full rounded-2xl bg-background border border-border px-5 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm placeholder:text-muted-foreground/50"
                />
                <textarea 
                  name="message"
                  rows={5} 
                  placeholder="How can we help you?" 
                  aria-label="Your Message"
                  required
                  className="w-full rounded-2xl bg-background border border-border px-5 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition shadow-sm resize-none placeholder:text-muted-foreground/50"
                />
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] px-7 py-4 text-base font-bold text-white shadow-[var(--shadow-pop)] hover:scale-[1.02] transition disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  <a 
                    href="tel:+919589208322"
                    className="flex-1 flex items-center justify-center gap-2 rounded-full bg-card border-2 border-primary/20 px-7 py-4 text-base font-bold text-foreground hover:border-primary transition"
                  >
                    Call Now <PhoneCall className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </form>
            </div>

            {/* Right Column: Large Map */}
            <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-border shadow-[var(--shadow-soft)] bg-card p-2">
              <div className="absolute inset-0 m-2 rounded-[2rem] overflow-hidden bg-muted">
                <iframe
                  title="Kidzee jeetshree Ratlam Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117495.27581577457!2d74.9652518968968!3d23.340243407982278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963fd0b07ec3dd3%3A0x2db471b631d80336!2sRatlam%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-500"
                ></iframe>
              </div>
            </div>

          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-foreground text-center">Contact FAQs</h2>
            <div className="mt-6 space-y-3">
              {contactFaqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-card/80 backdrop-blur-xl border border-border p-5 open:shadow-[var(--shadow-soft)]">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-sm text-foreground list-none">
                    <span>{f.q}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-primary group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}