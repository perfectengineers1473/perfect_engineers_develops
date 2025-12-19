import React from "react";
import { HomeRightImageSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import RichText from "../commons/richText";



const HomeRightImageSection: React.FC<HomeRightImageSectionType> = ({
  items
}) => {


  return (
    <div className="container bg-sky-950 max-w-full text-4xl ">
      <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
        {items?.map((i, index) => (
          <div key={index}>
            {i?.button?.label}
            {i?.image && (
              <div className="w-full h-full">
                <SanityImage src={i?.image} />
              </div>
            )}
            {i?.title && (
            <div className="text-white text-center">
             {i?.title}
            </div>
          )}
          {i?.titleText && (
            <div className="text-white text-center">
              <RichText block={i?.titleText} />
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRightImageSection;
