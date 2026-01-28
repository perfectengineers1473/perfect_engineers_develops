import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
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
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <PageView page={page} slug={page.slug?.current || "/"} />
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
      params: { slug: page.slug || "/" },
    }));

  return {
    paths,
    fallback: true, // or 'true' if you want to use ISR
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

  const query = `{
    "page": ${pageBySlugQuery},
    "footer": ${footerquery},
    "footerBottom": ${footerbottomquery},
    "header": ${headerquery},
    "navLink": ${navlinkSectionquery}
  }`;

  const data = await fetchDataFromSanity<any>({
    query: { groqQuery: query },
    queryParams: { slug },
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

export default DynamicPage;
