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
    <section className="relative w-full bg-linear-to-b from-green-100 to-gray-50 pt-16 pb-16 lg:pt-24 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-col items-center gap-4 text-center">
            {maintitle && (
              <span className="text-sm md:text-base lg:text-2xl font-medium text-gray-500 tracking-wide">
                {maintitle}
              </span>
            )}

            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 leading-tight max-w-3xl">
                {title}
              </h2>
            )}

            {/* divider */}
            <div className="mt-2 h-0.5 w-24 bg-gray-300"></div>
          </div>
        </div>

        {/* Main Image */}
        {image && (
          <div className="mb-10 animate-fade-in">
            <div className="relative mx-auto max-w-2xl rounded-4xl">
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-4xl">
                <SanityImage
                  src={image}
                  className="w-full h-full object-cover rounded-4xl"
                />
              </div>
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
          <div className="flex justify-end ">
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
