import React from "react";
import { FooterBottomType } from "../../../lib/sanity/types/common";
import Link from "../commons/link";

const FooterBottom: React.FC<{ data?: FooterBottomType }> = () => {
  const linkClasses = `
    text-xs sm:text-sm
    relative inline-block
    text-gray-300
    transition-all duration-300
    hover:text-white
    tracking-wide
    after:absolute after:left-0 after:-bottom-1.5
    after:h-0.5 after:w-0 after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  const textClasses = `
    text-xs sm:text-sm
    text-gray-300
    tracking-wide
  `;

  return (
    <div className="w-full bg-[#343e4b] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Mobile & Desktop Layout */}
        <div className="animate-fade-in">
          {/* Mobile Layout - Stacked */}
          <div className="sm:hidden flex flex-col gap-6">
            <div className="text-center">
              <Link
                to="/privacy-policy"
                ariaLabel="Privacy Policy"
                className={linkClasses}
              >
                Privacy Policy
              </Link>
            </div>

            <div className="text-center border-t border-gray-600 pt-6">
              <Link
                to="/powered-by"
                ariaLabel="Powered By"
                className={linkClasses}
              >
                Powered By
              </Link>
            </div>

            <div className="text-center border-t border-gray-600 pt-6">
              <span className={textClasses}>
                Ahmedabad, Gujarat | All Rights Reserved
              </span>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden sm:flex justify-between items-center gap-8">
            <div className="flex-1">
              <Link
                to="/privacy-policy"
                ariaLabel="Privacy Policy"
                className={linkClasses}
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex-1 text-center">
              <Link
                to="/powered-by"
                ariaLabel="Powered By"
                className={linkClasses}
              >
                Powered By
              </Link>
            </div>

            <div className="flex-1 text-right">
              <span className={textClasses}>
                Ahmedabad, Gujarat | All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
