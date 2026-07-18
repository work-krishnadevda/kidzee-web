/**
 * Central site/SEO constants.
 *
 * IMPORTANT: SITE_URL is a placeholder. Replace it with the actual production
 * domain the site is deployed on before going live, so that canonical URLs,
 * Open Graph tags, JSON-LD, robots.txt and sitemap.xml all point to the right
 * place. Search Console verification and rich-result eligibility depend on
 * this being correct.
 */
import logoAsset from "@/assets/logo.png";

export const SITE_URL = "https://www.kidzeejeetshreeratlam.com";

export const SITE_NAME = "Kidzee jeetshree, Ratlam";

export const NAP = {
  legalName: "Kidzee jeetshree",
  streetAddress: "30, Siddhi Vinayak Colony, Near Deendayal Nagar",
  addressLocality: "Ratlam",
  addressRegion: "Madhya Pradesh",
  postalCode: "457001",
  addressCountry: "IN",
  fullAddress: "30, Siddhi Vinayak Colony, Near Deendayal Nagar, Ratlam, Madhya Pradesh 457001",
  // Approximate coordinates for Ratlam, MP (matches the existing Google Maps embed on /contact).
  // Update with the exact pin for the campus if/when available.
  latitude: 23.340243,
  longitude: 74.965252,
  phones: ["+91 95892 08322", "+91 83059 52666", "+91 77238 88303"],
  email: "kidzee5789@kidzee.com",
  openingHours: "Mo-Sa 09:00-14:00",
} as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL + "/";
  return SITE_URL + path;
}

/**
 * Program/service catalogue shared between the homepage, admissions page and
 * structured data (Service/Course offers). One source of truth avoids the
 * age ranges or names drifting out of sync between the UI and the JSON-LD
 * that describes the same offerings.
 */
export const PROGRAMS = [
  {
    name: "Playgroup",
    ageRange: "1.5 – 2.5 yrs",
    description:
      "A gentle, play-based introduction to school life for toddlers — sensory play, rhymes and first friendships in a warm, home-like playgroup classroom.",
  },
  {
    name: "Nursery",
    ageRange: "2.5 – 3.5 yrs",
    description:
      "Our nursery school programme builds early language, motor skills and social confidence through storytelling, music and hands-on activities.",
  },
  {
    name: "Jr. KG",
    ageRange: "3.5 – 4.5 yrs",
    description:
      "Junior KG (Junior Kindergarten) blends phonics, numeracy and creative play to prepare children for structured, school-ready learning.",
  },
  {
    name: "Sr. KG",
    ageRange: "4.5 – 5.5 yrs",
    description:
      "Senior KG (Senior Kindergarten) strengthens reading, writing and reasoning skills, giving children a confident, joyful head start before Grade 1.",
  },
] as const;

/** Reusable Organization / Preschool JSON-LD, shared by multiple pages. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Kidzee Jeetshree Ratlam", "Kidzee Ratlam", "Kidzee Preschool Ratlam"],
    url: SITE_URL,
    logo: `${SITE_URL}${logoAsset}`,
    image: `${SITE_URL}${logoAsset}`,
    slogan: "Where Little Minds Bloom with Joy & Wonder",
    description:
      "Kidzee jeetshree is a preschool and play school in Ratlam, Madhya Pradesh offering Playgroup, Nursery, Jr. KG and Sr. KG admissions with the Kidzee Pentemind curriculum, a safe CCTV-monitored campus and trained early-childhood teachers.",
    telephone: NAP.phones[0],
    email: NAP.email,
    priceRange: "₹₹",
    knowsAbout: [
      "Early Childhood Education",
      "Preschool Curriculum",
      "Kidzee Pentemind Curriculum",
      "Playgroup Learning",
      "Nursery Education",
      "Kindergarten Preparation",
      "Child Development",
      "School Readiness",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${NAP.latitude},${NAP.longitude}`,
    areaServed: [
      { "@type": "City", name: "Ratlam" },
      { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: NAP.phones[0],
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    // NOTE: an AggregateRating block was deliberately NOT added here. Google's
    // structured-data policies require rating/review counts to come from real,
    // verifiable reviews (e.g. synced from Google Business Profile) — this
    // codebase has no such data source, and fabricating a reviewCount risks a
    // manual spam action against the whole site. Wire this up for real once a
    // reviews platform (Google Business Profile API, etc.) is connected — see
    // SEO_CHANGES_REPORT.md.
    makesOffer: PROGRAMS.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: `${p.name} Admission`,
        description: p.description,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
    sameAs: ["https://www.instagram.com/kidzee.jeetshree/"],
  };
}

/** FAQPage JSON-LD helper. `mainEntityOfPage` links it to that page's WebPage node. */
export function faqSchema(path: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** WebSite JSON-LD (helps Google understand the site entity as a whole). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

/** BreadcrumbList JSON-LD helper. Pass path segments with labels, e.g. [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }] */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const currentPath = items[items.length - 1]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(currentPath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * WebPage JSON-LD helper. Ties a specific page to the sitewide Organization and
 * WebSite entities (by @id) and to that page's own BreadcrumbList (by @id), so
 * Google can resolve one consistent entity graph instead of several disconnected
 * schema blocks repeating the same facts.
 */
export function webPageSchema(opts: { path: string; name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: { "@id": `${absoluteUrl(opts.path)}#breadcrumb` },
  };
}
