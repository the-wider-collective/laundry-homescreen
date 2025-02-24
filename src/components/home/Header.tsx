
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-4 bg-white">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true"
        className="h-8 object-contain"
        alt="Laundry Service Logo"
      />
      <button className="text-[#76C5C9]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21M3 12H21M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </header>
  );
};
