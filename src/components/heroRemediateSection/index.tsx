import React from "react";
import { HeroRemediateSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";
import { resolveUrl } from "../../../lib/utils/resolveUrl";
import { LinkType } from "../../../lib/sanity/types/linkType";
import Link from "next/link";

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

  // Helper to split title and apply purple to first part
  const renderTitle = (titleText: string) => {
    // Try to split on common patterns, but if not found, style the whole title
    const parts = titleText.split(' vulnerabilities');
    if (parts.length === 2) {
      return (
        <>
          <span className="text-[#9333ea]">{parts[0]}</span>
          <span className="text-gray-900"> vulnerabilities</span>
        </>
      );
    }
    // Fallback: style the whole title in purple
    return <span className="text-[#9333ea]">{titleText}</span>;
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {rating && (
            <div className="flex justify-center items-center gap-2 mb-6 text-sm text-gray-600">
              {rating.source && (
                <span className="font-semibold">{rating.source}</span>
              )}
              {rating.value && (
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="font-bold text-gray-900 ml-1">{rating.value}</span>
                </div>
              )}
            </div>
          )}

          {title && (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              {renderTitle(title)}
            </h1>
          )}

          {description && (
            <div className="max-w-3xl mx-auto mb-12 text-lg sm:text-xl text-gray-600 [&>p]:leading-relaxed [&>p]:mb-4">
              <RichText block={description} />
            </div>
          )}

          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {buttons.map((btn, index) => {
                const buttonUrl = getButtonUrl(btn);
                const buttonLabel = getButtonLabel(btn);
                
                if (!buttonLabel) return null;
                
                return (
                  <Link
                    key={index}
                    href={buttonUrl || "#"}
                    className={`
                      inline-flex items-center justify-center
                      px-8 py-4
                      text-base font-semibold
                      transition-all duration-300
                      ${
                        index === 0
                          ? "bg-[#9333ea] hover:bg-[#7e22ce] text-white"
                          : "bg-transparent border-2 border-[#9333ea] text-[#9333ea] hover:bg-[#9333ea]/10"
                      }
                    `}
                  >
                    {buttonLabel}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroRemediateSection;
