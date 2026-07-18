import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Camera, Heart } from "lucide-react";
import { absoluteUrl, breadcrumbSchema, webPageSchema, SITE_URL } from "@/lib/seo-config";
import img2666 from "@/assets/IMG_2666.jpe?url";
import img2666Webp from "@/assets/IMG_2666.webp?url";
import img2666Thumb from "@/assets/IMG_2666-thumb.jpg?url";
import img2666ThumbWebp from "@/assets/IMG_2666-thumb.webp?url";
import img2667 from "@/assets/IMG_2667.jpe?url";
import img2667Webp from "@/assets/IMG_2667.webp?url";
import img2667Thumb from "@/assets/IMG_2667-thumb.jpg?url";
import img2667ThumbWebp from "@/assets/IMG_2667-thumb.webp?url";
import img2668 from "@/assets/IMG_2668.jpe?url";
import img2668Webp from "@/assets/IMG_2668.webp?url";
import img2668Thumb from "@/assets/IMG_2668-thumb.jpg?url";
import img2668ThumbWebp from "@/assets/IMG_2668-thumb.webp?url";
import img2673 from "@/assets/IMG_2673.jpe?url";
import img2673Webp from "@/assets/IMG_2673.webp?url";
import img2673Thumb from "@/assets/IMG_2673-thumb.jpg?url";
import img2673ThumbWebp from "@/assets/IMG_2673-thumb.webp?url";
import img2678 from "@/assets/IMG_2678.jpe?url";
import img2678Webp from "@/assets/IMG_2678.webp?url";
import img2678Thumb from "@/assets/IMG_2678-thumb.jpg?url";
import img2678ThumbWebp from "@/assets/IMG_2678-thumb.webp?url";
import img2682 from "@/assets/IMG_2682.jpe?url";
import img2682Webp from "@/assets/IMG_2682.webp?url";
import img2682Thumb from "@/assets/IMG_2682-thumb.jpg?url";
import img2682ThumbWebp from "@/assets/IMG_2682-thumb.webp?url";
import img8016 from "@/assets/IMG_8016.jpe?url";
import img8016Webp from "@/assets/IMG_8016.webp?url";
import img8016Thumb from "@/assets/IMG_8016-thumb.jpg?url";
import img8016ThumbWebp from "@/assets/IMG_8016-thumb.webp?url";
import img8021 from "@/assets/IMG_E8021.jpe?url";
import img8021Webp from "@/assets/IMG_E8021.webp?url";
import img8021Thumb from "@/assets/IMG_E8021-thumb.jpg?url";
import img8021ThumbWebp from "@/assets/IMG_E8021-thumb.webp?url";
import img8025 from "@/assets/IMG_8025.jpe?url";
import img8025Webp from "@/assets/IMG_8025.webp?url";
import img8025Thumb from "@/assets/IMG_8025-thumb.jpg?url";
import img8025ThumbWebp from "@/assets/IMG_8025-thumb.webp?url";
import img8038 from "@/assets/IMG_8038.jpe?url";
import img8038Webp from "@/assets/IMG_8038.webp?url";
import img8038Thumb from "@/assets/IMG_8038-thumb.jpg?url";
import img8038ThumbWebp from "@/assets/IMG_8038-thumb.webp?url";
import img8039 from "@/assets/IMG_8039.jpe?url";
import img8039Webp from "@/assets/IMG_8039.webp?url";
import img8039Thumb from "@/assets/IMG_8039-thumb.jpg?url";
import img8039ThumbWebp from "@/assets/IMG_8039-thumb.webp?url";
import img8042 from "@/assets/IMG_8042.jpe?url";
import img8042Webp from "@/assets/IMG_8042.webp?url";
import img8042Thumb from "@/assets/IMG_8042-thumb.jpg?url";
import img8042ThumbWebp from "@/assets/IMG_8042-thumb.webp?url";
import campus from "@/assets/campus.jpg";
import campusWebp from "@/assets/campus.webp";
import activities from "@/assets/activities.jpg";
import activitiesWebp from "@/assets/activities.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Kidzee jeetshree, Ratlam" },
      {
        name: "description",
        content:
          "Browse photos of classrooms, activities and campus life at Kidzee jeetshree preschool, Ratlam — a glimpse into our children's happy everyday moments.",
      },
      {
        name: "keywords",
        content:
          "Kidzee jeetshree photo gallery, preschool campus photos Ratlam, playgroup activities photos, nursery classroom photos Ratlam, Kidzee Ratlam campus tour photos",
      },
      { property: "og:title", content: "Photo Gallery | Kidzee jeetshree, Ratlam" },
      {
        property: "og:description",
        content: "A glimpse into everyday learning and play at Kidzee jeetshree preschool, Ratlam.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/gallery") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Photo Gallery | Kidzee jeetshree, Ratlam" },
      { name: "twitter:description", content: "Classrooms, activities and campus life at Kidzee jeetshree, Ratlam." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          webPageSchema({
            path: "/gallery",
            name: "Photo Gallery | Kidzee jeetshree, Ratlam",
            description:
              "Browse photos of classrooms, activities and campus life at Kidzee jeetshree preschool, Ratlam — a glimpse into our children's happy everyday moments.",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "@id": `${absoluteUrl("/gallery")}#imagegallery`,
          name: "Kidzee jeetshree, Ratlam — Photo Gallery",
          about: { "@id": `${SITE_URL}/#organization` },
          isPartOf: { "@id": `${absoluteUrl("/gallery")}#webpage` },
        }),
      },
    ],
  }),
  component: GalleryPage,
});

