import { Hero } from "@/components/landing/hero";
import { ValueGap } from "@/components/landing/value-gap";
import { DigitalWorkforce } from "@/components/landing/digital-workforce";
import { TransformationScenarios } from "@/components/landing/transformation-scenarios";
import { Methodology } from "@/components/landing/methodology";
import { LeadForm } from "@/components/landing/lead-form";
import { Footer } from "@/components/layout/footer";
import { FutureOperations } from "@/components/landing/future-operations";
// fix //
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--color-neon-cyan)] selection:text-black">
      <Hero />
      <FutureOperations />
      <ValueGap />
      <DigitalWorkforce />
      <TransformationScenarios />
      <Methodology />
      <LeadForm />
      <Footer />
    </main>
  );
}
