import { FooterType, HeaderType, SeoType } from "./settings";
import {
  AuthorType,
  BlogsType,
  ButtonType,
  CategoryType,
  CustomImageType,
  PlanType,
  RichTextType,
  ServicesType,
  TitleContentJsonFileType,
  TitleContentListJsonFileType,
  TitleContentType,
  TitleImageContentJsonFileType,
  TitleImageContentType,
  TitleImageType,
} from "./common";

export interface LayoutPropsType {
  _id: "settings";
  _type: "settings";
  header?: HeaderType;
  footer?: FooterType;
}

export interface PageBuilderType {
  _type: "section";
  content: SectionType[];
}

export type SectionType =
  | HomeHeroSectionType
  | HeroSectionType
  | TailoredDataAnalyticsSectionType
  | AuthorSectionType
  | OurProcessSectionType
  | WhatWeDoSectionType
  | OtherServicesSectionType
  | OtherServiceAboutSectionType
  | OtherCapabilitiesSectionType
  | HowItWorksSectionType
  | PartnerSectionType
  | ServiceListingSectionType
  | OurServicesSectionType
  | ServiceAboutSectionType
  | RelatedBlogsSectionType
  | PlanAndPricingSectionType
  | AllBlogPostSectionType
  | AboutLeftImageSection;

export interface Page extends SanityDocument {
  hasWithBackGround?: boolean;
  slug: string;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: PageBuilderType[];
}

export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  id?: string;
  headline?: string;
  title?: RichTextType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}
export interface HeroSectionType {
  _type: "heroSection";
  id?: string;
  headline?: string;
  title?: RichTextType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}

export interface AboutLeftImageSection {
  _type: "aboutLeftImag";
  id?: string;
  headline?: string;
  title?: RichTextType;
  image?: CustomImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}


export interface PlanAndPricingSectionType {
  _type: "planAndPricingSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  plans?: PlanType[];
}
export interface RelatedBlogsSectionType {
  _type: "relatedBlogsSection";
  id?: string;
  title?: string;
  relatedBlogs?: BlogsType[];
}

export interface TailoredDataAnalyticsSectionType {
  _type: "tailoredDataAnalyticsSection";
  id?: string;
  title?: RichTextType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}

export interface AuthorDetailType {
  _type: "authorDetail";
  content?: RichTextType;
  author?: AuthorType;
  image?: CustomImageType;
}
export interface AuthorSectionType {
  _type: "authorSection";
  id?: string;
  image?: CustomImageType;
  authorDetails?: AuthorDetailType[];
}

export interface OurProcessSectionType {
  _type: "ourProcessSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  titleContents?: TitleContentType[];
}
export interface HowItWorksSectionType {
  _type: "howItWorksSection";
  id?: string;
  headline?: RichTextType;
  titleContentJsonFiles?: TitleContentJsonFileType[];
}

export interface PartnerSectionType {
  _type: "partnerSection";
  id?: string;
  title?: RichTextType;
  cta?: ButtonType;
  titleImages?: TitleImageType[];
}
export interface WhatWeDoSectionType {
  _type: "whatWeDoSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  leftContent?: RichTextType;
  rightContent?: RichTextType;
  titleImageContentJsonFiles?: TitleImageContentJsonFileType[];
}

export interface OtherServicesSectionType {
  _type: "otherServicesSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  titleImageContents?: TitleImageContentType[];
}
export interface OtherCapabilitiesSectionType {
  _type: "otherCapabilitiesSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  titleImageContents?: TitleImageContentType[];
}

export interface OurServicesSectionType {
  _type: "ourServicesSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  titleContentJsonFiles?: TitleContentJsonFileType[];
}

export interface OtherServiceAboutSectionType {
  _type: "otherServiceAboutSection";
  id?: string;
  headline?: RichTextType;
  title?: RichTextType;
  titleImageContents?: TitleImageContentType[];
  backgroundImage?: CustomImageType;
}

export interface ServiceListingSectionType {
  _type?: "serviceListingSection";
  title: string;
  id?: string;
  services?: ServicesType[];
}

export interface ServiceAboutSectionType {
  _type?: "serviceAboutSection";
  id?: string;
  description?: RichTextType;
  titleContentListJsonFiles?: TitleContentListJsonFileType[];
}

export interface AllBlogPostSectionType {
  _type?: "allBlogPostSection";
  title: string;
  id?: string;
  blogs?: BlogsType[];
  categories?: CategoryType[];
}
