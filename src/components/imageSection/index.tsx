import React from "react";
import { ImageSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const ImageSection: React.FC<ImageSectionType> = ({
  image
}) => {
  return (
    <section className="relative w-full bg-white py-4 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {image && (
          <div className="w-full">
            <div className="relative w-full overflow-hidden">
              <SanityImage src={image} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSection;
