// data/projects.ts

export type Project = {
  id: string
  name: string
  year: string
  tagline: string
  shortDescription: string

  description: string
  fullDescription: string

  tech: string[]
  features: string[]

  role: string
  timeline: string

  github?: string
  live?: string
  paper?: string

  images: {
    src: string
    alt: string
  }[]

  category: "research" | "protocol" | "application"
}

export const projects: Project[] = [
  {
    id: "reactive-governance",
    name: "Reactive Governance",
    year: "2025",
    category: "research",

    tagline:
      "On-demand snapshot governance model resolving the DAO trilemma",

    shortDescription:
      "Proposed a novel reactive snapshot governance model that eliminates continuous checkpointing overhead while preserving on-chain security, scalability, and gas efficiency.",

    description:
      "Reactive Governance introduces a selective, just-in-time snapshot mechanism for DAO voting. Instead of snapshotting balances continuously or looping over all stakers at proposal creation, balances are snapshotted only when a user attempts to change their stake during an active proposal.",

    fullDescription:
      "This project presents a new design pattern for on-chain DAO governance that resolves the long-standing trilemma between security, scalability, and ecosystem-wide gas efficiency. Unlike ERC20Votes-style continuous checkpointing, Reactive Governance imposes zero gas overhead on standard token transfers by eliminating automatic balance snapshots. Voting power is instead snapshotted reactively, only when a user stakes or unstakes during an active proposal period.\n\nThe model prevents flash-loan based vote manipulation, late-stake attacks, and hostile proposal creation through a combination of selective snapshotting, mandatory unstaking cooldowns, and proposal lifecycle tracking. A full reference implementation was developed in Solidity using a modular StakingContract and VotingContract architecture. The system was rigorously tested using Foundry with multi-user simulations covering proposal creation, staking changes, voting, and attack scenarios.\n\nEmpirical gas analysis demonstrates approximately 40% reduction in governance-related gas costs compared to ERC20Votes, while completely eliminating the hidden gas tax on token transfers. The research formalizes the security guarantees and validates them through extensive unit and integration tests.",

    tech: [
      "Solidity",
      "Foundry",
      "DAO Governance",
      "EVM",
      "Gas Optimization",
      "Smart Contract Security",
    ],

    features: [
      "Reactive, just-in-time balance snapshotting",
      "Zero gas overhead on standard ERC-20 transfers",
      "Resistance to flash-loan and late-stake attacks",
      "Modular staking and voting contract architecture",
      "Formal security reasoning with empirical gas benchmarks",
      "Comprehensive Foundry test suite simulating multi-user governance lifecycles",
    ],

    role: "Protocol Designer & Smart Contract Developer",
    timeline: "2025",

    github: "https://github.com/timburman/Reactive-Governance",
    paper: "https://github.com/timburman/Reactive-Governance",

    images: [
      {
        src: "/projects/reactive-governance/architecture.png",
        alt: "Reactive Governance architecture and selective snapshot flow",
      },
      {
        src: "/projects/reactive-governance/staking-contract-test.png",
        alt: "Foundry test suite simulating governance attack scenarios",
      },
      {
        src: "/projects/reactive-governance/voting-contract-test.png",
        alt: "Gas comparison between Reactive Governance and ERC20Votes",
      },
    ],
  },

  {
    id: "dkp",
    name: "DKP – Decentralized Knowledge Proof",
    year: "2025",
    category: "protocol",

    tagline:
      "Decentralized knowledge submission, verification, and reputation",

    shortDescription:
      "Built a blockchain-based system for decentralized information submission and verification, introducing a Proof-of-Knowledge reputation mechanism to improve Sybil resistance.",

    description:
      "DKP is a decentralized system for submitting, verifying, and curating knowledge without relying on centralized authorities. Content is stored on IPFS, while verification and reputation logic is enforced on-chain.",

    fullDescription:
      "Decentralized Knowledge Proof (DKP) explores how reputation can be derived from provable contributions rather than identity. Users submit information that is stored on IPFS, with references and verification metadata recorded on-chain. A custom Proof-of-Knowledge mechanism ties reputation growth to the quality and verification of submitted content, making Sybil attacks economically expensive.\n\nThe system was designed end-to-end, covering smart contract logic, IPFS integration, and a React-based frontend. Emphasis was placed on composability, censorship resistance, and transparent reputation scoring, enabling decentralized curation without trusted intermediaries.",

    tech: [
      "Solidity",
      "IPFS",
      "React",
      "Ethers.js",
      "Reputation Systems",
      "Sybil Resistance",
    ],

    features: [
      "Decentralized content submission and verification",
      "IPFS-based storage for censorship resistance",
      "Proof-of-Knowledge reputation mechanism",
      "Sybil-resistant contribution scoring",
      "On-chain verification metadata",
      "Composable system design for future extensions",
    ],

    role: "Blockchain & Systems Developer",
    timeline: "2025",

    github: "https://github.com/timburman/dkp-frontend",
    live: "https://dkp-frontend-v.vercel.app/",

    images: [
      {
        src: "/projects/dkp/Home.png",
        alt: "DKP platform overview and submission flow",
      },
      {
        src: "/projects/dkp/Submission.png",
        alt: "Proof-of-Knowledge reputation mechanism",
      },
      {
        src: "/projects/dkp/Content.png",
        alt: "IPFS-based decentralized storage architecture",
      },
    ],
  },

  {
    id: "daelect",
    name: "DAElect",
    year: "2025",
    category: "application",

    tagline:
      "Modular DAO governance with staking-based voting",

    shortDescription:
      "Developed a modular DAO framework enabling ERC-20 creation, time-locked staking, and weighted proposal voting, deployed and tested on Sepolia.",

    description:
      "DAElect is a plug-and-play DAO governance application that allows projects to deploy staking and voting contracts with minimal configuration.",

    fullDescription:
      "DAElect is a full-stack DAO governance application designed to lower the barrier for launching on-chain governance. The system enables projects to deploy ERC-20 tokens, staking contracts with cooldowns, and weighted voting mechanisms. Voting power is derived from staked tokens, ensuring Sybil resistance and economic alignment.\n\nThe frontend was built using React with Wagmi and Ethers.js for wallet connectivity and contract interaction. Contracts were deployed and tested on the Sepolia testnet, focusing on usability, modularity, and clean separation between staking, voting, and execution logic.",

    tech: [
      "Solidity",
      "ERC-20",
      "DAO Governance",
      "React",
      "Wagmi",
      "Ethers.js",
      "Sepolia",
    ],

    features: [
      "ERC-20 token creation",
      "Time-locked staking contracts",
      "Weighted proposal voting",
      "Modular governance architecture",
      "Wallet-connected frontend",
      "Testnet deployment and validation",
    ],

    role: "Smart Contract & Frontend Developer",
    timeline: "2025",

    github: "https://github.com/timburman/DAElect",
    live: "",

    images: [
      {
        src: "/projects/daelect/dashboard.png",
        alt: "DAElect governance dashboard",
      },
      {
        src: "/projects/daelect/voting.png",
        alt: "Proposal creation and voting interface",
      },
      {
        src: "/projects/daelect/deployment.png",
        alt: "Token staking and voting contract deployment interface",
      },
    ],
  },
]
