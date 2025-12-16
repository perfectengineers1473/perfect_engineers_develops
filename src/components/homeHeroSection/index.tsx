import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";


const HomeHeroSection: React.FC<HomeHeroSectionType> = ({
  title,
}) => {


  return (
      <div className="container">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
            {title?.custom_rich_text && (
              <div className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px]  leading-[110%] tracking-[-0.02em] text-white font-bold text-center [&>p]:leading-[110%]">
                 <RichText block={title} />
              </div>
            )}
              </div>
          </div>
        </div>
  );
};

export default HomeHeroSection;


vinit