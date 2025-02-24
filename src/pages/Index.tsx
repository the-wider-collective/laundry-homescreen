import React from "react";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ReferralSection } from "@/components/home/ReferralSection";
import { PricingSection } from "@/components/home/PricingSection";
import { SpecializedServices } from "@/components/home/SpecializedServices";

const Index = () => {
  return (
    <main className="bg-white max-w-[480px] w-full overflow-hidden mx-auto pt-[62px]">
      <Header />
      <Hero />
      <ReferralSection />
      <PricingSection />
      <SpecializedServices />
    </main>
  );
};

export default Index;
