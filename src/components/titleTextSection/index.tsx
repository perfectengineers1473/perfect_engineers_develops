import React from "react";
import { TitleTextSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";

const TitleTextSection: React.FC<TitleTextSectionType> = ({
  titleText
}) => {
  return (
    <section className="relative w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {titleText?.map((item, index) => (
            <div 
              key={index}
              className="w-full text-left"
            >
              {item?.title && (
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
              )}
              {item?.description && (
                <div className="text-lg sm:text-xl text-gray-600 max-w-4xl [&>p]:leading-relaxed [&>p]:mb-4">
                  <RichText block={item?.description} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitleTextSection;
