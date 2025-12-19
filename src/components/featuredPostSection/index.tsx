import React from "react";
import {
  FeaturedPostSectionType,
  ButtonType,
} from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";

const FeaturedPostSection: React.FC<FeaturedPostSectionType> = ({
  maintitle,
  title,
  image,
  button,
  features,
}) => {
  return (
    <section className="container max-w-full py-16">
      {/* Main Title */}
      {maintitle && (
        <h4 className="text-sm uppercase text-gray-500 text-center mb-2">
          {maintitle}
        </h4>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center mb-10">
          {title}
        </h2>
      )}

      {/* Main Image */}
      {image && (
        <div className="flex justify-center mb-12">
          <img
            src={urlFor(image).url()}
            alt={title || "Featured image"}
            className="rounded-xl max-w-full"
          />
        </div>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item._key}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              {item.featureImage && (
                <img
                  src={urlFor(item.featureImage).url()}
                  alt={item.title || ""}
                  className="rounded-lg mb-4"
                />
              )}

              {item.type && (
                <p className="text-xs text-gray-500 mb-1">
                  {item.type}
                </p>
              )}

              {item.title && (
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>
              )}

              {item.date && (
                <p className="text-sm text-gray-400">
                  {item.date}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      {button && button.length > 0 && (
        <div className="flex justify-center gap-4 mt-10">
          {button.map((btn: ButtonType, index: number) => (
            <a
              key={index}
              href={btn.url}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedPostSection;
