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
        className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start"
      >
        {/* TEXT */}
        <div className={`${textOrder} flex flex-col justify-start lg:mt-1`}>
          {item?.title && (
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              {item.title}
            </h3>
          )}

          {item?.titleText && (
            <div className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-2xl text-justify [&>p]:leading-loose lg:[&>p]:leading-[1.90] [&>p]:mb-5">
              <RichText block={item.titleText} />
            </div>
          )}
        </div>

        {/* IMAGE */}
        <div className={`${imageOrder} w-full`}>
          {item?.image && (
            <div className="relative w-full max-h-[420px] overflow-hidden rounded-2xl shadow-lg">
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
    <section className="relative w-full bg-white pt-5 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl space-y-9">
        {rightImageText.map((item, index) =>
          renderItem(item, index, false)
        )}

        {leftImageText.map((item, index) =>
          renderItem(item, index, true)
        )}
      </div>
    </section>
  );
};

export default AboutLeftRightImageSection;
