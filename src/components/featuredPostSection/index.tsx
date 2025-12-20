import React from "react";
import {
  FeaturedPostSectionType,
  ButtonType,
} from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const FeaturedPostSection: React.FC<FeaturedPostSectionType> = ({
  maintitle,
  title,
  image,
  button,
  features,
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          {maintitle && (
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
              {maintitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              {title}
            </h2>
          )}
        </div>

        {/* Main Image */}
        {image && (
          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <SanityImage src={image} />
            </div>
          </div>
        )}

        {/* Features Grid */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((item, index) => (
              <div
                key={item._key || index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                {item.featureImage && (
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <SanityImage src={item.featureImage} />
                  </div>
                )}

                {item.type && (
                  <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-2">
                    {item.type}
                  </p>
                )}

                {item.title && (
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                )}

                {item.date && (
                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        {button && button.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {button.map((btn: ButtonType, index: number) => (
              <Link
                key={index}
                to={btn.link || btn.url || "#"}
                ariaLabel={btn.label || "Button"}
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
                {btn.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPostSection;
