
import React, { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("LAUNDREE01");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-[#FFBF3D] w-[90%] max-w-[327px] rounded-[10px] overflow-hidden">
          <div className="relative p-6">
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute right-4 top-4"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-white">Congrats!</h2>
              
              <p className="text-white mt-4 text-base">
                We value your presence.
                <br />
                To celebrate your first sign in,
                <br />
                here is a free coupon code.
              </p>

              <div className="mt-4">
                <p className="text-white text-sm mb-2">Your Coupon Code</p>
                <div className="bg-white rounded-lg border-2 border-dashed border-[#76C5C9] p-4">
                  <p className="text-[#76C5C9] text-xl font-bold">LAUNDREE01</p>
                </div>
              </div>

              <button
                onClick={copyToClipboard}
                className="mt-4 text-[#76C5C9] text-sm font-medium"
              >
                Copy to clipboard
              </button>

              <p className="text-white text-sm mt-4">
                Use this coupon at checkout and
                <br />
                receive free 10$ of laundry credit!
              </p>

              <img
                src="public/lovable-uploads/2c9188d9-8fac-448b-959a-68ddf4d0f3b6.png"
                alt="Happy customer"
                className="mt-4 w-full max-w-[200px] rounded-lg"
              />

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#76C5C9] text-white font-bold py-3 px-12 rounded-lg w-full"
              >
                Thanks!
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 text-white text-sm underline"
              >
                Sorry, I don't need a coupon.
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
