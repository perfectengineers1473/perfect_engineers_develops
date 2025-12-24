import React from "react";
import { FooterBottomType } from "../../../lib/sanity/types/common";
import Link from "../commons/link";

const FooterBottom: React.FC<{ data: FooterBottomType }> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-gray-600 border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div
          className="
            flex  md:flex-row
            justify-between items-center
            gap-4
            text-xs text-gray-400
            animate-fade-in
          "
        >
          {/* LEFT */}
          {data.leftsidetext && (
            <div className="tracking-wide text-center md:text-left">
              <Link
                to={data.leftsidetext}
                ariaLabel="Footer link"
                className="
                 sm:text-sm lg:text-md
                  relative inline-block
                  text-gray-400
                  transition-all duration-300
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {data.leftsidetext}
              </Link>

            </div>
          )}

          {/* CENTER LINK */}
          {data.centertextlink && (
            <div>
              <Link
                to={data.centertextlink}
                ariaLabel="Footer link"
                className="
               sm:text-sm lg:text-md
                  relative inline-block
                  text-gray-400
                  transition-all duration-300
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {data.centertextlink}
              </Link>
            </div>
          )}

          {/* RIGHT */}
          {data.rightsidetext && (
            <div className="tracking-wide text-center md:text-right">
              <Link
                to={data.rightsidetext}
                ariaLabel="Footer link"
                className="
                 sm:text-sm lg:text-md
                  relative inline-block
                  text-gray-400
                  transition-all duration-300
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {data.rightsidetext}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
