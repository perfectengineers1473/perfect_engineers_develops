import React from "react";
import { NavLinkType } from "../../../lib/sanity/types/settings";
import Link from "next/link";
import { resolveUrl } from "lib/utils/resolveUrl";

const NavbarSection: React.FC<NavLinkType> = ({ 
  buttonlinks,

 }) => {
  return (
    <nav className="flex items-center gap-6">
      {buttonlinks?.map((btn, index) => (
        <Link
          key={index}
          href={resolveUrl(btn.link!)}
          className="px-4 py-2 text-black hover:text-blue-700 transition"
        >
          {btn.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarSection;
