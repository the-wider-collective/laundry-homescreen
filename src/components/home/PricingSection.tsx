
import React from "react";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  isHighlighted = false,
}) => {
  const containerClasses = `
    ${isHighlighted ? "border-[#76C5C9]" : "border-[#E5E7EB]"} 
    bg-white
    self-stretch flex w-full flex-col font-normal mt-4 px-6 py-5 rounded-[10px] border-2
  `;

  return (
    <div className={containerClasses}>
      <div className="self-stretch flex items-center justify-between">
        <div className="text-[#76C5C9] text-xl font-bold">{title}</div>
        <div className="text-[#4A4A4A] text-xl font-bold">{price}</div>
      </div>
      <div className="text-[#4A4A4A] text-sm mt-2">{description}</div>
      <ul className="text-[#4A4A4A] text-sm space-y-2 mt-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="#76C5C9" strokeWidth="2"/>
              <path d="M5 8L7 10L11 6" stroke="#76C5C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  return (
    <section className="mt-8 px-5">
      <h2 className="text-[#4A4A4A] text-2xl font-bold">Pricing</h2>

      <PricingTier
        title="Basic"
        price="$4.30 / Kilo"
        description="Wash and fold for everyday clothes"
        features={["Wash and fold", "Regular fabrics", "Pickup and delivery"]}
      />

      <PricingTier
        title="Standard"
        price="$7.00 / Kilo"
        description="Wash, iron, and fold for a polished look"
        features={[
          "Wash, iron, and fold",
          "Regular and delicate fabrics",
          "Pickup and delivery",
        ]}
        isHighlighted
      />

      <PricingTier
        title="Premium"
        price="$7.00 / Kilo"
        description="Gentle care, premium wash, and expert ironing"
        features={[
          "Premium wash and ironing",
          "Delicate fabrics care",
          "Pickup and delivery",
        ]}
      />
    </section>
  );
};
