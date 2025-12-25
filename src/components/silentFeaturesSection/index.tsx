import { SilentFeaturesType } from "lib/sanity/types/page";
import React from "react";
import SanityImage from "../commons/sanityImage";

const SilentFeaturesSection: React.FC<SilentFeaturesType> = ({
  title,
  logo,
}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <div className="flex gap-4 flex-wrap">
        {logo?.map((item, index) => (
          <div key={index}>
            <SanityImage src={item?.asset?.url}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SilentFeaturesSection;

