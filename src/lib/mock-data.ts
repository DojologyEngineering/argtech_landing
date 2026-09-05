/**
 * MOCK / PLACEHOLDER CONTENT
 * Every section below is drafted content for layout purposes only.
 * Swap in real copy, verified numbers, and real testimonials before launch.
 */

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export const hero = {
  eyebrow: "Precision agriculture platform",
  headline: "Every acre, measured.\nEvery decision, informed.",
  subhead:
    "ARG TECH fuses in-field sensors, satellite imagery, and weather modeling into one live map of your operation — so irrigation, fertilizer, and harvest timing are called from what's happening in the field right now, not last week's forecast.",
  primaryCta: { label: "Book a field demo", href: "#contact" },
  secondaryCta: { label: "Watch a 2-min overview", href: "#" },
  fieldName: "North Ridge Field — Zone Map",
  sensorReadout: {
    zone: "Zone 12 · Sensor 04",
    value: "34% soil moisture",
    note: "Irrigation recommended in 6 hrs",
  },
};

export const stats = [
  { value: 12400, suffix: "+", label: "Acres under active monitoring" },
  { value: 18, suffix: "%", label: "Avg. yield lift for early adopters" },
  { value: 340, suffix: "+", label: "Farms onboarded to date" },
];

export const features = {
  eyebrow: "Platform",
  heading: "Everything your agronomy team needs, in one view.",
  featured: {
    title: "Predictive yield modeling",
    description:
      "Soil, weather, and satellite NDVI data combine into a per-zone yield forecast six weeks out — so under-performing zones get attention while there's still time to change the outcome.",
  },
  items: [
    {
      title: "Soil & climate sensing",
      description:
        "In-ground sensors track moisture, temperature, and nutrients across every field zone, updated hourly.",
    },
    {
      title: "Satellite field imagery",
      description:
        "Weekly NDVI passes flag crop stress before it's visible from the road.",
    },
    {
      title: "Automated irrigation scheduling",
      description:
        "Recommendations sync directly to the irrigation controllers you already run.",
    },
  ],
};

export const appShowcase = {
  eyebrow: "Mobile app",
  heading: "Your fields, in your pocket.",
  body: "Check zone health, irrigation alerts, and yield forecasts from wherever you are — the ARG TECH app keeps the field on your phone, not just at your desk.",
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "From raw field data to a decision you can act on.",
  steps: [
    {
      title: "Deploy sensors",
      description:
        "Place soil and climate sensors across your field zones — most farms are fully wired in under a day.",
    },
    {
      title: "Data streams in",
      description:
        "Sensor readings, satellite passes, and weather forecasts sync automatically, every hour.",
    },
    {
      title: "Get zone-level guidance",
      description:
        "ARG TECH flags what needs attention and recommends irrigation, fertilizer, and harvest timing by zone.",
    },
  ],
};

export const about = {
  eyebrow: "About us",
  heading: "Built by people who grew up walking these fields.",
  body: [
    "ARG TECH started with agronomists and engineers who were tired of choosing between good data and usable tools. Most farm software is built by one side or the other — we build it with both in the room.",
    "We're a small team based in Phnom Penh, Cambodia, working directly with growers each season to keep the platform grounded in what actually happens between planting and harvest.",
  ],
  values: [
    {
      title: "Field-tested",
      description:
        "Every feature ships after real seasons in real fields, not just lab data.",
    },
    {
      title: "Farmer-first",
      description:
        "We build for the people making the decisions, not just the dashboards they use.",
    },
    {
      title: "Built to last",
      description:
        "Hardware and software designed for a decade in the field, not a demo day.",
    },
  ],
};

export const team = {
  eyebrow: "The team",
  heading: "The people behind ARG TECH.",
  members: [
    {
      name: "Thai Sodalin",
      role: "Tech & Product Lead",
      title: "IT Business Analyst at Dojology Group",
      photo: "/dalin.png",
    },
    {
      name: "Kumari Laxmi Sharma",
      role: "Strategy & Delivery Lead",
      title: "Project Manager at Dojology Group",
      photo: "/laxmi.png",
    },
    {
      name: "Pen Lymeng",
      role: "Technical Advisor",
      title: "Founder & CEO of Dojology Group",
      photo: "/meng.png",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "[Placeholder quote] We caught a irrigation problem in the north field three days before we would have noticed it walking the rows.",
    name: "[Name]",
    role: "[Title, Farm name]",
  },
  {
    quote:
      "[Placeholder quote] The yield forecast has been within a few percent of actual harvest two seasons running.",
    name: "[Name]",
    role: "[Title, Farm name]",
  },
];

export const cta = {
  heading: "See ARG TECH running on your own fields.",
  subhead:
    "Book a 30-minute walkthrough — we'll map one of your fields live on the call.",
  primaryCta: { label: "Book a field demo", href: "#contact" },
};

export const contact = {
  eyebrow: "Get in touch",
  heading: "Talk to the team.",
  body: "Questions about the platform, pricing, or piloting on your own fields — reach us however's easiest.",
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
};

export const footer = {
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
};
