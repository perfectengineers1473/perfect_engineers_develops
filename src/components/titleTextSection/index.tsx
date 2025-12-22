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

  {/* Divider Line */}
  <div className="absolute top-7 left-0 w-full flex justify-center ">
    <span className="block h-px w-0 bg-gray-300 animate-divider"></span>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
    {/* Content Grid */}
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
      {visibleItems?.map((item, index) => (
        <div key={index} className="text-left">
          {item?.title && (
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-900 mb-1.5">
              {item.title}
            </h3>
          )}

          {item?.description && (
            <div className="text-base lg:text-2xl text-justify text-gray-600 mt-5 leading-relaxed lg:[&>p]:leading-[1.90] [&>p]:mb-5">
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
