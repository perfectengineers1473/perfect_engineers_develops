import React from "react";
import Link from "next/link";
import { FooterType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";

const Footer: React.FC<FooterType> = ({
  title,
  titletext,
  btn,
  sociallogolink,
  siteLinks,
  legalLinks,
}) => {
  return (
    <footer className="relative w-full bg-[#0B2E2B] text-white overflow-hidden">

      {/* Background lines */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500">
          <path d="M200 0 L600 500" stroke="white" />
          <path d="M900 0 L500 500" stroke="white" />
          <path d="M1200 0 L900 500" stroke="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {title}
            </h3>

            <p className="text-sm text-[#C7D1CF] max-w-sm mb-6">
              {titletext}
            </p>

            {/* SOCIAL */}
            {sociallogolink && (
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

          {/* SITE MAP */}
          <div>
            <h4 className="text-sm font-semibold mb-6">Site Map</h4>
            <ul className="space-y-3 text-sm text-[#C7D1CF]">
              {siteLinks?.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url || "#"}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-sm font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-[#C7D1CF]">
              {legalLinks?.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url || "#"}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
