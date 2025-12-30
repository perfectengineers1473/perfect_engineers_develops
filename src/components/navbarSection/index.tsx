import React from "react";
import { NavItemsType } from "lib/sanity/types";
import Link from "next/link";

const NavbarSection: React.FC<NavItemsType> = ({ buttonlinks }) => {
  if (!buttonlinks?.length) return null;

  return (
    <nav className="flex items-center gap-6">
      {buttonlinks.map((btn, index) => (
        <Link
          key={index}
          href={btn.link || "#"}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
        >
          {btn.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarSection;
