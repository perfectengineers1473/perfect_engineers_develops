import React from "react";
import { HomeRightImageSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";
import Link from "../commons/link";

const HomeRightImageSection: React.FC<HomeRightImageSectionType> = ({
  items
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-16 lg:gap-24">
          {items?.map((i, index) => (
            <div 
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Content Section - Left */}
              <div className="w-full lg:w-1/2 flex flex-col lg:items-start lg:text-left">
                {i?.title && (
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {i.title}
                  </h2>
                )}

                {i?.titleText && (
                  <div className="text-lg sm:text-xl text-gray-600 mb-8 [&>p]:leading-relaxed [&>p]:mb-4">
                    <RichText block={i.titleText} />
                  </div>
                )}

                {i?.button && (
                  <Link
                    to={i.button.link || i.button.url || "#"}
                    ariaLabel={i.button.label || "Button"}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-base font-semibold transition-all duration-300"
                  >
                    {i.button.label}
                  </Link>
                )}
              </div>

              {/* Image Section - Right */}
              {i?.image && (
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-lg overflow-hidden">
                    <SanityImage src={i.image} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRightImageSection;
