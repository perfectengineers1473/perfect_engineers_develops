import React from "react";
import { HeaderType, NavItemsType } from "lib/sanity/types";
import NavbarSection from "@/components/navbarSection";

interface HeaderSectionProps extends HeaderType {
  buttonlinks?: NavItemsType["buttonlinks"];
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  logo,
  logotitle,
  buttonlinks,
}) => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            {logo?.asset?.url && (
              <img
                src={logo.asset.url}
                alt={logotitle || "Logo"}
                className="h-10 w-auto"
              />
            )}
          </div>

          {/* NAVBAR */}
          <NavbarSection buttonlinks={buttonlinks} _type={"navItem"} />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
