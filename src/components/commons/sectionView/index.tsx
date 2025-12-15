import React from "react";
import Section from "../section";

export interface SectionViewProps {
  block: any;
  hasFooterBannerBackGround?: boolean;
}

const SectionView: React.FC<SectionViewProps> = ({
  block,
  hasFooterBannerBackGround,
}) => {
  return (
    <Section
      data={block}
      key={block?._key || block?.id}
      hasFooterBannerBackGround={!!hasFooterBannerBackGround}
    />
  );
};

export default SectionView;
