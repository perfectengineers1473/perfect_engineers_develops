import React from "react";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";

const AboutLeftImageSection: React.FC<any> = ({
  rightImageText,
  leftImageText,
}) => {
  const firstRight = Array.isArray(rightImageText) ? rightImageText[0] : null;
  const firstLeft = Array.isArray(leftImageText) ? leftImageText[0] : null;

  if (typeof window !== "undefined") {
    console.log("ABOUT LEFT IMAGE SECTION DATA:", { rightImageText, leftImageText });
  }

  const title = firstRight?.titleText || firstLeft?.titleText;
  const image = firstRight?.image || firstLeft?.image;
  const description = firstRight?.titleText || firstLeft?.titleText;

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
        <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
          {title && (
            <div className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px] leading-[110%] tracking-[-0.02em] text-white font-bold text-center [&>p]:leading-[110%]">
              <RichText block={title} />
            </div>
          )}
          {image && (
            <div className="w-full h-full">
              <SanityImage src={image} />
            </div>
          )}
          {description && (
            <div className="text-white text-center">
              <RichText block={description} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutLeftImageSection;
