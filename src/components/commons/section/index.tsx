import React from "react";
import HomeHeroSection from "@/components/homeHeroSection";
import AboutLeftImageSection from "@/components/aboutLeftImageSection";
import type { HomeHeroSectionType, PageBuilderType, SectionType } from "../../../../lib/sanity/types/page";

type SectionData = PageBuilderType | SectionType | HomeHeroSectionType;

interface SectionProps {
  data: SectionData;
  hasFooterBannerBackGround: boolean;
}

const Section: React.FC<SectionProps> = ({
  data,
  hasFooterBannerBackGround,
}) => {
  // Debug: see which section types are being rendered
  const sectionData =
    (data as PageBuilderType)?.content?.[0] ?? (data as SectionType | HomeHeroSectionType);

  switch ((sectionData as SectionType | HomeHeroSectionType | undefined)?._type) {
    case "homeHeroSections":
      return <HomeHeroSection {...(sectionData as HomeHeroSectionType)} />;

    case "aboutLeftRightImageSection":
      return <AboutLeftImageSection {...(sectionData as SectionType)} />;

    default:
      return null;
  }
};

export default Section;