import Page from "@/components/page";
import React from "react";
import { client } from "../../lib/client";
import {
  featurepostquery,
  footerbottomquery,
  footerquery,
  headerquery,
  homeheroquery,
  navlinkquery,
  recentpostquery,
} from "../../lib/sanity";

const Home = ({
  homeherodata,
  headerdata,
  navlinkdata,
  featurepostdata,
  recentpostdata,
  footerdata,
  footerbottomdata,
}: any) => {
  return (
    <Page
      homeherodata={homeherodata}
      headerdata={headerdata}
      navlinkdata={navlinkdata}
      featurepostdata={featurepostdata}
      recentpostdata={recentpostdata}
      footerdata={footerdata}
      footerbottomdata={footerbottomdata}
    />
  );
};
export const getStaticProps = async () => {
  const homeherodata = await client.fetch(homeheroquery);
  const headerdata = await client.fetch(headerquery);
  const navlinkdata = await client.fetch(navlinkquery);
  const featurepostdata = await client.fetch(featurepostquery);
  const recentpostdata = await client.fetch(recentpostquery);
  const footerdata = await client.fetch(footerquery);
  const footerbottomdata = await client.fetch(footerbottomquery);
  return {
    props: {
      homeherodata,
      headerdata,
      navlinkdata,
      featurepostdata,
      recentpostdata,
      footerdata,
      footerbottomdata,
    },
    revalidate: 10,
  };
};
export default Home;
