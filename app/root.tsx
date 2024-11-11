import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  useLocation,
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

const profileLinks = [
  {
    title: "Lists Of Things To Do In Clemson, SC",
    description:
      "All things Clemson - the official bucket list, on-campus disc golf courses, and more.",
    link: "/clemson",
  },
  {
    title: "8 Bits Wiser - Tech & Data Consulting",
    description: "I help small businesses and startups with their tech needs.",
    link: "https://8bitswiser.com",
  },
  {
    title: "Current Resume",
    description: "A link to my current resume in PDF format.",
    link: "https://cdn.datamatt.io/Matthew_Trombley_Resume.pdf",
  },
];

const defaultSchemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://datamatt.io/#person",
    name: "Matt Trombley",
    givenName: "Matt",
    familyName: "Trombley",
    alternateName: ["Matthew Trombley"],
    jobTitle: "Senior Data Scientist",
    image: "https://datamatt.io/matt-trombley-profile-pic.webp",
    url: ["https://datamatt.io", "https://8bitswiser.com"],
    sameAs: [
      "https://www.linkedin.com/in/iamdatamatt/",
      "https://github.com/iamdatamatt",
      "https://x.com/iamdatamatt",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Shopify",
      url: "https://www.shopify.com",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Clemson University",
        url: "https://www.clemson.edu",
      },
      {
        "@type": "EducationalOrganization",
        name: "North Carolina State University",
        url: "https://www.ncsu.edu",
      },
    ],
    description:
      "Senior Data Scientist at Shopify, specializing in data analysis, machine learning, and technical consulting.",
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Python",
      "SQL",
      "Statistical Analysis",
      "Technical Consulting",
      "Website Development",
      "Search Engine Optimization",
      "Email Deliverability",
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://datamatt.io/#website",
    url: "https://datamatt.io",
    name: "Matt Trombley | Data Scientist & Tech Consultant",
    description:
      "The digital profile of Matt Trombley, showcasing personal projects, work experience, and the best Clemson has to offer.",
    publisher: {
      "@id": "https://datamatt.io/#person",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://8bitswiser.com/#website",
    url: "https://8bitswiser.com",
    name: "8 Bits Wiser",
    description:
      "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization.",
    publisher: {
      "@id": "https://datamatt.io/#person",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://8bitswiser.com/#organization",
    name: "8 Bits Wiser",
    url: "https://8bitswiser.com",
    logo: "https://8bitswiser.com/8-bits-wiser.svg",
    founder: {
      "@id": "https://datamatt.io/#person",
    },
    sameAs: [
      "https://www.linkedin.com/in/iamdatamatt/",
      "https://github.com/iamdatamatt",
      "https://x.com/iamdatamatt",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@8bitswiser.com",
    },
  },
];

export default function App() {
  const location = useLocation();
  const canonical = `https://datamatt.io${location.pathname}`;

  return (
    <html lang="en" className="min-h-screen bg-[#0a0a0a]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <meta name="author" content="Matt Trombley" />
        <meta name="apple-mobile-web-app-title" content="Matt Trombley" />
        <link rel="canonical" href={canonical} />
        <Links />
        {defaultSchemaMarkup.map((markup, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(markup) }}
          />
        ))}
      </head>
      <body className="min-h-screen text-gray-300">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <noscript>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-gray-100 p-4 text-center">
            This website requires JavaScript to function. Please enable
            JavaScript in your browser settings to continue.
          </div>
        </noscript>
      </body>
    </html>
  );
}
