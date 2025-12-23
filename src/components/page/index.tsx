import React from "react";
// Ensure these paths match your folder structure
import HomeHeroSection from "../homeHeroSection";


// Fixed Imports: Corrected spellings and folder names based on your file list
import FeaturePostSection from "../featuredPostSection"; // Changed from "../featurePostSection"
import RecentPostSection from "../recentPostSection";    // Changed from "../blogSerction"
import FooterSection from "../footer";                   // Changed from "../footerSection"

const Page = ({
  homeherodata,
  headerdata,
  navlinkdata,
  featurepostdata,
  recentpostdata,
  footerdata,
  footerbottomdata,
}: any) => {
  console.log(homeherodata, "homeher");

  return (
    <div className="dark:bg-black/90">
      {/* If HeaderSection and NavbarSection are also defined like HomeHeroSection, 
         you should change these to {...headerdata} as well. 
         Leaving as-is since their code wasn't provided.
      */}
     

      {/* FIXED: Spread the props instead of passing 'data={...}' */}
      <HomeHeroSection {...homeherodata} />

      {/* FIXED: Spread props for other sections to prevent similar errors */}
      <FeaturePostSection {...featurepostdata} />
      <RecentPostSection {...recentpostdata} />
      
      {/* FIXED: Spread footerdata, pass footerbottomdata separately if needed */}
      <FooterSection {...footerdata} footerbottomdata={footerbottomdata} />
    </div>
  );
};

export default Page;