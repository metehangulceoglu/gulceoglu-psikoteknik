const BASE_URL = "https://gulceoglupsikoteknik.com";

export function createMedicalOrganization(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "LocalBusiness"],
    name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi",
    url: BASE_URL,
    medicalSpecialty: "Psychology",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kamil Tunca Caddesi No:200/B",
      addressLocality: "Bornova",
      addressRegion: "İzmir",
      postalCode: "35040",
      addressCountry: "TR",
    },
  };
}

export function createLocalBusiness(params: {
  name: string;
  url: string;
  address: string;
  neighborhood: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: params.name,
    url: params.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: params.address,
      addressLocality: params.neighborhood,
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
  };
}

export function createFAQPage(
  items: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createHowTo(params: {
  name: string;
  steps: string[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    step: params.steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };
}

export function createPerson(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Psk. Metehan Gülceoğlu",
    jobTitle: "Psikolog",
    description:
      "Trafik psikolojisi ve psikoteknik değerlendirme uzmanı",
    url: "https://gulceoglupsikoteknik.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dokuz Eylül Üniversitesi",
    },
    worksFor: {
      "@type": "Organization",
      name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi",
    },
  };
}

export function createArticle(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: params.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi",
      url: "https://gulceoglupsikoteknik.com",
    },
  };
}

export function createBreadcrumb(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
