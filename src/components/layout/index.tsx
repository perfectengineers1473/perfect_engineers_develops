import React from "react";
import Footer from "../footer";
import FooterBottom from "../footerBottom";

import { FooterType } from "../../../lib/sanity/types/page";
import { FooterBottomType } from "../../../lib/sanity/types/common";
import HeaderSection from "@/components/headerSection";

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
  const footerBottom =
    Array.isArray(footerBottomData) && footerBottomData.length > 0
      ? footerBottomData[0]
      : null;

  return (
    <div className="min-h-screen flex flex-col">
      {headerData && (
        <HeaderSection
          logo={headerData.logo}
          logotitle={headerData.logotitle}
          buttonlinks={navLinkData?.buttonlinks || []}
          sociallogolink={[]}
        />
      )}

      <main className="grow w-full">{children}</main>

      {footerData && <Footer {...footerData} />}
      {footerBottom && <FooterBottom data={footerBottom} />}
    </div>
  );
};


export default Layout;