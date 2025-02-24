import React from "react";

const ReferralCard: React.FC = () => (
  <div className="flex flex-col items-center pb-5 rounded-[10px]">
    <div className="self-stretch flex flex-col items-stretch justify-center px-[23px] py-[17px] rounded-[0px_0px_10px_10px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/1b64d2f591bffee8bfd1eff8a0f365fae71b9c0a15afd6281e0852263e2f789d?placeholderIfAbsent=true"
        className="aspect-[0.94] object-contain w-[118px]"
        alt="Refer a friend illustration"
      />
    </div>
    <h3 className="text-white text-sm font-black leading-7 mt-[13px]">
      Refer a friend
    </h3>
    <div className="flex w-[124px] max-w-full items-stretch gap-5 text-[10px] text-white font-normal leading-3 justify-between">
      <p>
        Free 20$ orders for
        <br />
        each friend you refer
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/dfe4baf43d1ef64949be246026cfc86760c6050f59bc0c8a19a5181f5d479050?placeholderIfAbsent=true"
        className="aspect-[0.59] object-contain w-2.5 shrink-0 my-auto"
        alt="Arrow right"
      />
    </div>
  </div>
);

const GiftCard: React.FC = () => (
  <div className="pb-5 rounded-[10px]">
    <div className="flex flex-col items-stretch justify-center px-7 py-[17px] rounded-[0px_0px_10px_10px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8e6879fff85cfe9989831b393fff76f0ed6a40f5d19625a8991654c4e488107f?placeholderIfAbsent=true"
        className="aspect-[0.85] object-contain w-[108px]"
        alt="Send a gift illustration"
      />
    </div>
    <div className="flex w-full flex-col items-stretch text-white mt-[13px] px-[22px]">
      <h3 className="text-sm font-black leading-7">Send a gift!</h3>
      <div className="flex items-stretch gap-[13px] text-[10px] font-normal leading-3">
        <p>
          Send your friends a gift
          <br />
          that cleans and delivers
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8398ef3e44037d582a6fae02d8d5a184ef4865e51d094debdbba2d6f02ed6a8f?placeholderIfAbsent=true"
          className="aspect-[0.59] object-contain w-2.5 shrink-0 my-auto"
          alt="Arrow right"
        />
      </div>
    </div>
  </div>
);

export const ReferralSection: React.FC = () => {
  return (
    <section className="flex items-stretch gap-[17px] mt-[21px] px-5">
      <ReferralCard />
      <GiftCard />
    </section>
  );
};
