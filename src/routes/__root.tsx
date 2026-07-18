import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, lazy, Suspense, type ReactNode } from "react";
import logo from "@/assets/logo.png";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL, SITE_NAME, organizationSchema, websiteSchema } from "../lib/seo-config";

// Sonner's Toaster is only needed after a form submission (Contact/Admissions/Book Tour).
// Lazy-loading it keeps its ~12KB (gzipped) out of the critical path for every page,
// including pages like Home/Gallery that never trigger a toast.
const Toaster = lazy(() =>
  import("@/components/ui/sonner").then((m) => ({ default: m.Toaster }))
);

// Deferred until the window 'load' event so this never competes with critical
// rendering/hydration work — PageView is still tracked, just a beat later.
const facebookPixelScript = `
window.addEventListener('load', function () {
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
window.fbq('init', '3621324748024371');
window.fbq('track', 'PageView');
});
`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kidzee jeetshree preschool" },
      { property: "og:title", content: "Kidzee jeetshree preschool" },
      { name: "twitter:title", content: "Kidzee jeetshree preschool" },
      { name: "description", content: "Encouraging every child to learn with an open mind at Kidzee jeetshree School, Ratlam. A warm, magical world built around your little one." },
      { property: "og:description", content: "Encouraging every child to learn with an open mind at Kidzee jeetshree School, Ratlam. A warm, magical world built around your little one." },
      { name: "twitter:description", content: "Encouraging every child to learn with an open mind at Kidzee jeetshree School, Ratlam. A warm, magical world built around your little one." },
      {
        name: "keywords",
        content:
          "Kidzee jeetshree Ratlam, best preschool in Ratlam, best play school in Ratlam, preschool in Ratlam, nursery school Ratlam, kindergarten school Ratlam, playgroup Ratlam, Jr KG Sr KG Ratlam, preschool admissions Ratlam, daycare Ratlam, play school near me, early childhood education Ratlam, Pentemind curriculum, preschool Madhya Pradesh",
      },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a711774e-f036-486d-b25b-411dbe951e12" },
      { property: "og:image:alt", content: "Kidzee jeetshree preschool, Ratlam" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a711774e-f036-486d-b25b-411dbe951e12" },
      { name: "twitter:image:alt", content: "Kidzee jeetshree preschool, Ratlam" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#ffffff" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "geo.region", content: "IN-MP" },
      { name: "geo.placename", content: "Ratlam" },
      { name: "geo.position", content: "23.340243;74.965252" },
      { name: "ICBM", content: "23.340243, 74.965252" },
    ],
    links: [
      { rel: "icon", href: logo, sizes: "any" },
      { rel: "icon", href: logo, type: "image/png" },
      { rel: "apple-touch-icon", href: logo },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        id: "facebook-pixel",
        children: facebookPixelScript,
      },
      {
        id: "ld-organization",
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
      {
        id: "ld-website",
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Suspense fallback={null}>
        <Toaster richColors position="top-center" />
      </Suspense>
    </>
  );
}
