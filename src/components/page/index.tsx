import React from "react";

// Imports - Corrected based on your folder structure
// Using @/ alias as configured in your tsconfig.json
import HomeHeroSection from "@/components/homeHeroSection";
// Ensure these paths exist. If HeaderSection is inside 'header', update accordingly.
import HeaderSection from "@/components/headerSection"; 
import NavbarSection from "@/components/headerSection/navbarSection"; 

// FIXED: Folder name is 'featuredPostSection' (with a 'd')
import FeaturedPostSection from "@/components/featuredPostSection"; 

// FIXED: Folder name is 'recentPostSection'
// Renamed from BlogSerction to RecentPostSection to match the component name
import RecentPostSection from "@/components/recentPostSection"; 

// FIXED: Folder name is 'footer'
import FooterSection from "@/components/footer"; 

const Page = ({
  homeherodata,
  headerdata,
  navlinkdata,
  featurepostdata,
  recentpostdata,
  footerdata,
  footerbottomdata,
}: any) => {
  
  // Helper to safely get the first item from the array for Header and Navbar
  const header = Array.isArray(headerdata) ? headerdata[0] : headerdata;
  const nav = Array.isArray(navlinkdata) ? navlinkdata[0] : navlinkdata;

  return (
    <div className="dark:bg-black/90">
      {/* Header Section */}
      <HeaderSection data={headerdata} />
      
      {/* STEP 3 FIX: Pass the specific props our new Navbar expects */}
      <NavbarSection 
        logo={header?.logo} 
        btn={header?.btn}
        navlinks={nav?.links} 
      />

      {/* FIXED: Using Spread Operator (...) 
        Your components (HomeHeroSection, etc.) expect props like 'title' directly, 
        not wrapped in a 'data' prop.
      */}
      <HomeHeroSection {...homeherodata} />
      <FeaturedPostSection {...featurepostdata} />
      <RecentPostSection {...recentpostdata} />
      
      {/* Footer Section */}
      <FooterSection {...footerdata} footerbottomdata={footerbottomdata} />
    </div>
  );
};

export default Page;