import React from "react";
import { ContactMapSectionType } from "../../../lib/sanity/types/page";
import Link from "../commons/link";

const ContactMapSection: React.FC<ContactMapSectionType> = ({
  button, description, title
}) => {
  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl">
              {description}
            </p>
          )}

          {button && (
            <Link
              to={button.link || button.url || "#"}
              ariaLabel={button.label || "Button"}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
