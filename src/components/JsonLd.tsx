// Unified JSON-LD Knowledge Graph for SEO & GEO (Generative Engine Optimization)
// Injects Person, WorkExperience, Research, and WebSite entities into <head>

const SITE_URL = "https://aryankaushik.com";

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Aryan Kaushik",
      givenName: "Aryan",
      familyName: "Kaushik",
      alternateName: [
        "0xtimbur",
        "timburman",
        "Aryan Kaushik Protocol Engineer",
        "Aryan Kaushik Smart Contract Engineer",
        "Aryan Kaushik Python Developer",
      ],
      url: SITE_URL,
      email: ["mail.aryankaushik@gmail.com", "0xtimbur@gmail.com"],
      jobTitle: "Protocol Engineer & Python Systems Developer",
      description:
        "Aryan Kaushik is a Software Engineer specializing in EVM Blockchain Architecture, Smart Contract Security, Gas Optimization, and Python Systems. Currently Software Engineer Intern at IRC Engineering Services (I) Pvt Ltd.",
      worksFor: {
        "@type": "Organization",
        name: "IRC Engineering Services (I) Pvt Ltd",
        location: "Noida, U.P, India",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Vivekananda Institute of Professional Studies",
          location: "New Delhi, India",
        },
        {
          "@type": "EducationalOrganization",
          name: "Amity University",
          location: "Noida, India",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://linkedin.com/in/aryankaushik1",
        "https://github.com/timburman",
        "https://x.com/0xtimbur",
        "https://zenodo.org/records/20037058",
        SITE_URL,
      ],
      knowsAbout: [
        "Blockchain Architecture",
        "Ethereum Virtual Machine (EVM)",
        "Solidity",
        "Foundry",
        "Gas Optimization",
        "Python Systems",
        "FastAPI",
        "Data Automation",
        "Non-Destructive Testing (NDT) AI Workflows",
        "DAO Infrastructure",
        "ERC-20",
        "ERC-721",
        "ERC-1155",
        "React.js",
        "Next.js",
        "TypeScript",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Alchemy University Certified EVM Chain Developer",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "PCap (Python Certified)",
        },
      ],
      award: [
        "1st Prize Winner — Project Concave 2025 (DKP — Decentralised Knowledge Proof system)",
      ],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/#reactive-governance-paper`,
      headline:
        "Reactive Governance: A Selective Snapshotting Framework for Secure and Gas-Efficient DAO Voting",
      author: { "@id": `${SITE_URL}/#person` },
      datePublished: "2026",
      sameAs: "https://zenodo.org/records/20037058",
      publisher: {
        "@type": "Organization",
        name: "Zenodo",
      },
      description:
        "Research paper introducing a novel selective snapshotting framework for DAO voting that reduces gas costs by up to 40% (~17,715 gas marginal cost).",
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/#ieee-paper`,
      headline:
        "Plant Disease Recognition: Integrating Deep Learning for Accurate Diagnosis and Sustainable Agriculture",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: {
        "@type": "Organization",
        name: "IEEE",
      },
      description:
        "IEEE conference publication co-authored on deep learning architectures for automated agricultural disease diagnosis.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Aryan Kaushik — Protocol Engineer & Python Systems Developer",
      description:
        "Official portfolio and research repository of Aryan Kaushik, Protocol Engineer and Python Systems Developer.",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Aryan Kaushik — Official Portfolio",
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: `${SITE_URL}/og-image.png`,
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
