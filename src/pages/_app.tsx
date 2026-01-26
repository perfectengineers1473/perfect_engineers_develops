import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import Layout from "@/components/layout";
import { fetchDataFromSanity } from "../../lib/sanity";
import { footerquery, footerbottomquery, headerquery, navlinkSectionquery } from "../../lib/queries";
import { FooterType } from "../../lib/sanity/types/page";
import { FooterBottomType } from "../../lib/sanity/types/common";

// MyApp.getInitialProps removed to enable Automatic Static Optimization
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check if there is a hash in the URL
    if (window.location.hash) {
      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Remove the hash from the URL
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Extract global data from pageProps
  const { footerData, footerBottomData, headerData, navLinkData } = pageProps;

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

export default MyApp;