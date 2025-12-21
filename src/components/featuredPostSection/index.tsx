import React, { useState } from "react";
import {
  FeaturedPostSectionType,
  ButtonType,
} from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const FeaturedPostSection: React.FC<FeaturedPostSectionType> = ({
  maintitle,
  title,
  image,
  button,
  features,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures =
    features && features.length > 3 && !showAll
      ? features.slice(0, 3)
      : features;

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
          <div className="flex justify-center mb-16 animate-fade-in">
            <div className="relative flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <SanityImage src={image} />
            </div>
          </div>
        )}

        {/* Features Grid */}
        {visibleFeatures && visibleFeatures.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleFeatures.map((item, index) => (
              <div
                key={item._key || index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: "both",
                }}
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
                  <p className="text-sm text-gray-500">{item.date}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Read More / Show Less */}
        {features && features.length > 3 && (
  <div className="flex justify-end mb-10">
    <button
      onClick={() => setShowAll(!showAll)}
      className="
        group inline-flex items-center gap-2
        text-base font-semibold text-blue-600
        hover:text-blue-700
        transition-all duration-300
      "
    >
      {showAll ? "Show Less" : "Read More"}

      {/* Arrow */}
      <svg
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
)}

      </div>
    </section>
  );
};

export default FeaturedPostSection;
