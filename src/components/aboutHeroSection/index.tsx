import React from "react";
import { AboutHeroSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";


const AboutHeroSection: React.FC<AboutHeroSectionType> = ({
  bgimage,btn,title
}) => {

  return (
     <div className="container bg-red-600 max-w-full">
      <h1 className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px] text-white font-bold text-center">
        {title}
      </h1>
      <img src={urlFor(bgimage).url()} />
     <div className="flex justify-center mt-6">
    {btn?.map((item, index) => (
      <a
        key={index}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        {item.label}
      </a>
    ))}
  </div>

    </div>
  );
};

export default AboutHeroSection;
