export const en = {
  navLinks: [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Contact Us", href: "#contact-info" },
  ],

  hero: {
    eyebrow: "Empowering Cambodia's smallholder farmers",
    headline: "Know your break-even.\nBefore you sell.",
    subhead:
      "ARG TECH gives Cambodia's 1.85 million smallholder farming households the cost data they've never had — a verified break-even price before harvest, delivered in Khmer over Telegram, so the middleman doesn't set the price alone.",
    primaryCta: { label: "Talk to the team", href: "#contact" },
    secondaryCta: { label: "See how it works", href: "#solutions" },
    fieldName: "Kampong Speu — Farmer Zones",
    sensorReadout: {
      zone: "Zone 12 · Batch 04",
      value: "Break-even $0.42/kg",
      note: "3¢ above market — hold 2 days",
    },
  },

  stats: [
    {
      value: 1.85,
      decimals: 2,
      prefix: "",
      suffix: "M+",
      visual: undefined as "ring" | undefined,
      label: "Smallholder farming households in Cambodia",
    },
    {
      value: 3.3,
      decimals: 1,
      prefix: "$",
      suffix: "B",
      visual: undefined as "ring" | undefined,
      label: "Fruit & vegetable market, growing faster than any other crop",
    },
    {
      value: 9.4,
      decimals: 1,
      prefix: "",
      suffix: "%",
      visual: "ring" as const,
      label: "of formal finance reaches smallholders today",
    },
  ],

  problemStatement: {
    eyebrow: "The problem",
    heading: "Every sale is a guess.",
    body: "Cambodia's 1.85 million smallholder farmers negotiate blind — with zero verifiable cost data and no way to know if today's offer is a profit or a loss.",
  },

  features: {
    eyebrow: "The platform",
    heading: "One verified number: a farmer's break-even price.",
    featured: {
      title: "ROI Engine",
      description:
        "Every cost entry a Field Agent logs meets live market price references to calculate a definitive break-even floor — the one number that tells a farmer whether today's offer is a profit or a loss.",
    },
    items: [
      {
        title: "Field Capture",
        description:
          "Field Agents log crop cost data during routine farm visits. No extra trips, no farmer effort — every visit builds a verified production record.",
      },
      {
        title: "Khmer Telegram Alerts",
        description:
          "Break-even price, overspend warnings, and the right time to sell — delivered in Khmer over Telegram. No app to download, no new habit to learn.",
      },
      {
        title: "Verified Buyer Matching",
        description:
          "Verified harvests are matched directly to purchase orders from distributors, restaurants, and supermarkets across Cambodia.",
      },
    ],
  },

  appShowcase: {
    eyebrow: "Field Agent app",
    heading: "The tool that builds every farmer's verified record.",
    body: "Farmers don't need to download anything — Field Agents capture cost data, farmer profiles, and crop cycles from the field. Every entry feeds the ROI Engine and becomes part of a farmer's verified production history.",
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From a farm visit to a price a farmer can trust.",
    steps: [
      {
        title: "Field Capture",
        description:
          "A Field Agent logs cost data during a routine visit — seed, fertilizer, labor. No extra trips, no extra work for the farmer.",
      },
      {
        title: "ROI Engine runs",
        description:
          "Accumulated cost data meets live market price references to calculate a definitive break-even price for that harvest.",
      },
      {
        title: "Alert & match",
        description:
          "The farmer gets a Khmer-language Telegram alert with their break-even price — and their verified harvest is matched to a real purchase order.",
      },
    ],
  },

  revenueModel: {
    eyebrow: "Revenue model",
    heading: "We only earn when the farmer earns first.",
    streams: [
      {
        phase: "MVP",
        title: "Self-Pickup Sourcing",
        fee: "10% of transaction value",
        weGet: "Traceable supply without middlemen",
        farmerGets: "Agreed price paid in full",
      },
      {
        phase: "MVP",
        title: "Platform Delivery Sourcing",
        fee: "20% of transaction value",
        weGet: "Everything in self-pickup, plus end-to-end delivery",
        farmerGets: "Agreed price paid in full",
      },
      {
        phase: "Phase 2",
        title: "Credit Referrals",
        fee: "Fixed fee per loan originated",
        weGet: "Qualified borrower leads, verified and ready for loan assessment",
        farmerGets: "Access to formal credit",
      },
      {
        phase: "Phase 3",
        title: "Input Recommendation",
        fee: "Cost-per-lead / placement fee",
        weGet: "Direct access to farmers with confirmed seasonal demand",
        farmerGets: "Right inputs to fulfill orders and maximize yield",
      },
    ],
  },

  roadmap: {
    eyebrow: "Roadmap",
    heading: "From pilot to predictive, one verified season at a time.",
    stages: [
      {
        title: "MVP Pilot",
        description:
          "Field Agents onboard the first cohort of smallholders, validating break-even pricing and Telegram alerts in one province.",
        current: true,
      },
      {
        title: "Operational Scale",
        description:
          "Expand Field Agent coverage and verified buyer matching across additional provinces and crop types.",
        current: false,
      },
      {
        title: "Fintech Bridge",
        description:
          "Verified production records become a scorable financial identity, opening formal credit access for smallholders.",
        current: false,
      },
      {
        title: "Predictive AI",
        description:
          "Accumulated seasons of verified data power forward-looking price and yield predictions for every farmer.",
        current: false,
      },
    ],
  },

  about: {
    eyebrow: "About us",
    heading: "Built for the 1.85 million households the market forgot.",
    recognition: "OneEarth NextGen Innovator 2026",
    body: [
      "Cambodia's fruit and vegetable market is worth over $3.3 billion and growing faster than any other crop category — yet the smallholders growing it absorb 100% of the production risk with zero verifiable cost data. Every sale is a guess.",
      "ARG TECH isn't another marketplace app farmers won't use. We work through what they already use — Telegram — and the people they already trust, starting with fruit and vegetable smallholders in Cambodia.",
    ],
    values: [
      {
        title: "No extra burden",
        description:
          "Field Agents capture data during visits farmers already expect. No new app, no new habit.",
      },
      {
        title: "Farmer-first",
        description:
          "Every feature exists to put a number in a farmer's hands before they negotiate, not after.",
      },
      {
        title: "Built on trust",
        description:
          "We grow through the community networks and NGO partners farmers already rely on — not cold outreach.",
      },
    ],
  },

  team: {
    eyebrow: "The team",
    heading: "The people behind ARG TECH.",
    members: [
      {
        name: "Thai Sodalin",
        role: "Tech & Product Lead",
        title: "IT Business Analyst at Dojology Group",
        photo: "/team/dalin.png",
        linkedin: "https://www.linkedin.com/in/sodalin-thai/",
        website: "https://sodalin.vercel.app/",
      },
      {
        name: "Kumari Laxmi Sharma",
        role: "Strategy & Delivery Lead",
        title: "Project Manager at Dojology Group",
        photo: "/team/laxmi.png",
        linkedin: "https://www.linkedin.com/in/kumari-laxmi-sharma-682433187",
        website: "https://www.kumarilaxmisharma.com/",
      },
      {
        name: "Pen Lymeng",
        role: "Technical Advisor",
        title: "Founder & CEO of Dojology Group",
        photo: "/team/meng.jpg",
        linkedin: "https://www.linkedin.com/in/penlymeng/",
        website: "https://www.penlymeng.com/",
      },
    ],
  },

  globalReach: {
    eyebrow: "Where we operate",
    heading: "Based in Cambodia, built for growers everywhere.",
    body: "Our team works out of Phnom Penh, partnering directly with farms across the region to keep the platform grounded in what actually happens in the field.",
    hqLabel: "Phnom Penh, Cambodia",
  },

  testimonials: [
    {
      quote:
        "[Placeholder quote] For the first time, I knew my break-even price before the buyer named his.",
      name: "[Name]",
      role: "[Farmer, Province]",
    },
    {
      quote:
        "[Placeholder quote] The Telegram alert told me to wait three days — that alone covered our fertilizer cost.",
      name: "[Name]",
      role: "[Farmer, Province]",
    },
  ],
  testimonialsHeader: {
    eyebrow: "From the field",
    heading: "What early growers are seeing.",
  },

  cta: {
    heading: "See the ROI Engine on a real harvest.",
    subhead:
      "Talk to the team — we'll walk through how break-even pricing works for your province.",
    primaryCta: { label: "Talk to the team", href: "#contact" },
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Talk to the team.",
    body: "Questions about the platform, partnering as an NGO, or joining the pilot — reach us however's easiest.",
    methods: [
      {
        label: "Email",
        value: "info@dojology.com",
        href: "mailto:info@dojology.com",
        icon: "mail",
      },
      {
        label: "Phone",
        value: "[+855 XX XXX XXX]",
        href: "tel:+855",
        icon: "phone",
      },
      {
        label: "Telegram",
        value: "Coming soon",
        href: "#",
        icon: "telegram",
      },
    ],
  },

  footer: {
    location: {
      value: "Koh Pich St, Connexion, Phnom Penh, Cambodia",
      href: "https://www.google.com/maps/search/?api=1&query=Koh+Pich+St+Connexion+Phnom+Penh+Cambodia",
    },
    columns: [
      {
        title: "Product",
        links: [
          { label: "Platform", href: "#platform" },
          { label: "Solutions", href: "#solutions" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} ARG TECH. All rights reserved.`,
  },

  ui: {
    bookADemo: "Book a demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    switchToEnglish: "Switch to English",
    switchToKhmer: "Switch to Khmer",
    backToTop: "Back to top",
    live: "LIVE",
    aboveBreakEven: "Above break-even",
    belowBreakEven: "Below break-even",
    zone: "Zone",
    vsBreakEven: "vs. break-even",
    currentStage: "Current stage",
    feeLabel: "Fee",
    weGetLabel: "We get",
    farmerGetsLabel: "Farmer gets",
    messageSent: "Message sent",
    messageSentBody: "Thanks for reaching out — we'll get back to you shortly.",
    sendAnotherMessage: "Send another message",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formNamePlaceholder: "Jane Doe",
    formEmailPlaceholder: "jane@farm.com",
    formSubjectPlaceholder: "Piloting on a 200-acre operation",
    formMessagePlaceholder: "Tell us a bit about your fields and what you're looking for...",
    sending: "Sending…",
    sendMessage: "Send message",
    forFarmers: "For farmers",
    forPartnersAndInvestors: "For partners & investors",
    showTestimonial: "Show testimonial",
    onLinkedIn: (name: string) => `${name} on LinkedIn`,
    portfolioWebsite: (name: string) => `${name}'s portfolio website`,
    introCaptions: [
      "Syncing field data",
      "Calculating break-even prices",
      "Connecting growers to buyers",
    ],
    mobileNav: {
      home: "Home",
      platform: "Platform",
      team: "Team",
      contact: "Contact",
    },
  },
};

export type Content = typeof en;
