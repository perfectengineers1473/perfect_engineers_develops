import React from "react";
import { AboutHeroSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const AboutHeroSection: React.FC<AboutHeroSectionType> = ({
  bgimage,
  btn,
  title,
}) => {
  return (
    <section className="relative w-full min-h-[30vh] lg:min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔹 Background Image */}
      {bgimage && (
        <div className="absolute inset-0 z-0">
          <SanityImage
            src={bgimage}
            className="w-full h-full object-cover scale-110 blur-md"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* 🔹 Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">

          {/* Title */}
          {title && (
            <h1 className="text-white text-xl sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
              {title}
            </h1>
          )}

          {/* Buttons */}
          {btn && btn.length > 0 && (
            <div className="flex sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              {btn.map((item, index) => (
                <Link
                  key={index}
                  to={item.link || item.url || "Home"}
                  ariaLabel={item.label || "Button"}
                  className={`
          inline-flex items-center justify-center
          rounded-2xl font-semibold
          transition-all duration-300
          px-4 py-2 text-[10px]
          sm:px-7 sm:py-3.5 sm:text-base
          lg:px-10 lg:py-4 lg:text-lg

          ${index === 0
                      ? "bg-blue-400 hover:bg-blue-400/55 text-white"
                      : "bg-transparent border-2 border-white text-white hover:bg-white/10"
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

export default AboutHeroSection;
