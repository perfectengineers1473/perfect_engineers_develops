import React from "react";
import { FeaturedPostSectionType } from "../../../lib/sanity/types/page";



const FeaturedPostSection: React.FC<FeaturedPostSectionType> = ({
  _type,buttonText,buttonUrl,features,id,image,maintitle,title
}) => {


  return (
      <div className="container">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          </div>
        </div>
  );
};

export default FeaturedPostSection;
