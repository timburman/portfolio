// JSON-LD structured data for SEO
// Injects Person + WebSite schema into <head> via Next.js <script> tag

const SITE_URL = "https://aryankaushik.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Aryan Kaushik",
  givenName: "Aryan",
  familyName: "Kaushik",
  url: SITE_URL,
  email: "mail.aryankaushik@gmail.com",
  jobTitle: "Smart Contract Engineer",
  description:
    "Smart Contract Engineer specializing in EVM blockchain architecture, Solidity, Foundry, and Python data systems. Building production-grade DeFi infrastructure.",
  worksFor: {
    "@type": "Organization",
    name: "Prolific Technologies",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/aryankaushik1",
    "https://github.com/timburman",
  ],
  knowsAbout: [
    "Solidity",
    "Foundry",
    "Hardhat",
    "Ethereum Virtual Machine",
    "Smart Contract Security",
    "Gas Optimization",
    "DeFi",
    "OpenZeppelin",
    "Python",
    "TypeScript",
    "Blockchain Architecture",
    "Web3",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Aryan Kaushik — Smart Contract Engineer",
  description:
    "Portfolio of Aryan Kaushik, Smart Contract Engineer specializing in EVM, Solidity, Foundry, and Python data systems.",
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Aryan Kaushik — Smart Contract Engineer Portfolio",
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
