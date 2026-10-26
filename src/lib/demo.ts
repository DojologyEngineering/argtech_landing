// Each demo is a separate app on its own domain. Override per environment with
// NEXT_PUBLIC_DEMO_AGENT_URL / NEXT_PUBLIC_DEMO_BUYER_URL.
export const DEMO_LINKS = {
  agent: process.env.NEXT_PUBLIC_DEMO_AGENT_URL ?? "https://argtech-agent.dojology.com",
  buyer: process.env.NEXT_PUBLIC_DEMO_BUYER_URL ?? "https://argtech-buyer.dojology.com",
} as const;
