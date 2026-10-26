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
    <section className="border-y border-[#e2e7e2] bg-white py-5 sm:py-7 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e2e7e2]">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`text-center py-2.5 md:py-1 px-4 ${
                index % 2 === 0 ? "border-r md:border-r-0 border-[#e2e7e2]" : ""
              }`}
            >
              <b className="block font-heading text-sm sm:text-base md:text-lg font-semibold text-[#1e3b2b] mb-0.5">
                {item.title}
              </b>
              <span className="text-[11px] sm:text-xs text-[#54665c] tracking-wide">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
