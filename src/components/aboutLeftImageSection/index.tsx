import React from "react";
import RichText from "../commons/richText";
import SanityImage from "../commons/sanityImage";

const AboutLeftImageSection: React.FC<any> = ({
  rightImageText,
  leftImageText,
}) => {
  const firstRight = Array.isArray(rightImageText) ? rightImageText[0] : null;
  const firstLeft = Array.isArray(leftImageText) ? leftImageText[0] : null;

  const title = firstRight?.titleText || firstLeft?.titleText;
  const image = firstRight?.image || firstLeft?.image;
  const description = firstRight?.titleText || firstLeft?.titleText;

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          {/* Title */}
          {title && (
            <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 [&>p]:leading-tight [&>p]:mb-0">
                <RichText block={title} />
              </div>
            </div>
          )}

          {/* Image */}
          {image && (
            <div className="w-full max-w-5xl animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <SanityImage src={image} />
              </div>
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="text-lg sm:text-xl text-gray-600 [&>p]:leading-relaxed [&>p]:mb-4">
                <RichText block={description} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutLeftImageSection;
