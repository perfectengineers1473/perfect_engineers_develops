import React from "react";
import SanityImage from "../commons/sanityImage";
import Marquee from "react-fast-marquee";

interface LogoItem {
  _key: string;
  logoImage: any; 
}

interface SilentFeaturesProps {
  title?: string;
  logo?: LogoItem[];
}

const SilentFeaturesSection: React.FC<SilentFeaturesProps> = ({
  title,
  logo,
}) => {
  return (
    <section className="pb-10 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="flex justify-center mb-8">
            <h2 className="text-2xl font-bold text-center px-8 py-4 text-gray-500 border border-gray-300 rounded-b-2xl rounded-t-none bg-purple-300/60 inline-block">
              {title}
            </h2>
          </div>
        )}
        <Marquee autoFill speed={40} className="py-4">
          <div className="flex items-center gap-10 px-10">
            {logo?.map((item, index) => (
              <div
                key={item._key || index}
                className="w-28 h-28 flex items-center justify-center"
              >
                {item.logoImage && (
                  <SanityImage
                    src={item.logoImage}
                    alt="Feature Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SilentFeaturesSection;
