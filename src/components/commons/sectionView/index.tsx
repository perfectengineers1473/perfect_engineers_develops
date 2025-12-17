import React from "react";
import Section from "../section";
import type { PageBuilderType } from "../../../../lib/sanity/types/page";

export interface SectionViewProps {
  block: PageBuilderType;
  hasFooterBannerBackGround?: boolean;
}

const SectionView: React.FC<SectionViewProps> = ({
  block,
  hasFooterBannerBackGround,
}) => {
  const keyedBlock = block as unknown as { _key?: string; id?: string };

  return (
    <Section
      data={block}
      key={keyedBlock?._key || keyedBlock?.id}
      hasFooterBannerBackGround={!!hasFooterBannerBackGround}
    />
  );
};

export default SectionView;
