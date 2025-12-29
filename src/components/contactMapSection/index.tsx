import React from "react";
import { ContactMapSectionType } from "../../../lib/sanity/types/page";

const ContactMapSection: React.FC<ContactMapSectionType> = ({
  id,
  description,
  title,
}) => {
  return (
    <section id={id} className="w-full bg-white px-2 pb-12 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center w-full bg-gray-300 rounded-4xl p-4">
          {title && (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm sm:text-base lg:text-base text-gray-600">
              {description}
            </p>
          )}
        </div>

        {/* Map Wrapper */}
        <div className="w-full  overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8534940182476!2d72.57974617516356!3d22.992414279194836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85002c5fbe6b%3A0x5fee5e3896e82af!2sPERFECT%20ENGINEERS.!5e0!3m2!1sen!2sin!4v1766389428176!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
