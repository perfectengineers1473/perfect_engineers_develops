"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "../../../lib/sanity/types/settings";
import { resolveUrl } from "lib/utils/resolveUrl";

interface NavbarSectionProps extends NavLinkType {
  mobile?: boolean;
  onLinkClick?: () => void;
}

const NavbarSection: React.FC<NavbarSectionProps> = ({
  buttonlinks,
  mobile = false,
  onLinkClick,
}) => {
  const pathname = usePathname();

  return (
    <nav className={`flex ${mobile ? "flex-col gap-4" : "items-center gap-2"}`}>
      {buttonlinks
        ?.filter((btn) => {
          const href = resolveUrl(btn.link!);
          return href !== pathname; 
        })
        .map((btn, index) => (
          <Link
            key={index}
            href={resolveUrl(btn.link!)}
            onClick={onLinkClick}
            className={`
              relative group overflow-hidden rounded-xl
              transition-all duration-300 ease-out
              active:scale-[0.96]
              ${
                mobile
                  ? "px-5 py-4 text-lg font-medium"
                  : "px-4 py-2 text-sm font-medium"
              }
              bg-linear-to-br from-gray-300 via-purple-100 to-white hover:bg-transparent
            `}
          >
            {/* Gradient hover layer */}
            <span className="absolute inset-0 bg-linear-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 opacity-0 group-hover:opacity-100 transition" />

            {/* Glow */}
            <span className="absolute inset-0 rounded-xl shadow-[0_0_0_0_rgba(99,102,241,0.4)]
              group-hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)]
              transition-all"
            />

            <span className="relative z-10 font-mono">
              {btn.label}
            </span>
          </Link>
        ))}
    </nav>
  );
};

export default NavbarSection;
