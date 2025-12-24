import React, { useEffect, useState } from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const HomeHeroSection: React.FC<HomeHeroSectionType> = ({
  title,
  buttons,
  description,
  image,
  lists,
  mobileImage,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!lists || lists.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lists.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [lists]);

  return (
    <section className="relative w-full -mt-8 lg:h-screen overflow-hidden bg-white flex items-center">
      <div className="absolute lg:top-7 left-0 w-full flex justify-center items-start ">
    <span className="block h-px w-0 lg:bg-gray-400 animate-divider"></span>
  </div>
      {/* Wider container for large screens */}
      <div className="relative  z-10 mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 mb-10 lg:py-24 max-w-[2000px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-15">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* Title */}
            {title?.custom_rich_text && (
              <div className="mb-6 lg:mb-8">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-[115%] tracking-tight text-gray-900 text-justify">
                  <RichText block={title} />
                </div>
              </div>
            )}

            {/* Description */}
            {description?.custom_rich_text && (
              <div className="mb-6 lg:mb-8 max-w-xl xl:max-w-2xl mx-auto lg:mx-0 text-justify">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  <RichText block={description} />
                </div>
              </div>
            )}

            {/* Animated List (UNCHANGED) */}
            {lists && lists.length > 0 && (
              <div className="mb-10 flex justify-center lg:justify-start">
                <div className="relative h-9 md:h-10 overflow-hidden">
                  <div className="flex items-start gap-3 animate-fadeSlide">
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
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
                      {lists[activeIndex]}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                {buttons.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || item.url || "Home"}
                    ariaLabel={item.label || "Button"}
                    className={`px-8 py-4 text-base font-semibold lg:text-xl rounded-2xl transition-all duration-300 ${
                      index === 0
                        ? "bg-gray-900 hover:bg-gray-800 text-white"
                        : "bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Image Content */}
          {(image || mobileImage) && (
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-4xl">
                
                {/* Desktop Image */}
                {image && (
                  <div className="hidden lg:block rounded-3xl overflow-hidden shadow-2xl">
                    <SanityImage src={image} />
                  </div>
                )}

                {/* Mobile Image */}
                {mobileImage && (
                  <div className="block lg:hidden rounded-3xl overflow-hidden shadow-2xl">
                    <SanityImage src={mobileImage} />
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
