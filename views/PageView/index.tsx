import { Page } from "../../lib/sanity/types/page";
import SectionView from "@/components/commons/sectionView";

export interface PageViewProps {
  page: Page;
}

export default function PageView(props: PageViewProps) {
  const { page } = props;

  return (
   <>
   {Array.isArray(page?.pageBuilder) &&
        page?.pageBuilder.map((i, index) => (
          <SectionView block={i} hasFooterBannerBackGround={page?.hasWithBackGround} key={index} />
        ))}
   </>
  );
}
