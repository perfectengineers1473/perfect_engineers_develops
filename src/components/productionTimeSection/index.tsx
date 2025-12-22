import React from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";
import Link from "../commons/link";

const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production,
  buttons,
}) => {
  return (
    <section className="relative w-full bg-linear-to-r from-[#3b3fa1] via-[#2f348f] to-[#232867] py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">

          {/* ================= STATS ================= */}
          {Production && Production.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mb-16 w-full">
              {Production.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  {/* VALUE */}
                  {item?.value && (
                    <div className="flex items-baseline gap-1 text-white mb-4">
                      <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold">
                        {item.value.replace(/[^0-9]/g, "")}
                      </span>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/70">
                        {item.value.replace(/[0-9]/g, "")}
                      </span>
                    </div>
                  )}

                  {/* LABEL */}
                  {item?.label && (
                    <p className="text-base sm:text-lg text-white/80 max-w-xs">
                      {item.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ================= BUTTONS ================= */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((item, index) => (
                <Link
                  key={index}
                  to={item.labelurl || "#"}
                  ariaLabel={item.label || "Button"}
                  className={`
                    inline-flex items-center justify-center gap-2
                    px-8 py-4 rounded-lg
                    text-sm font-semibold uppercase tracking-wide
                    transition-all duration-300
                    ${
                      index === 0
                        ? "bg-[#c7d2fe] text-[#1e1b4b] hover:bg-white"
                        : "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
                    }
                  `}
                >
                  {item.label}
                  {index === 0 && <span className="text-lg">→</span>}
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
