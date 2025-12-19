import React from "react";
import { ContactMapSectionType } from "../../../lib/sanity/types/page";



const ContactMapSection: React.FC<ContactMapSectionType> = ({
  button,description,title
}) => {


  return (
      <div className="container bg-purple-400 max-w-full h-56 text-3xl">
        <div className="flex flex-col items-center gap-4 max-w-[1920px] w-full mx-auto">
          {title}
          </div>
          {description}
           {button && (
          <a
            href={button.link as string}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            {button.label}
          </a>
        )}
        </div>
  );
};

export default ContactMapSection;
