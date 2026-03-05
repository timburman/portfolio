export const personalInfo = {
  name: "Aryan Kaushik",
  title: "Smart Contract Engineer",
  subtitle: "Backend & Data Systems",
  email: "mail.aryankaushik@gmail.com",
  phone: "+91 79826 56751",
  location: "New Delhi, India",
  linkedin: "https://linkedin.com/in/aryankaushik1",
  github: "https://github.com/timburman",
  website: "#",
  summary:
    "Software Engineer with specialized focus on Blockchain Architecture and Data Infrastructure. Experienced in building production-grade Smart Contracts using Foundry and developing Python-based automation systems for data analysis. Passionate about bridging the gap between on-chain logic and off-chain data processing to build robust decentralized applications.",
};

export const currentlyBuilding = [
  "⚡ EVM Portfolio Intelligence Engine — True P&L Reports",
  "🔐 Reactive Governance Protocol — 40% gas reduction",
  "🛠️ Foundry test suites for complex DAO scenarios",
  "📊 Wallet Health Score system — on-chain analytics",
];

export const skills = {
  "Blockchain Engineering": [
    "Solidity",
    "Foundry",
    "Hardhat",
    "OpenZeppelin",
    "ERC Standards",
    "Gas Optimization",
    "Web3.py",
  ],
  "Backend & Data": [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Pandas",
    "Data Pipelines",
    "SQL",
    "REST APIs",
  ],
  "Dev Tools": [
    "React.js",
    "Next.js",
    "TypeScript",
    "Git",
    "Docker",
    "Linux",
    "Postman",
    "Wagmi",
  ],
};

export const skillLevels: Record<string, number> = {
  Solidity: 90,
  Foundry: 88,
  Python: 85,
  FastAPI: 80,
  PostgreSQL: 78,
  "React.js": 75,
  "Next.js": 72,
  TypeScript: 70,
  Docker: 68,
  Hardhat: 82,
};

export const experience = [
  {
    company: "Prolific Technologies",
    role: "Software Engineering Intern — Python Automation",
    period: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Developed Python automation scripts to execute trading logic based on pre-defined statistical parameters, reducing manual intervention and error rates.",
      "Built robust data pipelines to ingest and process real-time market data — similar architecture to blockchain indexers and keeper bots.",
      "Implemented comprehensive logging and error-handling for 24/7 uptime on automated tasks.",
    ],
    tags: ["Python", "Data Pipelines", "Automation", "Trading Logic"],
  },
  {
    company: "JK Tyre",
    role: "Data Science Intern",
    period: "Jul 2023 – Aug 2023",
    location: "New Delhi, India",
    points: [
      "Automated data cleaning and preprocessing workflows using Pandas, transforming raw unstructured data into structured formats.",
      "Worked with large datasets for demand forecasting — gained experience in efficient data handling and optimization.",
    ],
    tags: ["Python", "Pandas", "Data Science", "Forecasting"],
  },
];

