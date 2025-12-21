import React from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";
import Link from "../commons/link";

const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production, buttons
}) => {
  return (
    <section className="relative w-full bg-[#1e293b] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Production Stats */}
          {Production && Production.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16 w-full">
              {Production.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  {item?.value && (
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4">
                      {item.value}
                    </div>
                  )}
                  {item?.label && (
                    <p className="text-lg text-white/80">
                      {item.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || item.url || "#"}
                  ariaLabel={item.label || "Button"}
                  className={`
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-base font-semibold
                    transition-all duration-300
                    ${
                      index === 0
                        ? "bg-[#334155] hover:bg-[#475569] text-white"
                        : "bg-transparent border-2 border-[#334155] text-white hover:bg-[#334155]/20"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductionTimeSection;
