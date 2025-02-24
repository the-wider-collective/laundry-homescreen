
import React from "react";

export const SpecializedServices: React.FC = () => {
  return (
    <section className="flex flex-col relative w-full text-base font-bold mt-8 px-5 pb-8">
      <div className="relative z-10">
        <h2 className="text-2xl">
          <span className="text-[#76C5C9]">Specialized</span>
          <br />
          <span className="text-[#FFBF3D]">Laundry Services</span>
        </h2>
        <p className="text-[#4A4A4A] font-normal mt-2">
          We go beyond the usual wash and fold.
          <br />
          For costumes, mascot, gowns and suits
        </p>
        <p className="font-bold mt-1 text-[#FFBF3D]">Contact us.</p>

        <button className="bg-white w-full text-xl text-[#76C5C9] mt-8 py-4 rounded-[10px] border-[#76C5C9] border-2 hover:bg-opacity-90 transition-colors">
          Select Plan
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FFBF3D] rounded-t-[30px] -z-0" />

      <div className="relative z-10 bg-[#76C5C9] shadow-[0px_1px_2px_rgba(0,0,0,0.161)] self-center w-[155px] h-[7px] mt-8 rounded-[21px]" />
    </section>
  );
};