export const projects = [
  {
    name: "EVM Portfolio Intelligence Engine",
    tagline: "True P&L Analytics for EVM Wallets",
    description:
      "Full-stack analytics platform that aggregates user transaction history across the EVM ecosystem to generate True Profit & Loss reports (accounting for Gas fees). Heuristic algorithms classify ambiguous on-chain transactions — Trade vs. Transfer vs. Spend.",
    period: "Feb 2026 – Present",
    tags: ["Python", "FastAPI", "PostgreSQL", "Solidity", "Foundry"],
    status: "In Progress",
    highlight: true,
    links: { github: "#", demo: "#" },
    bullets: [
      "Classifies on-chain transactions with heuristic algorithms",
      "\"Wallet Health Score\" system — analyzes holding behavior & gas efficiency",
      "True P&L accounting for gas fees across EVM chains",
    ],
  },
  {
    name: "Reactive Governance Protocol",
    tagline: "Gas-Optimized DAO Voting System",
    description:
      "Gas-optimized governance system using \"Reactive Snapshots\", reducing voting gas costs by 40% vs standard ERC20Votes. Extensive Foundry test suites covering vote delegation and proposal execution edge cases.",
    period: "Nov 2025",
    tags: ["Solidity", "Foundry", "OpenZeppelin"],
    status: "Complete",
    highlight: false,
    links: { github: "#" },
    bullets: [
      "40% gas reduction vs standard ERC20Votes implementation",
      "Reactive Snapshots for voting power without storage bloat",
      "Comprehensive Foundry test suite for all governance scenarios",
    ],
  },
  {
    name: "DAElect — DAO Infrastructure",
    tagline: "Modular Permissionless DAO Framework",
    description:
      "Modular DAO framework allowing permissionless token creation and time-locked voting proposals. Deployed to Sepolia Testnet with a React frontend for transparent governance interaction.",
    period: "Jun 2025",
    tags: ["Solidity", "React", "Wagmi", "Foundry", "Sepolia"],
    status: "Complete",
    highlight: false,
    links: { github: "#", demo: "#" },
    bullets: [
      "Permissionless token creation and time-locked proposals",
      "Deployed on Sepolia Testnet",
      "React + Wagmi frontend for governance transparency",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vivekananda Institute of Professional Studies",
    location: "New Delhi, India",
    period: "2024 – 2026",
    cgpa: "8.5 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University",
    location: "Noida, India",
    period: "2021 – 2024",
    cgpa: "8.03 / 10",
  },
];

export const achievements = [
  {
    title: "Winner — Project Concave 2025",
    desc: "1st Prize for \"DKP — Decentralised Knowledge Proof\" system",
    icon: "🏆",
  },
  {
    title: "Alchemy University Certified",
    desc: "Certified EVM Chain Developer — EVM Architecture & Solidity",
    icon: "🎓",
  },
  {
    title: "ATSTP Startup Incubation Program",
    desc: "Amity Talent Search & Training Program for Web3 prototype development",
    icon: "🚀",
  },
  {
    title: "Community Lead — Technophilia",
    desc: "Organized technical events for 300+ students",
    icon: "👥",
  },
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  about       — Who am I
  skills      — Tech stack
  experience  — Work history
  projects    — What I've built
  contact     — Get in touch
  clear       — Clear terminal
  whoami      — Quick intro`,

  about: `> Aryan Kaushik
> Smart Contract Engineer | Backend & Data Systems
> Location: New Delhi, India
> Focus: Blockchain Architecture & Data Infrastructure
> Currently building: EVM Portfolio Intelligence Engine`,

  whoami: "aryan@portfolio:~$ — Smart Contract Engineer & DeFi builder",

  skills: `Blockchain:  Solidity ████████████ 90%
Foundry:     ███████████░ 88%
Python:      ██████████░░ 85%
FastAPI:     ████████░░░░ 80%
Hardhat:     ██████████░░ 82%
PostgreSQL:  █████████░░░ 78%
React/Next:  ████████░░░░ 75%`,

  experience: `[1] Prolific Technologies  — Software Eng Intern (Jul–Dec 2024)
    Python automation, real-time data pipelines, 24/7 uptime
[2] JK Tyre               — Data Science Intern (Jul–Aug 2023)
    Pandas data cleaning, demand forecasting`,

  projects: `[1] EVM Portfolio Intelligence Engine  [In Progress]
    Full-stack EVM analytics — True P&L, Wallet Health Score
[2] Reactive Governance Protocol      [Complete]
    Gas-optimized governance — 40% reduction vs ERC20Votes
[3] DAElect — DAO Infrastructure      [Complete]
    Modular DAO framework, Sepolia deployed`,

  contact: `Email:    mail.aryankaushik@gmail.com
Phone:    +91 79826 56751
LinkedIn: linkedin.com/in/aryankaushik
GitHub:   github.com/aryankaushik`,

  clear: "__CLEAR__",
};

export const blogPosts = [
  {
    title: "Gas Optimization in Solidity: Reactive Snapshots Pattern",
    date: "Jan 2026",
    readTime: "6 min",
    tags: ["Solidity", "Gas Optimization", "DeFi"],
    excerpt:
      "How I reduced DAO voting gas costs by 40% using a custom snapshot mechanism instead of ERC20Votes.",
    slug: "gas-optimization-reactive-snapshots",
  },
  {
    title: "Building True P&L for EVM Wallets",
    date: "Feb 2026",
    readTime: "8 min",
    tags: ["EVM", "Python", "Analytics"],
    excerpt:
      "The engineering challenges of classifying on-chain transactions and computing gas-adjusted profit/loss.",
    slug: "evm-true-pnl",
  },
  {
    title: "Foundry vs Hardhat: A Practical Comparison",
    date: "Dec 2025",
    readTime: "5 min",
    tags: ["Foundry", "Hardhat", "Testing"],
    excerpt:
      "After building multiple production contracts in both frameworks, here's my honest take.",
    slug: "foundry-vs-hardhat",
  },
];
