import React from "react";
import { AboutHeroSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const AboutHeroSection: React.FC<AboutHeroSectionType> = ({
  bgimage, btn, title
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          {bgimage && (
            <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <SanityImage src={bgimage} />
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            {title && (
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
                {title}
              </h1>
            )}

            {btn && btn.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {btn.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || item.url || "#"}
                    ariaLabel={item.label || "Button"}
                    className={`
                      inline-flex items-center justify-center
                      px-8 py-4
                      text-base font-semibold
                      rounded-lg transition-all duration-300
                      transform hover:scale-105 active:scale-95
                      shadow-lg hover:shadow-xl
                      ${
                        index === 0
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
