import React from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";
import Link from "../commons/link";

const DemoSection: React.FC<DemoSectionType> = ({
  title,
  heroImage,
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  companyLabel,
  regionLabel,
  sourceLabel,
  disclaimer,
  submitButtonText,
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {/* Title */}
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              {title}
            </h1>
          )}

          {/* Hero Image */}
          {heroImage && (
            <div className="w-full max-w-2xl mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <SanityImage src={heroImage} />
            </div>
          )}

          {/* Form Labels Info - Display as helper text */}
          {(firstNameLabel || lastNameLabel || emailLabel || companyLabel || regionLabel || sourceLabel) && (
            <div className="mb-8 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 mb-4">Form Fields:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {firstNameLabel && <span>{firstNameLabel}</span>}
                {lastNameLabel && <span>{lastNameLabel}</span>}
                {emailLabel && <span>{emailLabel}</span>}
                {companyLabel && <span>{companyLabel}</span>}
                {regionLabel && <span>{regionLabel}</span>}
                {sourceLabel && <span>{sourceLabel}</span>}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          {disclaimer && (
            <div className="mb-8 text-sm text-gray-600 max-w-2xl [&>p]:leading-relaxed [&>p]:mb-2">
              <RichText block={disclaimer} />
            </div>
          )}

          {/* Submit Button */}
          {submitButtonText && (
            <Link
              to={submitButtonText.link || submitButtonText.url || "#"}
              ariaLabel={submitButtonText.label || "Submit"}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {submitButtonText.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
