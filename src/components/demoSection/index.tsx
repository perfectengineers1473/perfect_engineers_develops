import React from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";


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
    <section className="container max-w-full py-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side – Content */}
        <div>
          {title && (
            <h2 className="text-[32px] sm:text-[40px] font-bold mb-8">
              {title}
            </h2>
          )}

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <input
              type="text"
              placeholder={firstNameLabel || "First Name"}
              className="border rounded-md px-4 py-3 w-full"
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder={lastNameLabel || "Last Name"}
              className="border rounded-md px-4 py-3 w-full"
            />

            {/* Email */}
            <input
              type="email"
              placeholder={emailLabel || "Email"}
              className="border rounded-md px-4 py-3 w-full sm:col-span-2"
            />

            {/* Company */}
            <input
              type="text"
              placeholder={companyLabel || "Company"}
              className="border rounded-md px-4 py-3 w-full sm:col-span-2"
            />

            {/* Region */}
            <select className="border rounded-md px-4 py-3 w-full sm:col-span-2">
              <option>{regionLabel || "Select Region"}</option>
            </select>

            {/* Source */}
            <textarea
              placeholder={sourceLabel || "How did you hear about us?"}
              className="border rounded-md px-4 py-3 w-full sm:col-span-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md sm:col-span-2 hover:bg-gray-800 transition"
            >
              {submitButtonText || "Submit"}
            </button>
          </form>

          {/* Disclaimer */}
          {disclaimer && (
            <div className="mt-4 text-sm text-gray-500">
              {/* Render RichText here */}
            </div>
          )}
        </div>

        {/* Right Side – Image */}
        {heroImage && (
          <div className="flex justify-center">
            <img
              src={urlFor(heroImage).url()}
              alt="Demo"
              className="rounded-xl max-w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;
