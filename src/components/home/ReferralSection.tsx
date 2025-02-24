
import React from "react";

const ReferralCard: React.FC = () => (
  <div className="bg-[#76C5C9] flex-1 flex flex-col items-center pb-5 rounded-[10px]">
    <div className="self-stretch flex flex-col items-center justify-center px-[23px] py-[17px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/1b64d2f591bffee8bfd1eff8a0f365fae71b9c0a15afd6281e0852263e2f789d?placeholderIfAbsent=true"
        className="aspect-square w-[60px] object-contain"
        alt="Refer a friend icon"
      />
    </div>
    <h3 className="text-white text-base font-bold leading-5">
      Refer a friend
    </h3>
    <div className="flex w-[124px] max-w-full items-center justify-between gap-1 mt-2">
      <p className="text-[12px] text-white font-normal leading-4">
        Free 20$ orders for
        <br />
        each friend you refer
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/dfe4baf43d1ef64949be246026cfc86760c6050f59bc0c8a19a5181f5d479050?placeholderIfAbsent=true"
        className="w-3 object-contain self-center"
        alt="Arrow right"
      />
    </div>
  </div>
);

const GiftCard: React.FC = () => (
  <div className="bg-[#FFBF3D] flex-1 pb-5 rounded-[10px]">
    <div className="flex flex-col items-center justify-center px-7 py-[17px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8e6879fff85cfe9989831b393fff76f0ed6a40f5d19625a8991654c4e488107f?placeholderIfAbsent=true"
        className="aspect-square w-[60px] object-contain"
        alt="Send a gift icon"
      />
    </div>
    <div className="flex flex-col items-center text-white">
      <h3 className="text-base font-bold leading-5">Send a gift!</h3>
      <div className="flex w-[124px] items-center justify-between gap-1 mt-2">
        <p className="text-[12px] font-normal leading-4">
          Send your friends a gift
          <br />
          that cleans and delivers
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8398ef3e44037d582a6fae02d8d5a184ef4865e51d094debdbba2d6f02ed6a8f?placeholderIfAbsent=true"
          className="w-3 object-contain self-center"
          alt="Arrow right"
        />
      </div>
    </div>
  </div>
);

export const ReferralSection: React.FC = () => {
  return (
    <section className="flex items-stretch gap-4 mt-6 px-5">
      <ReferralCard />
      <GiftCard />
    </section>
  );
};
