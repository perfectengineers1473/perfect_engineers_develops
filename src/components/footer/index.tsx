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
    <footer className="relative max-w-full bg-[#0B2E2B] text-white overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500">
          <path d="M200 0 L600 500" stroke="white" />
          <path d="M900 0 L500 500" stroke="white" />
          <path d="M1200 0 L900 500" stroke="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>

            <p className="text-sm text-[#C7D1CF] max-w-sm mb-6">
              {titletext}
            </p>

            {/* SOCIAL */}
            {sociallogolink?.length > 0 && (
              <div className="flex gap-4 mb-8">
                {sociallogolink.map((item, i) => (
                  <Link
                    key={i}
                    href={item.sociallogolink || "#"}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-[#C9A24D] transition"
                  >
                    {item.sociallogo && (
                      <SanityImage
                        src={item.sociallogo}
                        className="w-4 h-4"
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
                className="px-5 py-3 text-xs font-semibold border border-[#C9A24D]/70 text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#0B2E2B] transition"
              >
                ↑ {btn.label}
              </button>
            )}
          </div>

          {/* LINK SECTIONS */}
          {titlelabellink?.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="w-full lg:w-auto">
                {/* TITLE */}
                <button
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-center border border-white rounded-2xl py-2 w-full lg:cursor-default"
                >
                  <h4 className="text-sm font-semibold">
                    {section.maintitle}
                  </h4>

                  {/* Arrow only on mobile */}
                  <span className="lg:hidden text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* LIST */}
                <ul
                  className={`
                    mt-4 space-y-3 text-sm text-[#C7D1CF]
                    ${isOpen ? "block" : "hidden"}
                    lg:block
                  `}
                >
                  {section.label?.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={resolveUrl(item.link) || "#"}
                        className="hover:text-white transition"
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

      {/* BOTTOM */}
      <div className="bg-[#0A2624] text-[#9FB6B2] text-xs text-center py-3">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
