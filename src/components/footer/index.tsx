"use client";

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
    <footer className="relative w-full bg-linear-to-br from-[#0B2E2B] via-[#0F3A35] to-[#0A2624] text-white overflow-hidden">

      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500">
          <path d="M200 0 L600 500" stroke="white" />
          <path d="M900 0 L500 500" stroke="white" />
          <path d="M1200 0 L900 500" stroke="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-4 tracking-tight">
              {title}
            </h3>

            <p className="text-sm sm:text-xl lg:text-3xl text-[#C7D1CF] max-w-md mb-8 leading-relaxed">
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
          rounded-full border border-white/20
          bg-white/5
          transition-all duration-300
          hover:bg-[#C9A24D] hover:border-[#C9A24D]
          hover:-translate-y-1

          /* SIZE RESPONSIVE */
          w-10 h-10        /* mobile */
          sm:w-12 sm:h-12  /* tablet */
          lg:w-14 lg:h-14  /* desktop */
        "
                  >
                    {item.sociallogo && (
                      <SanityImage
                        src={item.sociallogo}
                        className="
              transition-all duration-300
              w-4 h-4        /* mobile */
              sm:w-5 sm:h-5  /* tablet */
              lg:w-7 lg:h-7  /* desktop */
            "
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}


            {/* BACK TO TOP */}
            {btn?.label && (
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 text-xs font-semibold uppercase tracking-wide
                  border border-[#C9A24D]/60 text-[#C9A24D]
                  rounded-full
                  hover:bg-[#C9A24D] hover:text-[#0B2E2B]
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
                    w-full
                    text-left
                    border-b border-white/20
                    pb-3 mb-4
                    lg:cursor-default
                  "
                >
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">
                    {section.maintitle}
                  </h4>

                  {/* Mobile toggle */}
                  <span className="lg:hidden text-lg  sm:text-xl lg:text-2xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* LINKS */}
                <ul
                  className={`
                    space-y-3 text-lg  sm:text-xs lg:text-xl text-[#C7D1CF]
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
                          hover:text-white
                          hover:translate-x-1
                          transition-all duration-200
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
      <div className="bg-[#081F1D] text-[#9FB6B2] text-xs sm:text-md lg:text-lg  text-center py-4 animate-fade-down">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
