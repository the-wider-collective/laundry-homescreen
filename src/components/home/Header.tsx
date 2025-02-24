import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/436ece1818764ea7a6f389bc5c871752/8fdb330404ce66e1396ceed4dd65d3be75606f9dea0bd02018e8e1b915b14002?placeholderIfAbsent=true"
        className="aspect-[3.44] object-contain w-[117px] max-w-full"
        alt="Laundry Service Logo"
      />
    </header>
  );
};
