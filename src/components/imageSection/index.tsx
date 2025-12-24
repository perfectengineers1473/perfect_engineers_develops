import React from "react";
import { ImageSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const ImageSection: React.FC<ImageSectionType> = ({ image }) => {
  return (
    <section className="relative max-w-full max-h-max">
      {image && (
        <div className="relative max-w-full">
          <div className="relative w-full max-h-full">
            <SanityImage
              src={image}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSection;
