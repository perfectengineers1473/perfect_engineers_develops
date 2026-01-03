"use client";

import React from "react";
import { HeaderType, NavLinkType } from "lib/sanity/types";
import NavbarSection from "@/components/navbarSection";
import { RiMenu5Fill } from "react-icons/ri";

interface HeaderSectionProps extends HeaderType {
  buttonlinks?: NavLinkType["buttonlinks"];
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  logo,
  logotitle,
  buttonlinks,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 inset-x-0 z-50 bg-linear-to-b from-gray-50 to-green-100 backdrop-blur-xl">
        {/* Gradient Accent Line */}
        <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-10 sm:h-14 lg:h-20 items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-3 font-semibold tracking-tight">
              {logo?.asset?.url ? (
                <img
                  src={logo.asset.url}
                  alt={logotitle || "Logo"}
                  className="
                      max-w-full object-contain transition-all duration-300
                      h-20 sm:h-24 lg:h-44 
                    "
                />
              ) : (
                <span
                  className="
                      text-base sm:text-lg lg:text-xl xl:text-2xl
                      font-semibold
                    "
                >
                  {logotitle}
                </span>
              )}
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex">
              <NavbarSection buttonlinks={buttonlinks} _type={"navLink"} />
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full px-2 py-2 text-sm font-medium
              bg-linear-to-br from-indigo-500/30 to-pink-500/30
              hover:from-indigo-500/20 hover:to-pink-500/20 transition"
            >
              <RiMenu5Fill />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SHEET */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out
        ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="rounded-t-3xl bg-green-100/45 shadow-2xl p-6 relative overflow-hidden">
          {/* Gradient indicator */}
          <div className="absolute top-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <NavbarSection
            buttonlinks={buttonlinks}
            mobile
            onLinkClick={() => setOpen(false)}
            _type={"navLink"}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
