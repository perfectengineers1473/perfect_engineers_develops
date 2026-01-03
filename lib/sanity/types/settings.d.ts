import { ButtonType, CustomImageType, IconLabelLinkType, LabelLinkType, RichTextType, TitleContentButtonType } from "./common";
import { LinkType } from "./linkType";

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  logotitle?: string;
}

export interface NavLinkType {
  _type: "navLink";
  buttonlinks?: LabelLinkType[];
}

export interface FooterLinksType {
  _type: "footerLinkBlock";
  title?: string;
  select?: "labelLinks" | "iconLabelLinks"
  labelLinks?: LabelLinkType[];
  iconLabelLinks?: IconLabelLinkType[]
  cta?: ButtonType
}
export interface BottomFooterLinkType {
  _type: "bottomFooterLink";
  label?: string;
  popUpData?: TitleContentButtonType
}

export interface SocialLinkType {
  _type: "socialLinkType"
  sociallogo?: CustomImageType;
  sociallogolink?: string;
}

export interface FooterSectionType {
  _type: "footerSectionType"
  maintitle?: string;
  label?: LabelLinkType[];
}

export interface LabelLinkType {
  _type: "LabelLinkType"
  label?: string;
  link?: LinkType;
}


export type MetaAttributeType = {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  site?: string;
  cardType?: string;
};

export type MetaTagType = {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
};

export type SeoType = {
  _type?: "seo";
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  openGraph?: OpenGraphType;
  twitter?: Twitter;
};
