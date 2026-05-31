import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="relative w-full bg-gray-50 text-gray-900 overflow-hidden">

      {/* Decorative background lines (subtle) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none">
          <path d="M200 0 L600 500" stroke="#111827" strokeWidth="1" />
          <path d="M900 0 L500 500" stroke="#111827" strokeWidth="1" />
          <path d="M1200 0 L900 500" stroke="#111827" strokeWidth="1" />
        </svg>
      </div>

      {/* Accent stripe */}
      <div className="h-1 w-full bg-linear-to-r from-gray-200 via-gray-300 to-gray-200" />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 shadow-inner"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 700ms ease-out, transform 700ms ease-out",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-center sm:text-left"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 600ms ease-out, transform 600ms ease-out",
                transitionDelay: "80ms",
              }}
            >
              <span className="bg-clip-text text-gray-900 capitalize inline-block">{title}</span>
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-md mb-6 leading-relaxed mx-auto md:mx-0 text-center md:text-left">
              {titletext}
            </p>

            {/* SOCIAL ICONS */}
            {(sociallogolink?.length ?? 0) > 0 && (
              <div className="flex justify-center sm:justify-start gap-4 mb-6">
                {sociallogolink?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.sociallogolink || "#"}
                    className={`flex items-center justify-center rounded-full border border-gray-300 bg-white w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14`}
                    style={{ transition: "transform 350ms ease", transitionDelay: `${120 + i * 60}ms` }}
                  >
                    {item.sociallogo && (
                      <SanityImage
                        src={item.sociallogo}
                        className="w-5 h-5 sm:w-5 sm:h-5 lg:w-7 lg:h-7 transition-all duration-300"
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}

            {/* BACK TO TOP (VISIBLE ON MOBILE, FULL WIDTH) */}
            {btn?.label && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-gray-900 text-gray-900 rounded-full bg-white hover:bg-gray-900 hover:text-white transition-all duration-400 transform-gpu group"
              >
                <span className="inline-block mr-2 transform transition-transform duration-500 group-hover:-translate-y-1">↑</span>
                <span className="font-semibold">{btn.label}</span>
              </button>
            )}
          </div>

          {/* ================= LINK SECTIONS ================= */}
          {titlelabellink?.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="lg:col-span-1"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: `${100 + index * 80}ms`,
                }}
              >
                {/* TITLE (accordion on mobile) */}
                <button
                  onClick={() => toggleSection(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-3 px-0 text-left lg:cursor-default border-b border-gray-200 hover:bg-gray-50 group"
                >
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-gray-900 transition-transform duration-300 group-hover:translate-x-1">
                    {section.maintitle}
                  </h4>

                  <span className="lg:hidden text-2xl text-gray-700 ml-2 transition-transform duration-300 group-hover:rotate-3">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* LINKS */}
                <ul
                  className={`mt-4 text-sm sm:text-base lg:text-lg text-gray-600 ${isOpen ? "block" : "hidden"} lg:block`}
                >
                  {section.label?.map((item, i) => (
                    <li
                      key={i}
                      className="py-1"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(6px)",
                        transition: "opacity 500ms ease-out, transform 500ms ease-out",
                        transitionDelay: `${120 + i * 50}ms`,
                      }}
                    >
                      <Link
                        href={item.link ? (resolveUrl(item.link) || "#") : "#"}
                        className="inline-block hover:text-gray-900"
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
      <div className="bg-gray-900 text-gray-200 text-sm text-center py-4 animate-fade-down border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">© {new Date().getFullYear()} All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
