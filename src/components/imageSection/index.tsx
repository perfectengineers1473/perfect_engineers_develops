import React from "react";
import { ImageSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";



const ImageSection: React.FC<ImageSectionType> = ({
  image
}) => {


  return (
      <div className="container bg-amber-950 max-w-full" >
       <img src={urlFor(image).url()} />
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          </div>
        </div>
  );
};

export default ImageSection;
