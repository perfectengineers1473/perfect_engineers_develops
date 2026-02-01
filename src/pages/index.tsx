import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../lib/sanity/types";
import { Page } from "../../lib/sanity/types/page";

import { fetchDataFromSanity, readToken } from "../../lib/sanity";
import { pageBySlugQuery } from "../../lib/queries";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";
import PageView from "../../views/PageView";
// Make sure this points to the folder we just created

export interface PageProps extends SharedPageProps {
  page: Page;// Make sure this points to the folder we just created
}

const Home: NextPage<PageProps> = ({ page }) => {
  return (
    <>
      <PageView page={page} slug={page.slug?.current || "home"} />
    </>
  );
};

import { footerquery, footerbottomquery, headerquery, navlinkSectionquery } from "../../lib/queries";
import { FooterType } from "../../lib/sanity/types/page";
import { FooterBottomType } from "../../lib/sanity/types/common";

export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const query = `{
    "page": ${pageBySlugQuery},
    "footer": ${footerquery},
    "footerBottom": ${footerbottomquery},
    "header": ${headerquery},
    "navLink": ${navlinkSectionquery}
  }`;

  const data = await fetchDataFromSanity<any>({
    query: { groqQuery: query },
    queryParams: { slug: "home" },
    isPreview: draftMode,
  });

  const page = filterSanityDataToSingleItem({
    data: data?.page,
    isPreview: draftMode,
  });

  if (!page) return { notFound: true };

  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : "",
      footerData: Array.isArray(data?.footer) && data.footer.length > 0 ? data.footer[0] : null,
      footerBottomData: Array.isArray(data?.footerBottom) ? data.footerBottom : null,
      headerData: Array.isArray(data?.header) && data.header.length > 0 ? data.header[0] : null,
      navLinkData: Array.isArray(data?.navLink) && data.navLink.length > 0 ? data.navLink[0] : null,
    },
    revalidate: REVALIDATE_DURATION,
  };
};

export default Home;
