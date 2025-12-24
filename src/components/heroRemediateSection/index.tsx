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
    if (btn.link && typeof btn.link === "object") {
      return resolveUrl(btn.link as LinkType) || "#";
    }
    if (btn.url) return btn.url;
    return "#";
  };

  const renderTitle = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        <span className="text-indigo-600">{words[0]}</span>{" "}
        <span className="text-gray-900">
          {words.slice(1).join(" ")}
        </span>
      </>
    );
  };

  return (
    <section className="relative items-center justify-center flex w-full lg:h-screen bg-linear-to-b from-green-100 to-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">

          {/* ⭐ Rating */}
          {rating && (
            <div className="flex items-center gap-2 mb-6  text-xs sm:text-xl md:text-2xl lg:text-3xl text-gray-600">
              <span className="font-semibold">{rating.source}</span>
              <span>{rating.value}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          )}

          {/* 🧠 Title */}
          {title && (
            <h1 className="max-w-7xl text-xl sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold leading-tight mb-5" style={{ fontFamily: "Lobster" }}>
              {renderTitle(title)}
            </h1>
          )}

          {/* 📝 Description */}
          {description && (
            <div className="max-w-3xl text-xs sm:text-xs md:text-xl lg:text-2xl text-gray-600 mb-4 [&>p]:leading-relaxed [&>p]:mb-4">
              <RichText block={description} />
            </div>
          )}

          {/* 🔘 Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex sm:flex-row items-center gap-4">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={getButtonUrl(btn)}
                  className={`
                    inline-flex items-center justify-center
                    rounded-xl font-semibold transition-all duration-300
                    px-6 py-3 text-xs sm:text-3xl md:text-lg lg:text-3xl
                    ${
                      index === 0
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg"
                        : "bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50"
                    }
                  `}
                >
                  {btn.label}
                  {index === 0 && (
                    <span className="ml-2">→</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroRemediateSection;
