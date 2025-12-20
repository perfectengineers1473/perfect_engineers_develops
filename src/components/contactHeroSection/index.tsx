import React from "react";
import { ContactHeroSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";
import RichText from "../commons/richText";

const ContactHeroSection: React.FC<ContactHeroSectionType> = ({
  button, description, image, title
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {/* Title */}
          {title && (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <div className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl [&>p]:leading-relaxed [&>p]:mb-0">
              <RichText block={{ custom_rich_text: description }} />
            </div>
          )}

          {/* Image */}
          {image && (
            <div className="w-full max-w-4xl mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <SanityImage src={image} />
            </div>
          )}

          {/* Buttons */}
          {button && button.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {button.map((item, index) => (
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
    </section>
  );
};

export default ContactHeroSection;
