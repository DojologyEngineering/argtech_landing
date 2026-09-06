import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProblemStatement } from "@/components/sections/problem-statement";
import { AudienceSwitcher } from "@/components/motion/audience-switcher";
import { Features } from "@/components/sections/features";
import { AppShowcase } from "@/components/sections/app-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { GlobalReach } from "@/components/sections/global-reach";
import { Testimonials } from "@/components/sections/testimonials";
import { RevenueModel } from "@/components/sections/revenue-model";
import { Roadmap } from "@/components/sections/roadmap";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ProblemStatement />
        <AudienceSwitcher />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <About />
        <Team />
        <GlobalReach />
        <Testimonials />
        <RevenueModel />
        <Roadmap />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