const tapeColors = [
  "bg-[var(--bubblegum)]",
  "bg-[var(--sky)]",
  "bg-[var(--sunshine)]",
  "bg-green-400",
  "bg-purple-400",
] as const;

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"] as const;

const galleryItems = [
  { src: img2666, webp: img2666Webp, thumb: img2666Thumb, thumbWebp: img2666ThumbWebp, title: "Joyful Learning", width: 1200, height: 1600 },
  { src: img2667, webp: img2667Webp, thumb: img2667Thumb, thumbWebp: img2667ThumbWebp, title: "Little Explorers", width: 1200, height: 1600 },
  { src: img2668, webp: img2668Webp, thumb: img2668Thumb, thumbWebp: img2668ThumbWebp, title: "Classroom Moments", width: 1200, height: 1600 },
  { src: img2673, webp: img2673Webp, thumb: img2673Thumb, thumbWebp: img2673ThumbWebp, title: "Creative Play", width: 1600, height: 1200 },
  { src: img8021, webp: img8021Webp, thumb: img8021Thumb, thumbWebp: img8021ThumbWebp, title: "Happy Faces", width: 900, height: 1600 },
  { src: img2678, webp: img2678Webp, thumb: img2678Thumb, thumbWebp: img2678ThumbWebp, title: "Together We Grow", width: 1600, height: 1200 },
  { src: img2682, webp: img2682Webp, thumb: img2682Thumb, thumbWebp: img2682ThumbWebp, title: "School Smiles", width: 1600, height: 1200 },
  { src: img8016, webp: img8016Webp, thumb: img8016Thumb, thumbWebp: img8016ThumbWebp, title: "Activity Time", width: 1600, height: 900 },
  { src: img8021, webp: img8021Webp, thumb: img8021Thumb, thumbWebp: img8021ThumbWebp, title: "Fun & Learning", width: 900, height: 1600 },
  { src: img8025, webp: img8025Webp, thumb: img8025Thumb, thumbWebp: img8025ThumbWebp, title: "Playful Day", width: 1600, height: 900 },
  { src: img8038, webp: img8038Webp, thumb: img8038Thumb, thumbWebp: img8038ThumbWebp, title: "Campus Life", width: 1600, height: 1200 },
  { src: img8039, webp: img8039Webp, thumb: img8039Thumb, thumbWebp: img8039ThumbWebp, title: "Bright Beginnings", width: 1600, height: 1200 },
  { src: img8042, webp: img8042Webp, thumb: img8042Thumb, thumbWebp: img8042ThumbWebp, title: "Everyday Magic", width: 1600, height: 1200 },
  { src: campus, webp: campusWebp, thumb: campus, thumbWebp: campusWebp, thumbWidth: 1000, title: "Our Campus", width: 1000, height: 451 },
  { src: activities, webp: activitiesWebp, thumb: activities, thumbWebp: activitiesWebp, thumbWidth: 551, title: "Campus Activities", width: 551, height: 515 },
].map((item, idx) => ({
  ...item,
  thumbWidth: item.thumbWidth ?? 640,
  ...item,
  rotation: rotations[idx % rotations.length],
  tapeColor: tapeColors[idx % tapeColors.length],
}));

