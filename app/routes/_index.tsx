import type { MetaFunction } from "@remix-run/cloudflare";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Trombley | Data Scientist & Tech Consultant" },
    {
      name: "description",
      content:
        "The digital profile of Matt Trombley, showcasing personal projects, work experience, and the best Clemson has to offer.",
    },
  ];
};

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

const workHistory = [
  {
    company: "Shopify",
    link: "https://shopify.com",
    logo: "/shopify-logo.svg",
    roles: [
      {
        title: "Senior Data Scientist",
        years: "2023 - Present",
      },
    ],
  },
  {
    company: "8 Bits Wiser",
    link: "https://8bitswiser.com",
    logo: "/8-bits-wiser-logo.svg",
    roles: [
      {
        title: "Founder & Lead Consultant",
        years: "2022 - Present",
      },
    ],
  },
  {
    company: "Fidelity Investments",
    link: "https://www.fidelity.com",
    logo: "/fidelity-investments-logo.svg",
    roles: [
      {
        title: "Principal Data Scientist",
        years: "2021 - 2023",
      },
      {
        title: "Senior Data Scientist",
        years: "2021 - 2021",
      },
      {
        title: "Data Scientist",
        years: "2019 - 2020",
      },
    ],
  },
];

export default function Index() {
  return (
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

        {/* Work History Section */}
        <div className="mb-12">
          <div
            className="space-y-6 bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all
                         transform hover:-translate-y-1 cursor-default"
          >
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Work Experience
            </h2>
            {workHistory.map((job, index) => (
              <div key={index}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-emerald-400 text-left">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-emerald-300 transition-colors"
                    >
                      {job.company}
                    </a>
                  </h3>
                  <a href={job.link} target="_blank" rel="noopener">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                </div>
                <div className="space-y-1">
                  {job.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className="grid grid-cols-[auto_1fr_auto] items-center gap-2"
                    >
                      <span className="text-gray-300">{role.title}</span>
                      <span className="h-[1px] w-full bg-gray-600"></span>
                      <span className="text-gray-400 text-sm whitespace-nowrap">
                        {role.years}
                      </span>
                    </div>
                  ))}
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
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/iamdatamatt"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://x.com/iamdatamatt"
            target="_blank"
            rel="noopener"
            aria-label="X (Twitter)"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:mattrtrombley@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <hr className="border-gray-700 my-12" />

        <footer className="text-sm text-gray-500 mb-8">
          © {new Date().getFullYear()} Matt Trombley. All rights reserved.
        </footer>
      </main>

      {/* Add styles for profile picture border */}
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
  );
}
