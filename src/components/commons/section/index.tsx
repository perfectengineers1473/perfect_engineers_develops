import React from "react";
import HomeHeroSection from "@/components/homeHeroSection";
import AboutLeftImageSection from "@/components/aboutLeftImageSection";
import AboutHeroSection from "@/components/aboutHeroSection";
import ContactHeroSection from "@/components/contactHeroSection";
import ContactMapSection from "@/components/contactMapSection";
import ContactUsSection from "@/components/contactUsSection";
import DemoSection from "@/components/demoSection";
import FeaturedPostSection from "@/components/featuredPostSection";
import HeroRemediateSection from "@/components/heroRemediateSection";
import HomeRightImageSection from "@/components/homeRightImageSection";
import ImageSection from "@/components/imageSection";
import ProductionTimeSection from "@/components/productionTimeSection";
import RecentPostSection from "@/components/recentPostSection/inddex";
import TitleTextSection from "@/components/titleTextSection";


interface SectionProps {
  data: any;
  hasFooterBannerBackGround: boolean;
}

const Section: React.FC<SectionProps> = ({
  data
}) => {
  if (typeof window !== "undefined") {
    console.log("SECTION DATA:", data?._type, data);
  }

  switch (data?._type) {
    case "homeHeroSections":
      return <HomeHeroSection {...data} />;

    case "aboutLeftRightImageSection":
      return <AboutLeftImageSection {...data} />;

    case "aboutHeroSection":
      return <AboutHeroSection {...data} />;

    case "contactHeroSection":
      return <ContactHeroSection {...data} />;

    case "contactMapSection":
      return <ContactMapSection {...data} />;

    case "contactUsSection":
      return <ContactUsSection {...data} />;

    case "demoSection":
      return <DemoSection {...data} />;

    case "featuredPostSection":
      return <FeaturedPostSection {...data} />;

    case "homeRightImageSection":
      return <HomeRightImageSection {...data} />;

    case "imageSection":
      return <ImageSection {...data} />;

    case "productionTimeSection":
      return <ProductionTimeSection {...data} />;

    case "recentPostSection":
      return <RecentPostSection {...data} />;

    // Matches Sanity schema name "titleTextSection"
    case "titleTextSection":
      return <TitleTextSection {...data} />;

    // Matches Sanity schema name "heroRemediateSection"
    case "heroRemediateSection":
      return <HeroRemediateSection {...data} />;

    default:
      return null;
  }
};

export default Section;