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
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[110%] tracking-tight text-gray-900 [&>p]:leading-[110%] [&>p]:mb-0 animate-fade-in-up">
                  <RichText block={title} />
                </div>
              </div>
            )}

            {/* Description */}
            {description?.custom_rich_text && (
              <div className="mb-6 lg:mb-8">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 [&>p]:leading-relaxed [&>p]:mb-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
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
                      px-6 sm:px-8 py-3 sm:py-4
                      text-sm sm:text-base font-semibold
                      rounded-lg transition-all duration-300
                      transform hover:scale-105 active:scale-95
                      shadow-lg hover:shadow-xl
                      ${
                        index === 0
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                          : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
