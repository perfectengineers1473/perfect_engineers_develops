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

/**
 * Safe path normalizer
 */
const normalizePath = (path?: string | null) => {
  if (!path) return "/";
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
};

const NavbarSection: React.FC<NavbarSectionProps> = ({
  buttonlinks,
  mobile = false,
  onLinkClick,
}) => {
  const pathname = normalizePath(usePathname());

  /**
   * Hydration guard
   * - prevents mobile from hiding current page on first load
   */
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={`flex ${mobile ? "flex-col gap-4" : "items-center gap-3"}`}>
      {buttonlinks?.map((btn, index) => {
        const href = normalizePath(resolveUrl(btn.link!) || "/");

        const isCurrent =
          pathname === href || (pathname === "/" && href === "/");

        return (
          <Link
            key={index}
            href={href}
            onClick={onLinkClick}
            className={`
              relative overflow-hidden rounded-2xl
              transition-all duration-200 ease-out
              active:scale-[0.97]

              ${
                mobile
                  ? `
                    ${mobile && mounted && isCurrent ? "hidden" : ""}
                    px-6 py-4
                    text-lg font-semibold
                    text-center
                    flex items-center justify-center

                    bg-white
                    text-slate-900
                    border border-slate-200

                    shadow-[0_6px_18px_-6px_rgba(15,23,42,0.18)]
                    active:bg-slate-100
                  `
                  : `
                    px-6 py-3
                    text-base lg:text-lg font-semibold
                    border backdrop-blur-md
                    relative group

                    ${
                      isCurrent
                        ? `
                          lg:bg-blue-700
                          lg:text-white
                          lg:shadow-xl
                        `
                        : `
                          lg:bg-white/70
                          lg:text-gray-900
                          lg:border-gray-300
                          lg:hover:bg-white
                        `
                    }

                    lg:hover:-translate-y-0.5
                  `
              }
            `}
          >
            {/* Desktop hover overlay */}
            {!mobile && !isCurrent && (
              <span
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  bg-slate-900/5
                "
              />
            )}

            <span className="relative z-10 font-mono text-center">
              {btn.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarSection;
