import React from "react";
import HomeHeroSection from "../homeHeroSection";
import HeaderSection from "../headerSection";
import NavbarSection from "../headerSection/navbarSection";
import FeaturePostSection from "../featurePostSection";
import BlogSerction from "../blogSerction";
import FooterSection from "../footerSection";

const Page = ({
  homeherodata,
  headerdata,
  navlinkdata,
  featurepostdata,
  recentpostdata,
  footerdata,
  footerbottomdata,
}: any) => {
  return (
    <div className="dark:bg-black/90">
      <HeaderSection data={headerdata} />
      <NavbarSection data={navlinkdata} />
      <HomeHeroSection data={homeherodata} />
      <FeaturePostSection data={featurepostdata} />
      <BlogSerction data={recentpostdata} />
      <FooterSection data={footerdata} footerbottomdata={footerbottomdata} />
    </div>
  );
};

export default Page;
