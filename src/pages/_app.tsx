import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Layout from "@/src/components/layout";
import { fetchDataFromSanity } from "../../lib/sanity";
import { footerquery, footerbottomquery } from "../../lib/queries";
import { FooterType } from "../../lib/sanity/types/page";
import { FooterBottomType } from "../../lib/sanity/types/common";

interface MyAppProps extends AppProps {
  footerData?: FooterType | null;
  footerBottomData?: FooterBottomType[] | null;
}

function MyApp({ Component, pageProps, footerData, footerBottomData }: MyAppProps) {
  return (
    <Layout footerData={footerData} footerBottomData={footerBottomData}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  try {
    // Fetch footer data
    const [footerDataArray, footerBottomData] = await Promise.all([
      fetchDataFromSanity<FooterType[]>({
        query: { groqQuery: footerquery },
      }),
      fetchDataFromSanity<FooterBottomType[]>({
        query: { groqQuery: footerbottomquery },
      }),
    ]);

    return {
      ...appProps,
      footerData: Array.isArray(footerDataArray) && footerDataArray.length > 0 
        ? footerDataArray[0] 
        : null,
      footerBottomData: Array.isArray(footerBottomData) ? footerBottomData : null,
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return {
      ...appProps,
      footerData: null,
      footerBottomData: null,
    };
  }
};

export default MyApp;
