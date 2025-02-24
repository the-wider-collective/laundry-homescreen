import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col px-5">
      <h1 className="text-2xl font-black leading-7 mt-[18px]">
        <span className="text-[#76C5C9]">Laundry at</span>
        <br />
        <span className="text-[#FFBF3D]">Your Fingertips</span>
      </h1>
      <p className="text-[#4A4A4A] text-base font-normal mt-6">
        Experience your first laundry
        <br />
        with No.1 Laundry
      </p>
      <h2 className="text-3xl font-black leading-[35px] mt-[11px]">
        <span className="text-[#4A4A4A]">Get $25 In </span>
        <br />
        <span className="text-[#76C5C9]">Laundry</span>
        <span className="text-[#FFBF3D]"> Credit!</span>
      </h2>
      <button className="bg-[#76C5C9] text-xl text-white font-black mt-[21px] px-[52px] py-[17px] rounded-[10px] hover:bg-opacity-90 transition-colors">
        Schedule your first pickup
      </button>
    </section>
  );
};
