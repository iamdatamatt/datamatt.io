export const defaultSchemaMarkup = [
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
    logo: "https://8bitswiser.com/8bitswiser.svg",
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