function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[url('/assets/paper-texture.png')] bg-[#fdfbf7]">
      <SiteHeader />

      <main className="relative py-12 sm:py-16 px-5 sm:px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full blur-[100px] bg-[var(--sky)] opacity-40 animate-pulse" />
          <div
            className="absolute bottom-20 right-16 h-72 w-72 rounded-full blur-[100px] bg-[var(--sunshine)] opacity-30 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Gallery</span>
          </nav>
          <div className="text-center mb-24 max-w-2xl mx-auto relative">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[var(--bubblegum)] animate-bounce" fill="currentColor" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Scrapbook</p>
              <Heart
                className="w-5 h-5 text-[var(--bubblegum)] animate-bounce"
                style={{ animationDelay: "0.2s" }}
                fill="currentColor"
              />
            </div>
            <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-foreground tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--bubblegum)] to-[var(--sky)]">
                Memories
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed max-w-lg mx-auto">
              A beautiful collection of giggles, finger-painting, and magical everyday moments from our preschool
              campus, classrooms and playgroup activities in Ratlam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className={`group relative bg-white p-4 pb-16 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:z-10 ${item.rotation} hover:rotate-0`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 ${item.tapeColor} opacity-80 rotate-[-3deg] shadow-sm z-20 backdrop-blur-sm`}
                  style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 5% 95%)" }}
                />

                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="relative w-full aspect-square overflow-hidden bg-muted rounded-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`View ${item.title}`}
                >
                  <picture className="block w-full h-full">
                    <source
                      type="image/webp"
                      srcSet={`${item.thumbWebp} ${item.thumbWidth}w, ${item.webp} ${item.width}w`}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                    />
                    <img
                      src={item.thumb}
                      srcSet={`${item.thumb} ${item.thumbWidth}w, ${item.src} ${item.width}w`}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      alt={`${item.title} — Kidzee jeetshree preschool, Ratlam`}
                      title={`${item.title} — Kidzee jeetshree preschool, Ratlam`}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <Camera className="text-[var(--sky)] w-8 h-8" />
                    </div>
                  </div>
                </button>

                <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                  <p className="font-display text-2xl text-slate-700 font-medium tracking-wide">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-5xl w-[95vw] border-none bg-black/95 p-3 sm:p-6 shadow-2xl [&>button]:text-white [&>button]:hover:text-white/80">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.title}</DialogTitle>
              <picture>
                <source type="image/webp" srcSet={selected.webp} />
                <img
                  src={selected.src}
                  alt={`${selected.title} — Kidzee jeetshree preschool, Ratlam`}
                  title={`${selected.title} — Kidzee jeetshree preschool, Ratlam`}
                  width={selected.width}
                  height={selected.height}
                  decoding="async"
                  className="mx-auto w-full max-h-[80vh] object-contain rounded-sm"
                />
              </picture>
              <p className="mt-4 text-center font-display text-xl text-white">{selected.title}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
