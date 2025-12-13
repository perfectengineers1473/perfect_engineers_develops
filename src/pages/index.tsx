import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "../../lib/sanity/types";
import { Page } from "../../lib/sanity/types/page";
import { fetchDataFromSanity, homeheroquery, readToken } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";


export interface PageProps extends SharedPageProps {
  page: Page;
}
const Home: NextPage<PageProps> = ({ page, draftMode }) => {
console.log(page);

 
  return (
<>hi</>

  );
};
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const homePageData = await fetchDataFromSanity<Page[]>({
    query: {groqQuery:homeheroquery},
    queryParams: {
      slug: "/",
    },
    isPreview: draftMode,
  });
  const page = filterSanityDataToSingleItem({
    data: homePageData,
    isPreview: draftMode,
  });
  if (!page) {
    return {
      notFound: true,
    };
  }
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
