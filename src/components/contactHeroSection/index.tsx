import React from "react";
import { ContactHeroSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const ContactHeroSection: React.FC<ContactHeroSectionType> = ({
  button,
  description,
  image,
  title,
}) => {
  return (
    <section className="w-full lg:min-h-screen flex lg:items-center bg-linear-to-b from-green-200 via-green-50 to-gray-100 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FLEX WRAPPER */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
          {/* LEFT CONTENT */}
          <div className="flex flex-col text-left max-w-xl animate-fade-up">
            <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              {title.split(" ").map((word, i) => (
                <span key={i} className={i === 2 ? "text-purple-600" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>

            {description && (
              <p
                className="
                text-base sm:text-lg
                text-gray-600
                leading-relaxed
                mb-10
              "
              >
                {description}
              </p>
            )}

            {button && button.length > 0 && (
              <div className="flex gap-4">
                {button.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || item.url || "#"}
                    ariaLabel={item.label || "Button"}
                    className={`
                     inline-flex items-center justify-center
                    rounded-xl font-semibold transition-all duration-300
                    px-6 py-3 text-xs sm:text-3xl md:text-lg lg:text-xl
                      ${
                        index === 0
                          ? "bg-purple-600 text-white hover:bg-purple-600 shadow-lg"
                          : "bg-white text-purple-600 border border-indigo-300 hover:bg-indigo-50"
                      }
                  `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          {image && (
            <div className="flex justify-center lg:justify-end shrink-0 animate-fade-in">
              <div
                className="
        w-40 h-40
        sm:w-56 sm:h-56
        md:w-72 md:h-72
        lg:w-[500px] lg:h-[500px]
        rounded-full
        bg-white/60
        backdrop-blur
        shadow-xl
        flex items-center justify-center
        animate-ball-bounce
      "
              >
                <SanityImage
                  src={image}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
