import React from "react";
import { ContactHeroSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";



const ContactHeroSection: React.FC<ContactHeroSectionType> = ({
  button,description,image,title
}) => {


  return (
      <div className="container bg-orange-700 max-w-full">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
           {title}
          </div>
          {description}
           <img src={urlFor(image).url()} />
               <div className="flex justify-center mt-6">
              {button?.map((item, index) => (
                <a
                  key={index}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              </div>
        </div>
  );
};

export default ContactHeroSection;
