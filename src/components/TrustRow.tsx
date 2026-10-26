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
    <section className="border-y border-[#e2e7e2] bg-white py-4 sm:py-6 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`text-center py-2.5 sm:py-2 px-3 sm:px-4 ${
                // Right border for left column (items 0 & 2 on mobile, items 0, 1, 2 on desktop)
                index % 2 === 0 ? "border-r border-[#e2e7e2]" : ""
              } ${
                // Desktop vertical divider after item 1
                index === 1 ? "md:border-r md:border-[#e2e7e2]" : ""
              } ${
                // Top border ONLY for the second row on mobile (items 2 & 3) — NO LINE above item 1 (Home & Office)
                index >= 2 ? "border-t border-[#e2e7e2] md:border-t-0" : ""
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
