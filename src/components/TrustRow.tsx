import React from "react";

const TRUST_ITEMS = [
  {
    title: "Since 1990",
    subtitle: "Three decades of trust",
  },
  {
    title: "Home & Office",
    subtitle: "Furniture for every space",
  },
  {
    title: "Trusted Brands",
    subtitle: "Quality you can count on",
  },
  {
    title: "Hyderabad Local",
    subtitle: "Visit our local showroom",
  },
];

export const TrustRow: React.FC = () => {
  return (
    <section className="border-y border-[#e6e4da] bg-[#fffefa] py-6 sm:py-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e6e4da]">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`text-center py-3 md:py-1 px-4 ${
                index % 2 === 0 ? "border-r md:border-r-0 border-[#e6e4da]" : ""
              }`}
            >
              <b className="block font-heading text-base sm:text-lg font-semibold text-[#344b39] mb-0.5">
                {item.title}
              </b>
              <span className="text-xs text-[#6d7168] tracking-wide">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
