import React from "react";
import { FooterBottomType } from "../../../lib/sanity/types/common";
import Link from "../commons/link";

const FooterBottom: React.FC<{ data: FooterBottomType }> = ({ data }) => {
  if (!data) return null;

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

  return (
    <div className="w-full bg-gray-700 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Mobile & Desktop Layout */}
        <div className="animate-fade-in">
          {/* Mobile Layout - Stacked */}
          <div className="sm:hidden flex flex-col gap-6">
            {data.leftsidetext && (
              <div className="text-center">
                <Link
                  to={data.leftsidetext}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.leftsidetext}
                </Link>
              </div>
            )}

            {data.centertextlink && (
              <div className="text-center border-t border-gray-600 pt-6">
                <Link
                  to={data.centertextlink}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.centertextlink}
                </Link>
              </div>
            )}

            {data.rightsidetext && (
              <div className="text-center border-t border-gray-600 pt-6">
                <Link
                  to={data.rightsidetext}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.rightsidetext}
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden sm:flex justify-between items-center gap-8">
            {data.leftsidetext && (
              <div className="flex-1">
                <Link
                  to={data.leftsidetext}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.leftsidetext}
                </Link>
              </div>
            )}

            {data.centertextlink && (
              <div className="flex-1 text-center">
                <Link
                  to={data.centertextlink}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.centertextlink}
                </Link>
              </div>
            )}

            {data.rightsidetext && (
              <div className="flex-1 text-right">
                <Link
                  to={data.rightsidetext}
                  ariaLabel="Footer link"
                  className={linkClasses}
                >
                  {data.rightsidetext}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
