import React, { useState } from "react";
import DarkmodeSection from "@/components/darkmodeSection";
import { NavLinkType } from "../../../../lib/sanity/types";
import { TfiMenuAlt } from "react-icons/tfi";

const NavbarSection = ({ data }: { data: NavLinkType[] }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div>
      <button
        className="fixed top-9 right-5 z-50 x:hidden"
        onClick={toggleNavbar}
      >
        <TfiMenuAlt className="h-[25px] w-[25px] dark:text-white" />
      </button>

      <div
        className={`fixed bottom-9 left-1/2 transform -translate-x-1/2 z-50 x:top-5 ${
          isNavbarVisible ? "block" : "hidden sm:block"
        }`}
      >
        {data.map((navLink, navIndex) => (
          <div key={navIndex} className="flex">
            <div className="border-[1px] bg-white/75 border-black flex h-[50px] justify-center items-center rounded-full gap-4 font-semibold w-[290px] py-3 px-8">
              {navLink.links.map((linkItem, linkIndex) => (
                <div key={linkIndex}>
                  <a href={linkItem.link}>{linkItem.label}</a>
                </div>
              ))}
              <div className="flex justify-center w-full h-full items-center">
                <DarkmodeSection />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarSection;
