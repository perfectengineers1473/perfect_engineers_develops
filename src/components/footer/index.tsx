import React, { useState } from "react";
import Link from "next/link";
import { FooterType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import { resolveUrl } from "../../../lib/utils/resolveUrl";

const Footer: React.FC<FooterType> = ({
  title,
  titletext,
  btn,
  sociallogolink,
  titlelabellink,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="relative w-full bg-gray-200 text-gray-900 overflow-hidden">

      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500">
          <path d="M200 0 L600 500" stroke="black" />
          <path d="M900 0 L500 500" stroke="black" />
          <path d="M1200 0 L900 500" stroke="black" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">
              {title}
            </h3>

            <p className="text-xl sm:text-xl lg:text-2xl text-gray-600 max-w-md mb-8 leading-relaxed">
              {titletext}
            </p>

            {/* SOCIAL ICONS */}
            {sociallogolink?.length > 0 && (
              <div className="flex gap-4 mb-10">
                {sociallogolink.map((item, i) => (
                  <Link
                    key={i}
                    href={item.sociallogolink || "#"}
                    className="
                      flex items-center justify-center
                      rounded-full border border-gray-300
                      bg-gray-100
                      transition-all duration-300
                      hover:bg-gray-900 hover:border-gray-900
                      hover:-translate-y-1
                      w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                    "
                  >
                    {item.sociallogo && (
                      <SanityImage
                        src={item.sociallogo}
                        className="
                          w-5 h-5 sm:w-5 sm:h-5 lg:w-7 lg:h-7
                          transition-all duration-300
                        "
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}

            {/* BACK TO TOP (HIDDEN ON MOBILE) */}
            {btn?.label && (
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="
                  hidden sm:inline-flex items-center gap-2
                  px-6 py-3 text-xs font-semibold uppercase tracking-wide
                  border border-gray-900 text-gray-900
                  rounded-full
                  hover:bg-gray-900 hover:text-white
                  transition-all duration-300
                  hover:scale-[1.05]
                "
              >
                ↑ {btn.label}
              </button>
            )}
          </div>

          {/* ================= LINK SECTIONS ================= */}
          {titlelabellink?.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="lg:col-span-1 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* TITLE */}
                <button
                  onClick={() => toggleSection(index)}
                  className="
                    flex items-center justify-between
                    w-full text-left
                    border-b border-gray-300
                    pb-3 mb-4
                    lg:cursor-default
                  "
                >
                  <h4 className="text-base sm:text-2xl lg:text-2xl font-semibold tracking-wide text-gray-900">
                    {section.maintitle}
                  </h4>

                  <span className="lg:hidden text-lg sm:text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* LINKS */}
                <ul
                  className={`
                    space-y-3 mb-3
                    text-sm sm:text-base lg:text-xl
                    text-gray-600
                    transition-all duration-300
                    ${isOpen ? "block" : "hidden"}
                    lg:block
                  `}
                >
                  {section.label?.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={resolveUrl(item.link) || "#"}
                        className="
                          inline-block
                          hover:text-gray-900
                          hover:translate-x-1
                          transition-all duration-200 mb-2
                        "
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="bg-gray-300 text-gray-600 text-xs sm:text-sm lg:text-base text-center py-4 animate-fade-down border-t border-gray-200">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
