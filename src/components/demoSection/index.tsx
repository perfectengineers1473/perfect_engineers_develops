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
    <section className="relative w-full bg-[#1e293b] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        {title && (
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
            {title}
          </h1>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Form Section - Left Side */}
          <div className="flex-1 w-full lg:w-1/2">
            {(firstNameLabel || lastNameLabel || emailLabel || companyLabel || regionLabel || sourceLabel) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {firstNameLabel && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{firstNameLabel}</label>
                    <div className="h-12 bg-white/10 border border-white/20"></div>
                  </div>
                )}
                {lastNameLabel && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{lastNameLabel}</label>
                    <div className="h-12 bg-white/10 border border-white/20"></div>
                  </div>
                )}
                {emailLabel && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{emailLabel}</label>
                    <div className="h-12 bg-white/10 border border-white/20"></div>
                  </div>
                )}
                {companyLabel && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{companyLabel}</label>
                    <div className="h-12 bg-white/10 border border-white/20"></div>
                  </div>
                )}
                {regionLabel && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">{regionLabel}</label>
                    <div className="h-12 bg-white/10 border border-white/20"></div>
                  </div>
                )}
                {sourceLabel && (
                  <div className="sm:col-span-2">
                    <label className="block text-white text-sm font-medium mb-2">{sourceLabel}</label>
                    <div className="h-32 bg-white/10 border border-white/20"></div>
                  </div>
                )}
              </div>
            )}

            {/* Disclaimer/Checkbox */}
            {disclaimer && (
              <div className="mb-6 text-sm text-white/80 [&>p]:leading-relaxed [&>p]:mb-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <RichText block={disclaimer} />
                </label>
              </div>
            )}

            {/* Submit Button */}
            {submitButtonText && (
              <Link
                to={submitButtonText.link || submitButtonText.url || "#"}
                ariaLabel={submitButtonText.label || "Submit"}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-base font-semibold transition-all duration-300"
              >
                {submitButtonText.label}
              </Link>
            )}
          </div>

          {/* Image Section - Right Side */}
          {heroImage && (
            <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <SanityImage src={heroImage} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
