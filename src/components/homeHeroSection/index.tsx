import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types/page";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";


const HomeHeroSection: React.FC<HomeHeroSectionType> = ({
  title, buttons, description, image, lists, mobileImage
}) => {


  return (
    <div className="container bg-pink-400  max-w-full">
      <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
        <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
          {title?.custom_rich_text && (
            <div className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px]  leading-[110%] tracking-[-0.02em] text-white font-bold text-center [&>p]:leading-[110%]">
              <RichText block={title} />
            </div>
          )}
          {description?.custom_rich_text && (
            <div className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px]  leading-[110%] tracking-[-0.02em] text-white font-bold text-center [&>p]:leading-[110%]">
              <RichText block={description} />
            </div>
          )}
          {image && (
            <div className="w-full h-full">
              <SanityImage src={image} />
            </div>
          )}
          {mobileImage && (
            <div className="w-full h-full">
              <SanityImage src={mobileImage} />
            </div>
          )}
          {buttons?.map((item, index) => (
            <a
              key={index}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              {item.label}
            </a>
          ))}
          {lists?.map((item,index)=>(
            <div key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
