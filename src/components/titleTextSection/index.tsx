import React from "react";
import { TitleTextSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";

const TitleTextSection: React.FC<TitleTextSectionType> = ({
  titleText
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          {titleText?.map((item, index) => (
            <div 
              key={index}
              className="w-full text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              {item?.title && (
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {item.title}
                </h2>
              )}
              {item?.description && (
                <div className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto [&>p]:leading-relaxed [&>p]:mb-4">
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
