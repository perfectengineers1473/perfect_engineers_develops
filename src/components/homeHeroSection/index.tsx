import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const HomeHeroSection: React.FC<HomeHeroSectionType> = ({
  title, buttons, description, image, lists, mobileImage
}) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
            {/* Title */}
            {title?.custom_rich_text && (
              <div className="mb-6 lg:mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[110%] tracking-tight text-gray-900 [&>p]:leading-[110%] [&>p]:mb-0">
                  <RichText block={title} />
                </div>
              </div>
            )}

            {/* Description */}
            {description?.custom_rich_text && (
              <div className="mb-6 lg:mb-8">
                <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 [&>p]:leading-relaxed [&>p]:mb-0">
                  <RichText block={description} />
                </div>
              </div>
            )}

            {/* Lists */}
            {lists && lists.length > 0 && (
              <div className="mb-8 lg:mb-10 flex flex-col gap-3 sm:gap-4">
                {lists.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 justify-center lg:justify-start"
                  >
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-sm sm:text-base md:text-lg text-gray-700 flex-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                {buttons.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || item.url || "#"}
                    ariaLabel={item.label || "Button"}
                    className={`
                      inline-flex items-center justify-center
                      px-8 py-4
                      text-base font-semibold
                      transition-all duration-300
                      ${
                        index === 0
                          ? "bg-gray-900 hover:bg-gray-800 text-white"
                          : "bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Image Content - Display as foreground element when images are provided */}
          {(image || mobileImage) && (
            <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Desktop Image */}
                {image && (
                  <div className="hidden lg:block relative w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <SanityImage 
                      src={image}
                    />
                  </div>
                )}
                {/* Mobile Image */}
                {mobileImage && (
                  <div className="block lg:hidden relative w-full rounded-2xl overflow-hidden shadow-2xl">
                    <SanityImage 
                      src={mobileImage}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default HomeHeroSection;
