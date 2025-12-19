import React from "react";
import {
  HeroRemediateSectionType,
  ButtonType,
} from "../../../lib/sanity/types/page";

const HeroRemediateSection: React.FC<HeroRemediateSectionType> = ({
  title,
  description,
  rating,
  buttons,
}) => {
  
  console.log(title,"prem");
  return (
    <section className="container bg-green-600 max-w-full py-20 text-center">
      {/* Rating */}
      {rating && (
        <div className="flex justify-center items-center gap-2 mb-4 text-sm text-gray-500">
          {rating.source && <span>{rating.source}</span>}
          {rating.value && <span>{rating.value}</span>}
        </div>
      )}

      {/* Title */}
      {title && (
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-6">
          {title}
        </h1>
      )}

      {/* Description */}
      {description && (
        <div className="max-w-3xl mx-auto mb-10 text-gray-600">
          {/* Render RichText here */}
        </div>
      )}

      {/* Buttons */}
      {buttons && buttons.length > 0 && (
        <div className="flex justify-center gap-4">
          {buttons.map((btn: ButtonType, index: number) => (
            <a
              key={index}
              href={btn.url}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroRemediateSection;
