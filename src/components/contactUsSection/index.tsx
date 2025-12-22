import React from "react";
import { ContactUsSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const ContactUsSection: React.FC<ContactUsSectionType> = ({
  maintitle,
  titletext,
  contactUs,
  businessHour,
}) => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          {maintitle && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {maintitle}
            </h2>
          )}

          {titletext && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {titletext}
            </p>
          )}
        </div>

        {/* Contact Cards */}
        {contactUs && contactUs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactUs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {item.image && (
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <SanityImage src={item.image} />
                    </div>
                  </div>
                )}

                {item.title && (
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                )}

                {item.text && (
                  <p className="text-base text-gray-700 mb-2">
                    {item.text}
                  </p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Business Hours */}
        {businessHour && businessHour.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {businessHour.map((hour, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {hour.iconImage && (
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <SanityImage src={hour.iconImage} />
                    </div>
                  )}
                  {hour.icontitle && (
                    <h4 className="text-xl font-bold text-gray-900">
                      {hour.icontitle}
                    </h4>
                  )}
                </div>

                {hour.textInfo && hour.textInfo.length > 0 && (
                  <div className="space-y-4">
                    {hour.textInfo.map((info, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-gray-200 last:border-0">
                        {info.textTime && (
                          <p className="text-base font-semibold text-gray-900">
                            {info.textTime}
                            <br></br>
                            {info.textTime1}
                            <br></br>
                            {info.textTime2}
                            <br></br>
                            {info.textTime3}
                            <br></br>
                            {info.textTime4}
                          </p>
                        )}
                        {info.descriptions && (
                          <p className="text-sm text-gray-600">
                            {info.descriptions}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUsSection;
