import { Page } from "../../lib/sanity/types/page";
// FIXED: Removed 'src/' from the path. 
// Since @ points to ./src, this now resolves to ./src/components/commons/sectionView
import SectionView from "@/components/commons/sectionView"; 

export interface PageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  slug: string;
}

export default function PageView(props: PageViewProps) {
  const { preview, loading, page, slug } = props;
  const { layoutProps } = page || {};

  return (
   <>
   {Array.isArray(page?.pageBuilder) &&
        page?.pageBuilder.map((i, index) => (
          <SectionView block={i} hasFooterBannerBackGround={page?.hasWithBackGround} key={index} />
        ))}
   </>
  );
}