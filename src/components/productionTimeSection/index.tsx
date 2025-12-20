import React from "react";
import { ProductionTimeSectionType } from "../../../lib/sanity/types/page";
import Link from "../commons/link";

const ProductionTimeSection: React.FC<ProductionTimeSectionType> = ({
  Production, buttons
}) => {
  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Production Stats */}
          {Production && Production.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 w-full">
              {Production.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  {item?.value && (
                    <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                      {item.value}
                    </div>
                  )}
                  {item?.label && (
                    <p className="text-lg text-gray-700">
                      {item.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              {buttons.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || item.url || "#"}
                  ariaLabel={item.label || "Button"}
                  className={`
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-base font-semibold
                    rounded-lg transition-all duration-300
                    transform hover:scale-105 active:scale-95
                    shadow-lg hover:shadow-xl
                    ${
                      index === 0
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400"
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
