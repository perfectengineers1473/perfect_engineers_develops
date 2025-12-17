import React from "react";
import dynamic from "next/dynamic";
import { PortableTextMarkComponentProps } from "@portabletext/react";
import { RichTextLinkType } from "../../../../../lib/sanity/types";
import { LinkType } from "../../../../../lib/sanity/types/linkType";
const Link = dynamic(() => import("../../link"));

export interface RichTextLinkComponentProps {
  richTextLinks: RichTextLinkType[];
}

export interface RichTextLinkData {
  _type: "link";
  link: LinkType & { page?: { _ref?: string }; anchor?: string; link?: string };
}
const RichTextLink: React.FC<
  PortableTextMarkComponentProps<RichTextLinkData> & RichTextLinkComponentProps
> = ({ children, value, richTextLinks, text }) => {
  const richTextLink = richTextLinks?.find(
    (item) => item?.link?.id === value?.link?.page?._ref
  );

  const { link } = value || {};
  const { type, openTheLinkinANewWindow, link: linkUrl, anchor } = link || {};

  const richTextSectionReferenceUrl = "#" + anchor;

  let href: string | LinkType = "#";
  let target = "_self";

  switch (type) {
    case "reference":
      href = richTextLink?.link || "#";
      break;
    case "externalReference":
      href = linkUrl || "#";
      target = openTheLinkinANewWindow ? "_blank" : "_self";
      break;
    case "sectionReference":
      href = richTextSectionReferenceUrl;
      break;
  }

  return (
    <Link
      ariaLabel={text}
      className="text-brand-blue underline underline-offset-4 font-medium"
      to={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default RichTextLink;
