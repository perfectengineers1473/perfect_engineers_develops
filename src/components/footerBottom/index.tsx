import React from "react";
import { FooterBottomType } from "../../../lib/sanity/types/common";
import Link from "../commons/link";

const FooterBottom: React.FC<{ data: FooterBottomType }> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-red-500 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          {data.leftsidetext && (
            <div>{data.leftsidetext}</div>
          )}
          {data.centertextlink && (
            <div>
              <Link
                to={data.centertextlink}
                ariaLabel="Footer link"
                className="hover:text-gray-900 transition"
              >
                {data.centertextlink}
              </Link>
            </div>
          )}
          {data.rightsidetext && (
            <div>{data.rightsidetext}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

