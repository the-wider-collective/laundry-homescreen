
import React from "react";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ReferralSection } from "@/components/home/ReferralSection";
import { PricingSection } from "@/components/home/PricingSection";
import { SpecializedServices } from "@/components/home/SpecializedServices";
import { WelcomeModal } from "@/components/home/WelcomeModal";

const Index = () => {
  return (
    <main className="bg-white max-w-[480px] w-full overflow-hidden mx-auto">
      <Header />
      <Hero />
      <ReferralSection />
      <PricingSection />
      <SpecializedServices />
      <WelcomeModal />
    </main>
  );
};

export default Index;
