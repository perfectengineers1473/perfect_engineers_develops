import React from "react";
import { FooterType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";

const Footer: React.FC<FooterType> = ({
  title,
  titletext,
  btn,
  sociallogolink,
}) => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
            )}

            {titletext && (
              <p className="text-sm text-gray-600 mb-6 max-w-sm">
                {titletext}
              </p>
            )}

            {/* SOCIAL ICONS */}
            {sociallogolink && sociallogolink.length > 0 && (
              <div className="flex items-center gap-4">
                {sociallogolink.map((item, index) => (
                  <Link
                    key={index}
                    to={item.sociallogolink || "#"}
                    ariaLabel="Social link"
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition"
                  >
                    {item.sociallogo && (
                      <SanityImage
                        src={item.sociallogo}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end">
            {btn?.label && (
              <Link
                to={btn.link || btn.url || "#"}
                ariaLabel={btn.label}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
              >
                {btn.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
