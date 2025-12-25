import React from "react";
import SanityImage from "../commons/sanityImage"; // Ensure path is correct

// 1. Define the interface locally if not exists
interface LogoItem {
  _key: string;
  logoImage: any; // The image object from Sanity
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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        {title && (
          <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        )}

        {/* Logo Grid */}
        <div className="flex gap-8 flex-wrap justify-center items-center">
          {logo?.map((item, index) => (
            <div key={item._key || index} className="w-24 h-24 relative">
              {/* FIX: Access 'item.logoImage', not item directly */}
              {item.logoImage && (
                <SanityImage 
                  src={item.logoImage} 
                  alt="Feature Logo"
                  className="object-contain w-full h-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SilentFeaturesSection;