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
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { defaultSchemaMarkup } from "./constants/defaultSchema";

import "./tailwind.css";

type StructuredData = {
  "@context": string;
  "@type": string;
  [key: string]: any;
};

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

export function ErrorBoundary() {
  const error = useRouteError();

  // When true, this is what we want - a 404 error
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex" />
          <Meta />
          <Links />
          <title>Page Not Found</title>
        </head>
        <body>
          <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-900 text-gray-100">
            <main className="max-w-3xl w-full text-center">
              {/* Header */}
              <div className="flex justify-between items-center w-full mb-12">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-gray-700 animate-spin"></div>
                  <img
                    src="/matt-trombley-profile-pic.webp"
                    alt="Matt Trombley"
                    className="relative w-24 h-24 rounded-full object-cover 
                       p-[3px] bg-gray-900
                       transition-transform hover:scale-105"
                  />
                </div>
                <h1 className="text-3xl font-bold">Matt Trombley</h1>
              </div>

              {/* 404 Message */}
              <div className="mb-12">
                <div
                  className="space-y-6 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all
                         transform hover:-translate-y-1 cursor-default"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-left">
                    Page Not Found
                  </h2>
                  <div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-[auto_1fr_auto] text-left gap-2">
                        <span className="text-gray-300">
                          The page you're looking for doesn't exist. You might
                          find what you're looking for in the links below.
                          Otherwise, you can{" "}
                          <a
                            href="/"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            click here
                          </a>{" "}
                          to return home.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links Section */}
              <div className="mb-12">
                <div
                  className="space-y-6 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all
                         transform hover:-translate-y-1 cursor-default"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-left">
                    Links
                  </h2>
                  {profileLinks.map((profileLink, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-[1fr_auto] items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-emerald-400 text-left">
                          <a
                            href={profileLink.link}
                            target="_blank"
                            rel="noopener"
                            className="hover:text-emerald-300 transition-colors"
                          >
                            {profileLink.title}
                          </a>
                        </h3>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-[auto_1fr_auto] text-left gap-2">
                          <span className="text-gray-300">
                            {profileLink.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-8 mb-12">
                <a
                  href="https://www.linkedin.com/in/iamdatamatt/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <IconBrandLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/iamdatamatt"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <IconBrandGithub size={24} />
                </a>
                <a
                  href="https://x.com/iamdatamatt"
                  target="_blank"
                  rel="noopener"
                  aria-label="X (Twitter)"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <IconBrandX size={24} />
                </a>
                <a
                  href="mailto:mattrtrombley@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <IconMail size={24} />
                </a>
              </div>

              <hr className="border-gray-700 my-12" />

              <footer className="text-sm text-gray-500 mb-8">
                © Matt Trombley. All rights reserved.
              </footer>
            </main>

            {/* Add styles for wave animation */}
            <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 3s linear infinite;
        }
      `}</style>
          </div>
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

  // For other errors, show a generic error page
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <body>
        <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-900 text-gray-100">
          <main className="max-w-3xl w-full text-center">
            {/* Header */}
            <div className="flex justify-between items-center w-full mb-12">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-gray-700 animate-spin"></div>
                <img
                  src="/matt-trombley-profile-pic.webp"
                  alt="Matt Trombley"
                  className="relative w-24 h-24 rounded-full object-cover 
                       p-[3px] bg-gray-900
                       transition-transform hover:scale-105"
                />
              </div>
              <h1 className="text-3xl font-bold">Matt Trombley</h1>
            </div>

            {/* 404 Message */}
            <div className="mb-12">
              <div
                className="space-y-6 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all
                         transform hover:-translate-y-1 cursor-default"
              >
                <h2 className="text-2xl font-semibold mb-6 text-left">
                  Oops! Something went wrong
                </h2>
                <div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-[auto_1fr_auto] text-left gap-2">
                      <span className="text-gray-300">
                        An error occured. In the meantime, you might find what
                        you're looking for in the links below. Otherwise, you
                        can{" "}
                        <a
                          href="/"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          click here
                        </a>{" "}
                        to return home.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="mb-12">
              <div
                className="space-y-6 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all
                         transform hover:-translate-y-1 cursor-default"
              >
                <h2 className="text-2xl font-semibold mb-6 text-left">Links</h2>
                {profileLinks.map((profileLink, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-emerald-400 text-left">
                        <a
                          href={profileLink.link}
                          target="_blank"
                          rel="noopener"
                          className="hover:text-emerald-300 transition-colors"
                        >
                          {profileLink.title}
                        </a>
                      </h3>
                    </div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-[auto_1fr_auto] text-left gap-2">
                        <span className="text-gray-300">
                          {profileLink.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mb-12">
              <a
                href="https://www.linkedin.com/in/iamdatamatt/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href="https://github.com/iamdatamatt"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <IconBrandGithub size={24} />
              </a>
              <a
                href="https://x.com/iamdatamatt"
                target="_blank"
                rel="noopener"
                aria-label="X (Twitter)"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <IconBrandX size={24} />
              </a>
              <a
                href="mailto:mattrtrombley@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <IconMail size={24} />
              </a>
            </div>

            <hr className="border-gray-700 my-12" />

            <footer className="text-sm text-gray-500 mb-8">
              © Matt Trombley. All rights reserved.
            </footer>
          </main>

          {/* Add styles for wave animation */}
          <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 3s linear infinite;
        }
      `}</style>
        </div>
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
