import React, { useState } from "react";
import { TitleTextSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";

const TitleTextSection: React.FC<TitleTextSectionType> = ({
  titleText,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems =
    titleText && titleText.length > 2 && !showAll
      ? titleText.slice(0, 2)
      : titleText;

  return (
    <section className="relative w-full bg-white py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {visibleItems?.map((item, index) => (
            <div key={index} className="text-left">
              {item?.title && (
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
              )}

              {item?.description && (
                <div className="text-base text-justify text-gray-600 leading-relaxed [&>p]:mb-4">
                  <RichText block={item.description} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        {titleText && titleText.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-600 font-medium flex items-center gap-2 hover:underline transition"
            >
              {showAll ? "See less" : "See more"}
              <span
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
    
  );
};

export default TitleTextSection;
