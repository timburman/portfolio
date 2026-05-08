export const personalInfo = {
  name: "Aryan Kaushik",
  title: "Protocol Engineer",
  subtitle: "Blockchain & Python Systems Dev",
  email: "mail.aryankaushik@gmail.com",
  phone: "+91 79826 56751",
  location: "New Delhi, India",
  linkedin: "https://linkedin.com/in/aryankaushik1",
  twitter: "https://x.com/0xtimbur",
  github: "https://github.com/timburman",
  website: "https://aryankaushik.com",
  summary:
    "Protocol Engineer focused on EVM mechanics, gas optimization, and robust off-chain infrastructure. Bridging the gap between smart contract research and high-performance Python systems. Ship fast, learn faster, optimize harder.",
};

export const currentlyBuilding = [
  "Chronos Vault — Crypto Dead Man's Switch",
  "Xandeum Network Explorer — Python RPC Crawler",
  "EVM Portfolio Intelligence Engine — True P&L Reports",
];

export const skills = {
  "Blockchain Engineering": [
    "Solidity",
    "Foundry",
    "Hardhat",
    "OpenZeppelin",
    "ERC-20",
    "ERC-721",
    "ERC-1155",
    "Gas Optimization",
    "web3.js",
    "ethers.js",
    "Etherscan API",
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
    "Vite",
    "Supabase",
    "JWT",
    "OAuth2",
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
    company: "Freelance",
    role: "Software Engineer & Data Automation — Python",
    period: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Developed Python automation scripts to execute trading logic based on pre-defined statistical parameters, reducing manual intervention by 20+ hours/week and decreasing error rates by 85%.",
      "Built robust data pipelines to ingest and process real-time market data, handling over 50,000 data points daily — similar architecture to blockchain indexers and keeper bots.",
      "Implemented comprehensive logging and error-handling achieving 99.9% uptime on 24/7 automated tasks.",
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
    name: "Reactive Governance",
    tagline: "Selective Snapshotting for DAO Voting",
    description:
      "A research-backed governance framework that optimizes on-chain voting by eliminating transfer overhead through a selective snapshotting mechanism. Reduces gas costs by up to 40% compared to standard ERC20Votes.",
    period: "Apr 2026",
    tags: ["Solidity", "Foundry", "Gas Optimization", "Governance"],
    status: "Complete",
    highlight: true,
    links: { github: "https://github.com/timburman/Reactive-Governance", paper: "https://zenodo.org/records/20037058" },
    bullets: [
      "Eliminates transfer overhead in governance tokens",
      "Formal security analysis against Flash Loan attacks",
      "Benchmark-proven ~17,715 gas marginal cost per snapshot",
    ],
    expandedContent:
      "Reactive Governance solves the 'Transfer Overhead' problem in DAOs. Standard governance tokens require costly state updates on every transfer. By utilizing a selective snapshotting pattern, we defer calculations to the voting period itself. This research includes a production-ready Solidity implementation and formal verification of the snapshotting invariants, ensuring that the system remains resistant to late-stake and flash loan manipulations while maintaining industry-leading gas efficiency.",
  },
  {
    name: "Chronos Vault",
    tagline: "Crypto Dead Man's Switch",
    description:
      "An open-source decentralized inheritance protocol built on the EVM. Deposit crypto, set an inactivity timeout, and ping the contract periodically to prove you are alive. If you ever stop pinging past the threshold, your beneficiary can sweep the vault. No lawyers. No intermediaries. No trust required.",
    period: "Mar 2026 – Present",
    tags: ["Solidity", "Foundry", "EVM", "Smart Contracts"],
    status: "In Progress",
    highlight: true,
    links: { github: "#" },
    bullets: [
      "Decentralized inheritance protocol with heartbeat mechanism",
      "Trustless architecture relying solely on EVM timestamps",
      "Beneficiary sweep functionality upon inactivity threshold breach",
    ],
    expandedContent:
      "Chronos Vault solves the critical issue of lost crypto assets due to unforeseen circumstances. The architecture revolves around a heartbeat mechanism: users interact with the contract periodically to reset an inactivity timer. If the user fails to ping the contract before the timeout (e.g., 6 months), a pre-designated beneficiary address is granted permission to sweep the vault. The entire logic is trustless, immutable, and deployed entirely on-chain without any reliance on off-chain oracles or legal intermediaries.",
  },
  {
    name: "Xandeum Network Explorer",
    tagline: "Real-time pNode-Scope Analytics",
    description:
      "A real-time, decentralized analytics dashboard for the Xandeum Storage Network. Instead of pinging a single seed node, it features a Python-powered Recursive Crawler Engine to discover peers and gather distinct CPU/RAM stats across the entire network topology.",
    period: "Jan 2026",
    tags: ["Python", "Next.js 14", "Node.js", "RPC"],
    status: "Complete",
    highlight: true,
    links: { github: "https://github.com/timburman/Xandeum-Analytics" },
    bullets: [
      "Python-powered Recursive Crawler Engine for peer discovery via get-pods",
      "Geospatial Intelligence resolving pNode IPs to physical globe locations",
      "Live 'Hacker' Terminal visualizing gossip protocol and fault-tolerant fallback engine",
    ],
    expandedContent:
      "Unlike standard explorers, the Xandeum pNode-Scope uses a custom Python-powered crawler to aggressively traverse the network. It hits seed RPC endpoints, recursively discovers neighboring peers, and aggregates granular hardware telemetry. The frontend (Next.js 14) connects to this data layer to render an interactive geospatial globe and a live terminal feed, offering unprecedented transparency into the decentralized storage network's health and topology.",
  },
  {
    name: "DAElect — DAO Infrastructure",
    tagline: "Modular Permissionless DAO Framework",
    description:
      "Modular DAO framework allowing permissionless token creation and governance deployment. Features a factory contract for 1-click deployments of complex governance systems, including ASR, APR, BasicVesting, FixedAPR, and normal staking modules.",
    period: "Jun 2025",
    tags: ["Solidity", "React", "Wagmi", "Foundry", "Sepolia"],
    status: "Complete",
    highlight: false,
    links: { github: "https://github.com/timburman/DAO-Voting-Contract", demo: "https://github.com/timburman/DAElect-App" },
    bullets: [
      "Factory contract enabling 1-click deployment of governance systems",
      "Extensive staking modules: ASR, APR, BasicVesting, FixedAPR",
      "React + Wagmi frontend for seamless governance interaction",
    ],
    expandedContent:
      "DAElect was built to commoditize DAO infrastructure. Any project can use the factory contract to spin up a tailored governance and tokenomics ecosystem without writing Solidity. The framework includes plug-and-play modules for varied staking mechanics: Annual Staking Rewards (ASR), Annual Percentage Rates (APR), Basic Vesting schedules, and Fixed APR vaults. All contracts were heavily tested using Foundry and deployed to Sepolia.",
  },
  {
    name: "EVM Portfolio Intelligence Engine",
    tagline: "True P&L Analytics for EVM Wallets",
    description:
      "Full-stack analytics platform that aggregates user transaction history across the EVM ecosystem to generate True Profit & Loss reports (accounting for Gas fees). Heuristic algorithms classify ambiguous on-chain transactions.",
    period: "Feb 2026 – Present",
    tags: ["Python", "FastAPI", "PostgreSQL", "Solidity"],
    status: "In Progress",
    highlight: false,
    links: { github: "#" },
    bullets: [
      "Classifies on-chain transactions with heuristic algorithms",
      "\"Wallet Health Score\" system",
      "True P&L accounting for gas fees",
    ],
    expandedContent:
      "A comprehensive deep dive into building EVM transaction classifiers, handling gas edge cases, and processing multi-chain logic via Python. Stay tuned for more architectural details.",
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
    title: "Zenodo Research Publication",
    desc: "Paper: 'Reactive Governance: A Selective Snapshotting Framework for Secure and Gas-Efficient DAO Voting' published on Zenodo.",
    icon: "",
    expandedContent: "Introduced a novel selective snapshotting framework for on-chain DAO voting. The protocol eliminates transfer overhead and ensures security with minimal marginal cost (~17,715 gas). Included formal system modeling, security analysis, and empirical benchmarking. The research demonstrates how to scale decentralized governance without compromising on-chain efficiency.",
    link: "https://zenodo.org/records/20037058"
  },
  {
    title: "IEEE Conference Publication",
    desc: "Paper: 'Plant Disease Recognition (Integrating Deep Learning for Accurate Diagnosis and Sustainable Agriculture)' published at an IEEE conference.",
    icon: "",
    expandedContent: "In this research, we explored the integration of advanced Deep Learning architectures to accurately diagnose plant diseases from leaf imagery. The models achieved state-of-the-art accuracy, providing a scalable and automated solution for sustainable agriculture. We detailed the data preprocessing pipelines, CNN model fine-tuning, and the real-world implications for early disease detection in crop management.",
    link: "https://www.researchgate.net/publication/380589601_Plant_Disease_Recognition_Integrating_Deep_Learning_for_Accurate_Diagnosis_and_Sustainable_Agriculture"
  },
  {
    title: "Winner — Project Concave 2025",
    desc: "1st Prize for \"DKP — Decentralised Knowledge Proof\" system",
    icon: "",
    expandedContent: "Built a decentralized knowledge verification protocol utilizing zero-knowledge elements to prove competency without revealing underlying personal data."
  },
  {
    title: "Alchemy University Certified",
    desc: "Certified EVM Chain Developer — EVM Architecture & Solidity",
    icon: "",
    expandedContent: "Completed rigorous coursework and practical projects covering the EVM's stack machine, memory/storage layouts, and advanced Solidity security patterns."
  },
  {
    title: "ATSTP Startup Incubation Program",
    desc: "Amity Talent Search & Training Program for Web3 prototype development",
    icon: "",
  },
  {
    title: "Community Lead — Technophilia",
    desc: "Organized technical events for 300+ students",
    icon: "",
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
> Protocol Engineer | Blockchain & Python Systems Dev
> Location: New Delhi, India
> Focus: Smart Contract Research & Off-Chain Infrastructure
> Currently building: Chronos Vault & EVM Analytics`,

  whoami: "aryan@portfolio:~$ — Protocol Engineer & Python Systems Developer",

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

  projects: `[1] Chronos Vault  [In Progress]
    Crypto Dead Man's Switch (EVM)
[2] Xandeum Network Explorer [Complete]
    Python RPC Crawler & Dashboard
[3] DAElect — DAO Infrastructure [Complete]
    Modular framework, staking modules
[4] EVM Portfolio Intelligence Engine [In Progress]
    True P&L and Wallet Health analytics`,

  contact: `Email:    mail.aryankaushik@gmail.com
Phone:    +91 79826 56751
LinkedIn: linkedin.com/in/aryankaushik1
Twitter:  x.com/0xtimbur
GitHub:   github.com/timburman`,

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
    expandedContent: "Standard ERC20Votes implementations suffer from severe state bloat because every transfer must update historical checkpoints for voting power. In my recent protocol development, I designed the 'Reactive Snapshots' pattern. \n\nInstead of eager state updates on every transfer, the contract defers the calculation and relies on a time-weighted event aggregation off-chain, verified on-chain via Merkle proofs during the voting period. This hybrid approach significantly reduces the SSTORE operations required for standard token transfers, resulting in a consistent ~40% reduction in gas overhead. The trade-off is slightly higher gas during the actual vote casting, but since transfers happen exponentially more often than votes, the net gas savings across the ecosystem are massive."
  },
  {
    title: "Building True P&L for EVM Wallets",
    date: "Feb 2026",
    readTime: "8 min",
    tags: ["EVM", "Python", "Analytics"],
    excerpt:
      "The engineering challenges of classifying on-chain transactions and computing gas-adjusted profit/loss.",
    slug: "evm-true-pnl",
    expandedContent: "Building a True P&L system for EVM wallets is notoriously difficult because block explorers only show raw token transfers, not intent. If a wallet sends 1 ETH to a contract and receives 2000 USDC, is that a trade, a liquidity provision, or a loan repayment?\n\nTo solve this, I built a Python-based heuristic engine. The pipeline ingests raw RPC trace logs, normalizes token decimals, and applies a rule-based classification algorithm to infer intent based on the contract's ABI signatures and emit events. A critical element of 'True P&L' is accurately deducting gas fees from the cost basis of every transaction. Over time, heavy DeFi users bleed thousands of dollars in gas, which most basic portfolio trackers ignore. My system aggregates this native token burn in real-time to generate a perfectly balanced ledger."
  },
  {
    title: "Foundry vs Hardhat: A Practical Comparison",
    date: "Dec 2025",
    readTime: "5 min",
    tags: ["Foundry", "Hardhat", "Testing"],
    excerpt:
      "After building multiple production contracts in both frameworks, here's my honest take.",
    slug: "foundry-vs-hardhat",
    expandedContent: "For years, Hardhat was the undisputed king of Ethereum development. However, after migrating three major protocol codebases to Foundry, the shift is irreversible.\n\nFoundry's biggest advantage isn't just the execution speed (though compiling in Rust is incredibly fast). It's the cognitive benefit of writing tests in Solidity itself. With Hardhat, context switching between Ethers.js (JavaScript) and the smart contract logic introduces friction. With Foundry, testing complex invariants, fuzzing, and manipulating the EVM state via cheatcodes (`vm.prank`, `vm.warp`) feels native to the environment. Hardhat still has an edge when it comes to complex deployment scripting and heavy off-chain integration tests, but for pure smart contract development and security auditing, Foundry's Forge is superior."
  },
];
