import React from "react";

export const SpecializedServices: React.FC = () => {
  return (
    <section className="flex flex-col relative aspect-[1.059] w-full text-base font-black mt-5 px-5 py-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/9a627ff69667b020f3b44bd5d3deda3446373b9f6a9426f455069b7d4929ff80?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background pattern"
      />
      <div className="relative">
        <h2 className="text-2xl">
          <span className="text-[#409A9F]">Specialized</span>
          <br />
          <span className="text-[#FFBF3D]">Laundry Services</span>
        </h2>
        <p className="text-[#4A4A4A] font-normal mt-[5px]">
          We go beyond the usual wash and fold.
          <br />
          For costumes, mascot, gowns and suits
        </p>
        <p className="font-bold mt-1.5 text-[#FFBF3D]">Contact us.</p>
      </div>

      <button className="relative bg-white self-stretch text-xl text-[#409A9F] mt-[100px] px-[70px] py-[17px] rounded-[10px] border-[#409A9F] border-solid border-2 hover:bg-opacity-90 transition-colors">
        Select Plan
      </button>

      <div className="relative bg-[#76C5C9] shadow-[0px_1px_2px_rgba(0,0,0,0.161)] self-center flex w-[155px] shrink-0 h-[7px] mt-[38px] rounded-[21px]" />
    </section>
  );
};
