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

export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const homePageData = await fetchDataFromSanity<Page>({
    query: { groqQuery: pageBySlugQuery },
    queryParams: { slug: "home" },
    isPreview: draftMode,
  });

  const page = filterSanityDataToSingleItem({
    data: homePageData,
    isPreview: draftMode,
  });

  if (!page) return { notFound: true };

  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : "",
    },
    revalidate: REVALIDATE_DURATION,
  };
};

export default Home;
