
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col px-5">
      <h1 className="text-3xl font-bold leading-tight mt-6">
        <span className="text-[#76C5C9]">Laundry at</span>
        <br />
        <span className="text-[#FFBF3D]">Your Fingertips</span>
      </h1>
      <p className="text-[#4A4A4A] text-base mt-4">
        Experience your first laundry
        <br />
        with No.1 Laundry
      </p>
      <h2 className="text-3xl font-bold leading-tight mt-4">
        <span className="text-[#4A4A4A]">Get $25 In </span>
        <br />
        <span className="text-[#76C5C9]">Laundry</span>
        <span className="text-[#FFBF3D]"> Credit!</span>
      </h2>
      <button className="bg-[#76C5C9] text-xl text-white font-bold mt-6 py-4 rounded-[10px] hover:bg-opacity-90 transition-colors">
        Schedule your first pickup
      </button>
    </section>
  );
};
