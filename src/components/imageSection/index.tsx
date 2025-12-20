import React from "react";
import { ImageSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const ImageSection: React.FC<ImageSectionType> = ({
  image
}) => {
  return (
    <section className="relative w-full bg-white py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {image && (
          <div className="w-full animate-fade-in">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <SanityImage src={image} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSection;
