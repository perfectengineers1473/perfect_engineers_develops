import React from "react";

export interface PageProps {
  homeherodata: unknown;
  headerdata: unknown;
  navlinkdata: unknown;
  featurepostdata: unknown;
  recentpostdata: unknown;
  footerdata: unknown;
  footerbottomdata: unknown;
}

const Page: React.FC<PageProps> = () => {
  // Legacy component not currently used in the app.
  return null;
};

export default Page;
