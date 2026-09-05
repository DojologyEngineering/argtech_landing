import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { AppShowcase } from "@/components/sections/app-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { GlobalReach } from "@/components/sections/global-reach";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <About />
        <Team />
        <GlobalReach />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
