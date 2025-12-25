import React from "react";
import Footer from "../footer";
import FooterBottom from "../footerBottom";
import NavbarSection from "@/components/headerSection/navbarSection"; 
// Note: We are NOT importing HeaderSection because it doesn't exist yet.

import { FooterType } from "../../../lib/sanity/types/page";
import { FooterBottomType } from "../../../lib/sanity/types/common";

interface LayoutProps {
  children: React.ReactNode;
  footerData?: FooterType | null;
  footerBottomData?: FooterBottomType[] | null;
  headerData?: any;
  navLinkData?: any;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  footerData,
  footerBottomData,
  headerData,
  navLinkData,
}) => {
  const footerBottom = Array.isArray(footerBottomData) && footerBottomData.length > 0
    ? footerBottomData[0]
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* FIXED: Removed the <HeaderSection /> line that caused the crash */}
      
      {/* <NavbarSection 
        logo={headerData?.logo} 
        btn={headerData?.btn}
        navlinks={navLinkData?.links} 
      /> */}

      <main className="grow w-full">
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
      
      {footerData && <Footer {...footerData} />}
      {footerBottom && <FooterBottom data={footerBottom} />}
    </div>
  );
};

export default Layout;