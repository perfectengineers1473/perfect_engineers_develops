import React from "react";
import { ContactUsSectionType } from "../../../lib/sanity/types/page";
import { urlFor } from "../../../lib/image";

const ContactUsSection: React.FC<ContactUsSectionType> = ({
  maintitle,
  titletext,
  contactUs,
  businessHour,
}) => {
  return (
    <div className="container max-w-full bg-gray-500 py-10">
      {maintitle && (
        <h2 className="text-4xl font-bold text-center">
          {maintitle}
        </h2>
      )}

      {titletext && (
        <p className="text-center mt-4 max-w-2xl mx-auto">
          {titletext}
        </p>
      )}

      {contactUs && contactUs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {contactUs.map((item, index) => (
            <div key={index} className="text-center">
              {item.image && (
                <img
                  src={urlFor(item.image).url()}
                  alt={item.title || "contact"}
                  className="mx-auto mb-3"
                />
              )}

              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm">{item.text}</p>
              <p className="text-xs text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {businessHour && businessHour.length > 0 && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessHour.map((hour, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-3">
                {hour.iconImage && (
                  <img
                    src={urlFor(hour.iconImage).url()}
                    alt={hour.icontitle || "icon"}
                    className="w-8 h-8"
                  />
                )}
                <h4 className="font-semibold">
                  {hour.icontitle}
                </h4>
              </div>

              {hour.textInfo?.map((info, i) => (
                <div key={i} className="ml-11 text-sm">
                  <p>{info.textTime}</p>
                  <p className="text-gray-500">
                    {info.descriptions}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactUsSection;
