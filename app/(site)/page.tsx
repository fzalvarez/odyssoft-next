import EnterpriseHero from "@/components/sections/EnterpriseHero";
import WorkflowTimeline from "@/components/sections/WorkflowTimeline";

import TrustedLogos from "@/components/sections/TrustedLogos";
import FeatureTwoCol from "@/components/sections/FeatureTwoCol";
import BentoGrid from "@/components/sections/BentoGrid";
import GradientCTA from "@/components/sections/GradientCTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ComparisonCTA from "@/components/sections/ComparisonCTA";
/* import Newsletter from "@/components/sections/Newsletter"; */
import { ThemeDebug } from "@/components/debug/ThemeDebug";
import OrbitGraphic from "@/components/ui/OrbitGraphic";

export default function Home() {
  return (
    <div className="odys-surface">
      {/* <ThemeDebug /> */}
      <EnterpriseHero />

      {/* Orbita de logos clientes */}
      {/* <div className="my-12 flex justify-center">
        <OrbitGraphic />
      </div> */}

      <WorkflowTimeline />
      <TrustedLogos />

      <FeatureTwoCol
        eyebrow="Expertise at your fingertips"
        title="Best service & support from senior engineers"
        subtitle="Direct collaboration to unblock delivery, raise quality, and keep releases predictable."
        imageSide="right"
      />

      <FeatureTwoCol
        eyebrow="Fortified protection"
        title="Security and governance that scales"
        subtitle="Policies, reviews, and delivery standards that reduce risk—without slowing teams down."
        imageSide="left"
      />

      <FeatureTwoCol
        eyebrow="Peak performance, predictable delivery"
        title="Reliable execution without surprises"
        subtitle="Clear scope, tight feedback loops, and production-grade output—built for maintainability."
        imageSide="right"
      />

      <BentoGrid />
      <GradientCTA />
      <ServicesGrid />
      <ComparisonCTA />
      {/* <Newsletter /> */}
    </div>
  );
}
