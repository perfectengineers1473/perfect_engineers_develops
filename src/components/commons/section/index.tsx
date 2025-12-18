import React from "react";
import HomeHeroSection from "@/components/homeHeroSection";
import AboutLeftImageSection from "@/components/aboutLeftImageSection";
import AboutHeroSection from "@/components/aboutHeroSection";


interface SectionProps {
  data: any;
  hasFooterBannerBackGround: boolean;
}

const Section: React.FC<SectionProps> = ({
  data,
  hasFooterBannerBackGround,
}) => {
  // Debug: see which section types are being rendered
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

    default:
      return null;
  }
};

export default Section;