import React from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";

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
    <section className="relative w-full bg-linear-to-b from-[#2b2f8f] via-[#1f246a] to-[#15184f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        {title && (
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-16">
            {title}
          </h1>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">

          {/* ================= LEFT FORM ================= */}
          <div className="max-w-xl">

            {/* INPUT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {firstNameLabel && (
                <div>
                  <label className="block text-sm text-white mb-2">
                    {firstNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First name"
                    className="w-full h-12 rounded-lg bg-[#1c1f5c] px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {lastNameLabel && (
                <div>
                  <label className="block text-sm text-white mb-2">
                    {lastNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last name"
                    className="w-full h-12 rounded-lg bg-[#1c1f5c] px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {emailLabel && (
                <div>
                  <label className="block text-sm text-white mb-2">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 rounded-lg bg-[#1c1f5c] px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {companyLabel && (
                <div>
                  <label className="block text-sm text-white mb-2">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company"
                    className="w-full h-12 rounded-lg bg-[#1c1f5c] px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}
            </div>

            {/* REGION */}
            {regionLabel && (
              <div className="mb-6">
                <label className="block text-sm text-white mb-2">
                  {regionLabel}
                </label>
                <select className="w-full h-12 rounded-lg bg-[#1c1f5c] px-4 text-white focus:outline-none">
                  <option>Company Region</option>
                </select>
                <p className="text-red-400 text-xs mt-1">
                  Please complete this required field.
                </p>
              </div>
            )}

            {/* SOURCE */}
            {sourceLabel && (
              <div className="mb-6">
                <label className="block text-sm text-white mb-2">
                  {sourceLabel}
                </label>
                <textarea
                  placeholder="Type your message"
                  className="w-full h-32 rounded-lg bg-[#1c1f5c] px-4 py-3 text-white placeholder:text-white/50 focus:outline-none"
                />
              </div>
            )}

            {/* DISCLAIMER */}
            {disclaimer && (
              <div className="text-xs text-white/70 leading-relaxed mb-6">
                <RichText block={disclaimer} />
              </div>
            )}

            {/* SUBMIT BUTTON */}
            {submitButtonText?.label && (
              <a
                href={submitButtonText.link || "#"}
                className="flex items-center justify-center w-full h-12 rounded-lg bg-[#c7d2fe] text-[#1e1b4b] font-semibold hover:bg-white transition"
              >
                {submitButtonText.label}
              </a>
            )}
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          {heroImage && (
            <div className="flex justify-center lg:justify-end items-start">
              <div className="w-[280px] sm:w-[420px] lg:w-[460px] rounded-2xl overflow-hidden shadow-2xl bg-white">
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
