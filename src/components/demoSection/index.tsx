import React from "react";
import { DemoSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";
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
    <div className="container bg-emerald-500 max-w-full">
      <h1 className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px] text-white font-bold text-center">
        {title}
      </h1>
      <img src={urlFor(heroImage).url()} />
      <div className="flex justify-center mt-6">
        {firstNameLabel}{lastNameLabel}{emailLabel}{companyLabel}{regionLabel}{sourceLabel}
      </div>
      {disclaimer && (
        <div className="text-white text-center">
          <RichText block={disclaimer} />
        </div>
      )}
      {submitButtonText && (
        <a
          href={submitButtonText.link as string}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          {submitButtonText.label}
        </a>)}
    </div>
  );
};

export default DemoSection;
