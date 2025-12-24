"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SanityImage from "@/components/commons/sanityImage";
import CustomLink from "@/components/commons/link";
import { SlMenu, SlClose, SlArrowDown } from "react-icons/sl";

interface NavLinkType {
  _key: string;
  label: string;
  link?: any;
  children?: NavLinkType[];
}

interface NavbarProps {
  logo?: any;
  navlinks?: NavLinkType[];
  btn?: any;
}

const NavbarSection: React.FC<NavbarProps> = ({ logo, navlinks, btn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // --- CUSTOM SORT & RENAME LOGIC ---
  const getSortedLinks = (links: NavLinkType[] | undefined) => {
    if (!links) return [];
    const desiredOrder = ["Work", "About", "Contact"];
    return links
      .map((item) => ({
        ...item,
        label: item.label === "Home" ? "Work" : item.label,
      }))
      .sort((a, b) => {
        const indexA = desiredOrder.indexOf(a.label);
        const indexB = desiredOrder.indexOf(b.label);
        return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
      });
  };

  const sortedLinks = getSortedLinks(navlinks);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (key: string) => setActiveDropdown(activeDropdown === key ? null : key);

  return (
    <>
      {/* 1. LOGO (Fixed Left - Independent) */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="block">
          <div className="w-24 sm:w-28 relative flex items-center">
            {logo ? (
              <SanityImage src={logo} className="object-contain" />
            ) : (
              <span className="font-bold text-lg text-black">Logo</span>
            )}
          </div>
        </Link>
      </div>

      {/* 2. NAVBAR PILL (Centered) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <div
          className={`
            relative flex items-center gap-4
            px-5 py-2.5
            bg-white/90 backdrop-blur-md
            border border-gray-200/50 shadow-lg
            rounded-full
            w-auto
          `}
        >
          {/* DESKTOP LINKS (Only Work, About, Contact) */}
          <div className="hidden md:flex items-center gap-2">
            {sortedLinks.map((item) => (
              <div key={item._key} className="relative group">
                {item.children && item.children.length > 0 ? (
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-all">
                    {item.label}
                    <SlArrowDown className="text-[10px] group-hover:-rotate-180 transition-transform" />
                  </button>
                ) : (
                  <CustomLink
                                to={item.link}
                                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-all" ariaLabel={""}                  >
                    {item.label}
                  </CustomLink>
                )}

                {/* Dropdown Desktop (Centered below item) */}
                {item.children && item.children.length > 0 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {item.children.map((subItem) => (
                      <CustomLink
                            key={subItem._key}
                            to={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black rounded-xl transition-colors" ariaLabel={""}                      >
                        {subItem.label}
                      </CustomLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1 text-gray-800 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
          >
            {isOpen ? <SlClose size={20} /> : <SlMenu size={20} />}
          </button>
        </div>

        {/* --- MOBILE MENU (Centered below pill) --- */}
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 w-48 mt-2
            bg-white/95 backdrop-blur-xl border border-gray-100
            rounded-2xl shadow-2xl overflow-hidden
            transition-all duration-300 origin-top
            ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
          `}
        >
          <div className="p-2 flex flex-col gap-1">
            {sortedLinks.map((item) => (
              <div key={item._key}>
                {item.children && item.children.length > 0 ? (
                  <div className="rounded-xl overflow-hidden bg-gray-50/50">
                    <button
                      onClick={() => toggleDropdown(item._key)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-800"
                    >
                      {item.label}
                      <SlArrowDown
                        className={`text-xs transition-transform ${
                          activeDropdown === item._key ? "-rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`
                        flex flex-col gap-1 px-3 transition-all duration-300
                        ${activeDropdown === item._key ? "pb-2 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
                      `}
                    >
                      {item.children.map((subItem) => (
                        <CustomLink
                              key={subItem._key}
                              to={subItem.link}
                              className="py-1.5 text-xs text-gray-600 border-t border-gray-100/50"
                              onClick={toggleMenu} ariaLabel={""}                        >
                          {subItem.label}
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <CustomLink
                                to={item.link}
                                className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                                onClick={toggleMenu} ariaLabel={""}                  >
                    {item.label}
                  </CustomLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;