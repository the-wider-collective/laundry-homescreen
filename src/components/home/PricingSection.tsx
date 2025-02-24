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
    ${isHighlighted ? "bg-[#EFE9FF]" : "bg-white"} 
    ${isHighlighted ? "border-[3px]" : "border"} 
    self-stretch flex w-full flex-col font-normal mt-4 px-[23px] py-[18px] rounded-[10px] border-[#409A9F] border-solid
  `;

  return (
    <div className={containerClasses}>
      <div className="self-stretch flex items-stretch gap-5 text-2xl font-black justify-between">
        <div className="text-[#409A9F]">{title}</div>
        <div className="text-[#4A4A4A] leading-none">{price}</div>
      </div>
      <div className="text-[#4A4A4A] text-sm mt-3">{description}</div>
      <ul className="text-[#4A4A4A] text-xs leading-5 ml-6 mt-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  return (
    <section className="mt-8 px-5">
      <h2 className="text-[#4A4A4A] text-xl font-black">Pricing</h2>

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
