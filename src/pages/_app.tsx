import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import Layout from "@/components/layout";
import { fetchDataFromSanity } from "../../lib/sanity";
import { footerquery, footerbottomquery, headerquery, navlinkSectionquery } from "../../lib/queries";
import { FooterType } from "../../lib/sanity/types/page";
import { FooterBottomType } from "../../lib/sanity/types/common";

interface MyAppProps extends AppProps {
  footerData?: FooterType | null;
  footerBottomData?: FooterBottomType[] | null;
  headerData?: any;
  navLinkData?: any;
}

function MyApp({ Component, pageProps, footerData, footerBottomData, headerData, navLinkData }: MyAppProps) {
  useEffect(() => {
    // Check if there is a hash in the URL
    if (window.location.hash) {
      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Remove the hash from the URL
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <Layout 
      footerData={footerData} 
      footerBottomData={footerBottomData}
      headerData={headerData}
      navLinkData={navLinkData}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  try {
    const [footerDataArray, footerBottomData, headerDataArray, navLinkDataArray] = await Promise.all([
      fetchDataFromSanity<FooterType[]>({ query: { groqQuery: footerquery } }),
      fetchDataFromSanity<FooterBottomType[]>({ query: { groqQuery: footerbottomquery } }),
      fetchDataFromSanity<any>({ query: { groqQuery: headerquery } }),
      fetchDataFromSanity<any>({ query: { groqQuery: navlinkSectionquery } }),
    ]);

    return {
      ...appProps,
      footerData: Array.isArray(footerDataArray) && footerDataArray.length > 0 ? footerDataArray[0] : null,
      footerBottomData: Array.isArray(footerBottomData) ? footerBottomData : null,
      headerData: Array.isArray(headerDataArray) && headerDataArray.length > 0 ? headerDataArray[0] : null,
      navLinkData: Array.isArray(navLinkDataArray) && navLinkDataArray.length > 0 ? navLinkDataArray[0] : null,
    };
  } catch (error) {
    console.error("Error fetching global data:", error);
    return {
      ...appProps,
      footerData: null,
      footerBottomData: null,
      headerData: null,
      navLinkData: null,
    };
  }
};

export default MyApp;