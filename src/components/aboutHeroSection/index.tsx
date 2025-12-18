import React from "react";
import { AboutHeroSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";


const AboutHeroSection: React.FC<AboutHeroSectionType> = ({
  title,bgimage
}) => {

  return (
     <div className="container">
      <h1 className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px] text-white font-bold text-center">
        {title}
      </h1>
      <img src={urlFor(bgimage).url()} />

    </div>
  );
};

export default AboutHeroSection;
