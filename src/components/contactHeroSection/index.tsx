import React from "react";
import { ContactHeroSectionType } from "../../../lib/sanity/types/page";
import SanityImage from "../commons/sanityImage";
import Link from "../commons/link";
import Button from "../commons/button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ContactHeroSection: React.FC<ContactHeroSectionType> = ({
  buttons,
  description,
  image,
  title,
}) => {
  return (
    <section className="relative w-full pt-10 pb-10 lg:pt-10 lg:pb-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* SUBTLE BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          We are here to help
        </div>

        {/* MAIN TYPOGRAPHY */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#1f2937] mb-6 leading-tight">
          Contact Our <span className="text-blue-600">Engineering</span> Experts
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you need a custom manufacturing solution, technical support, or a personalized product demo, our team is ready to help you build the future.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 px-8 py-3.5 text-sm tracking-wide bg-blue-600 text-white shadow-md shadow-blue-500/30 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            Request a Demo
          </a>
          <a
            href="mailto:perfect.engineers1473@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 px-8 py-3.5 text-sm tracking-wide bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5"
          >
            Contact Via mail
          </a>
        </div>

        {/* TRUST SIGNALS */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#343e4b]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>24 Hour Response</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            <span>Global Support</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>Enterprise Security</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHeroSection;
