import React from "react";
import Footer from "../footer";
import FooterBottom from "../footerBottom";
import { FooterType } from "../../../lib/sanity/types/page";
import { FooterBottomType } from "../../../lib/sanity/types/common";

interface LayoutProps {
  children: React.ReactNode;
  footerData?: FooterType | null;
  footerBottomData?: FooterBottomType[] | null;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  footerData,
  footerBottomData,
}) => {
  // Get first footer bottom data if array
  const footerBottom = Array.isArray(footerBottomData) && footerBottomData.length > 0
    ? footerBottomData[0]
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow w-full">
        {/* Content wrapper - centers content */}
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      {footerData && <Footer {...footerData} />}
      {footerBottom && <FooterBottom data={footerBottom} />}
    </div>
  );
};

export default Layout;

