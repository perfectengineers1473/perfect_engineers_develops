import React from "react";
import { HeroRemediateSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";

const HeroRemediateSection: React.FC<HeroRemediateSectionType> = ({
  title,
  description,
  rating,
  buttons,
}) => {
  return (
    <section className="container bg-green-600 max-w-full py-20 text-center">
      
      {rating && (
        <div className="flex justify-center items-center gap-2 mb-4 text-sm text-white">
          {rating.source && <span>{rating.source}</span>}
          {rating.value && <span>{rating.value}</span>}
        </div>
      )}

      {title && (
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-6 text-white">
          {title}
        </h1>
      )}

      {description && (
        <div className="max-w-3xl mx-auto mb-10 text-white">
          <RichText block={description} />
        </div>
      )}

      {buttons && buttons.length > 0 && (
        <div className="flex justify-center gap-4">
          {buttons.map((btn, index) => (
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
