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
   <section className="relative w-full bg-white py-6 sm:py-6 lg:py-14  px-6 sm:px-6 lg:px-8  max-w-7xl items-center mx-auto">

  {/* Divider Line */}
  <div className="absolute top-0 left-0 w-full flex justify-center ">
    <span className="block h-px w-0 bg-gray-300 animate-divider"></span>
  </div>

  <div className="container mx-auto">
    {/* Content Grid */}
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
      {visibleItems?.map((item, index) => (
        <div key={index} className="text-left">
          {item?.title && (
            <h3 className="text-xl sm:text-3xl lg:text-2xl font-semibold text-gray-900 mb-4">
              {item.title}
            </h3>
          )}

          {item?.description && (
            <div className="text-base sm:text-lg lg:text-xl text-justify text-gray-600 mt-5 [&>p]:leading-loose lg:[&>p]:leading-[1.90] [&>p]:mb-5">
              <RichText block={item.description} />
            </div>
          )}
        </div>
      ))}
    </div>

    {titleText && titleText.length > 2 && (
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium flex items-center gap-2 lg:text-xl hover:underline transition"
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
