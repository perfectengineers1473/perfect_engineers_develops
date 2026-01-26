import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { SharedPageProps } from "../../lib/sanity/types";
import { Page } from "../../lib/sanity/types/page";

import { fetchDataFromSanity, readToken } from "../../lib/sanity";
import { pageBySlugQuery, allPagesSlugQuery } from "../../lib/queries";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";
import PageView from "../../views/PageView";

export interface PageProps extends SharedPageProps {
  page: Page;
}

const DynamicPage: NextPage<PageProps> = ({ page }) => {
  return (
    <>
      <PageView page={page} slug={page.slug?.current || ""} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await fetchDataFromSanity<{ slug: string }[]>({
    query: { groqQuery: allPagesSlugQuery },
  });

  const paths = pages
    .filter((page) => page.slug) // Filter out pages without slugs
    .map((page) => ({
      params: { slug: page.slug },
    }));

  return {
    paths,
    fallback: "blocking", // or 'true' if you want to use ISR
  };
};

import { footerquery, footerbottomquery, headerquery, navlinkSectionquery } from "../../lib/queries";
import { FooterType } from "../../lib/sanity/types/page";
import { FooterBottomType } from "../../lib/sanity/types/common";

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  draftMode = false,
}) => {
  const slug = params?.slug as string;

  if (!slug) {
    return { notFound: true };
  }

  const [pageData, footerDataArray, footerBottomData, headerDataArray, navLinkDataArray] = await Promise.all([
    fetchDataFromSanity<Page>({
      query: { groqQuery: pageBySlugQuery },
      queryParams: { slug },
      isPreview: draftMode,
    }),
    fetchDataFromSanity<FooterType[]>({ query: { groqQuery: footerquery } }),
    fetchDataFromSanity<FooterBottomType[]>({ query: { groqQuery: footerbottomquery } }),
    fetchDataFromSanity<any>({ query: { groqQuery: headerquery } }),
    fetchDataFromSanity<any>({ query: { groqQuery: navlinkSectionquery } }),
  ]);

  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });

  if (!page) return { notFound: true };

  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : "",
      footerData: Array.isArray(footerDataArray) && footerDataArray.length > 0 ? footerDataArray[0] : null,
      footerBottomData: Array.isArray(footerBottomData) ? footerBottomData : null,
      headerData: Array.isArray(headerDataArray) && headerDataArray.length > 0 ? headerDataArray[0] : null,
      navLinkData: Array.isArray(navLinkDataArray) && navLinkDataArray.length > 0 ? navLinkDataArray[0] : null,
    },
    revalidate: REVALIDATE_DURATION,
  };
};

export default DynamicPage;

