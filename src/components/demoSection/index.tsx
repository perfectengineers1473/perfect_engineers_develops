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
    <section className="relative w-full bg-linear-to-b from-white via-green-200 to-purple-200 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        {title && (
          <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-4xl font-bold mb-16">
            {title}
          </h1>
        )}

        {/* MAIN FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* ================= IMAGE ================= */}
          {heroImage && (
            <div className="order-1 lg:order-2 w-full lg:w-[60%] lg:mt-6 flex justify-center lg:justify-end">
              <div className="w-[280px] sm:w-[420px] lg:w-[560px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <SanityImage src={heroImage} />
              </div>
            </div>
          )}

          {/* ================= FORM ================= */}
<div className="order-2 lg:order-1 w-full lg:w-[60%] max-w-xl 
  bg-transparent shadow-xl shadow-black/30 
  rounded-2xl border-t border-gray-300/65 p-8">


            {/* INPUT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {firstNameLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {firstNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First name"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {lastNameLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {lastNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last name"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {emailLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}

              {companyLabel && (
                <div>
                  <label className="block text-sm text-gray-900 mb-2">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company"
                    className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 placeholder:text-gray-900/45 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              )}
            </div>

            {/* REGION */}
            {regionLabel && (
              <div className="mb-6">
                <label className="block text-sm text-gray-900 mb-2">
                  {regionLabel}
                </label>
                <select className="w-full h-12 rounded-lg bg-white/55 px-4 text-gray-900 focus:outline-none">
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
                <label className="block text-sm text-gray-900 mb-2">
                  {sourceLabel}
                </label>
                <textarea
                  placeholder="Type your message"
                  className="w-full h-32 rounded-lg bg-white/55 px-4 py-3 text-gray-900 placeholder:text-gray-900/45 focus:outline-none"
                />
              </div>
            )}

            {/* DISCLAIMER */}
            {disclaimer && (
              <div className="text-xs text-gray-900 leading-relaxed mb-6">
                <RichText block={disclaimer} />
              </div>
            )}

            {/* SUBMIT BUTTON */}
            {submitButtonText?.label && (
              <a
                href={submitButtonText.link || "#"}
                className="flex items-center justify-center w-full h-12 rounded-lg text-white bg-gray-800 font-semibold hover:text-white hover:bg-gray-800/60 transition"
              >
                {submitButtonText.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
