"use client";

import React from "react";
import { HeaderType, NavLinkType } from "lib/sanity/types";
import NavbarSection from "@/components/navbarSection";
import { RiMenu5Fill } from "react-icons/ri";
import Link from "next/link";

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
      <header className="sticky top-0 inset-x-0 z-50 bg-gray-50 backdrop-blur-xl">
        <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-3 lg:py-3 py-2">
          <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
            <div className="flex items-center gap-3 font-semibold tracking-tight">
              {logo?.asset?.url ? (
                <Link href="/">
                  <img
                  src={logo.asset.url}
                  alt={logotitle || "Logo"}
                  className="
                    max-w-full object-contain transition-all duration-300
                    h-28 sm:h-20 lg:h-52
                  "/>
                  </Link>
                   
              ) : (
                <span
                  className="
                    text-lg sm:text-xl lg:text-xl xl:text-2xl
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
              className="
                lg:hidden
                flex items-center justify-center
                h-12 w-12
                active:scale-95
                transition
              "
              aria-label="Open menu"
            >
              <RiMenu5Fill className="text-2xl text-slate-900" />
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
        <div className="rounded-t-3xl bg-slate-100 shadow-2xl p-6 relative overflow-hidden">
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
