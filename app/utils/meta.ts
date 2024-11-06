interface MetaOptions {
  metaTitle: string;
  metaDescription: string;
  imageUrl: string;
  imageAlt: string;
  pathname: string;
}

export function generateMeta({
  metaTitle,
  metaDescription,
  imageUrl,
  imageAlt,
  pathname,
}: MetaOptions) {
  const canonical = `https://datamatt.io${pathname}`;

  return [
    { title: metaTitle },
    { name: "description", content: metaDescription },
    {
      property: "og:url",
      content: canonical,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "og:image",
      content: imageUrl,
    },
    {
      property: "og:image:alt",
      content: imageAlt,
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:site_name",
      content: "Matt Trombley",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: "@iamdatamatt",
    },
    {
      name: "twitter:url",
      content: canonical,
    },
    {
      name: "twitter:title",
      content: metaTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
    {
      name: "twitter:image",
      content: imageUrl,
    },
    {
      name: "twitter:image:alt",
      content: imageAlt,
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        headline: metaTitle,
        description: metaDescription,
        image: imageUrl,
        author: {
          "@type": "Person",
          name: "Matt Trombley",
          url: "https://datamatt.io/",
        },
        datePublished: "2017-05-31",
        dateModified: new Date().toISOString().split("T")[0],
      },
    },
  ];
}
