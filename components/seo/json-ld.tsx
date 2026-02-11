export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Hallam",
    url: "https://markhallam.com.au",
    jobTitle: "Solo Builder",
    sameAs: [
      "https://x.com/MarkHallam",
      "https://www.linkedin.com/in/mark-hallam/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  publishedAt,
  slug,
}: {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: "Mark Hallam",
      url: "https://markhallam.com.au",
    },
    publisher: {
      "@type": "Person",
      name: "Mark Hallam",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://markhallam.com.au/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
