import React from "react";
import { HeroRemediateSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";
import { resolveUrl } from "../../../lib/utils/resolveUrl";
import { LinkType } from "../../../lib/sanity/types/linkType";

const HeroRemediateSection: React.FC<HeroRemediateSectionType> = ({
  title,
  description,
  rating,
  buttons,
}) => {
  const getButtonUrl = (btn: any): string => {
    // Handle ButtonType with link property (LinkType object)
    if (btn.link && typeof btn.link === "object") {
      return resolveUrl(btn.link as LinkType) || "#";
    }
    // Handle simple button with url property (string)
    if (btn.url && typeof btn.url === "string") {
      return btn.url;
    }
    // Handle link as string (fallback)
    if (typeof btn.link === "string") {
      return btn.link;
    }
    return "#";
  };

  const getButtonLabel = (btn: any): string => {
    // Ensure label is always a string
    if (typeof btn.label === "string") {
      return btn.label;
    }
    return "";
  };

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
          {buttons.map((btn, index) => {
            const buttonUrl = getButtonUrl(btn);
            const buttonLabel = getButtonLabel(btn);
            
            if (!buttonLabel) return null;
            
            return (
              <a
                key={index}
                href={buttonUrl}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                {buttonLabel}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroRemediateSection;
