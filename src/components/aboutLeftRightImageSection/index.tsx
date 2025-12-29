import React from "react";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";
import { AboutLeftRightImageSectionType } from "../../../lib/sanity/types/page";

const AboutLeftRightImageSection: React.FC<AboutLeftRightImageSectionType> = ({
  leftImageText = [],
  rightImageText = [],
}) => {
  const renderItem = (item: any, index: number, reverse = false) => {
    const textOrder = reverse ? "lg:order-2" : "lg:order-1";
    const imageOrder = reverse ? "lg:order-1" : "lg:order-2";

    return (
      <div
        key={item?._key || index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 lg:gap-y-12  justify-start"
      >
        {/* TEXT */}
        <div className={`${textOrder} flex flex-col justify-start items-start`}>
          {item?.title && (
            <h3 className="text-xl sm:text-3xl lg:text-2xl font-semibold text-gray-900 mb-4">
              {item.title}
            </h3>
          )}

          {item?.titleText && (
            <div className="text-base sm:text-lg lg:text-xl text-gray-600 text-justify max-w-4xl [&>p]:leading-loose lg:[&>p]:leading-[1.90] [&>p]:mb-2">
              <RichText block={item.titleText} />
            </div>
          )}
        </div>

        {/* IMAGE */}
        <div className={`${imageOrder} w-full`}>
          {item?.image && (
            <div className="relative w-full lg:w-full max-h-80 lg:max-h-[260px] overflow-hidden rounded-2xl shadow-lg mx-auto">
              <SanityImage
                src={item.image}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white">
      {/* Inner Container */}
      <div className="container mx-auto py-6 sm:py-6 lg:py-8  px-6 sm:px-6 lg:px-8 max-w-7xl space-y-14">
        {rightImageText.map((item, index) => renderItem(item, index, false))}

        {leftImageText.map((item, index) => renderItem(item, index, true))}
      </div>
    </section>
  );
};

export default AboutLeftRightImageSection;
