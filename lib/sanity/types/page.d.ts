import { Image, Slug } from "sanity";
import { SanityDocument } from "next-sanity";
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
  FeaturedPostFeatureType,
  ContactUsItemType,
  BusinessHourItemType,
  TitleTextSectionsType,
  BlogType,
  SocialLinkType,
  FooterSectionType,
  SpecificationCategory,

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
  | AboutLeftRightImageSectionType
  | AboutHeroSectionType
  | ContactHeroSectionType
  | ContactMapSectionType
  | ContactUsSectionType
  | DemoSectionType
  | FeaturedPostSectionType
  | HeroRemediateSectionType
  | HomeRightImageSectionType
  | ImageSectionType
  | ProductionTimeSectionType
  | RecentPostSectionType
  | TitleTextSectionType
  | FooterType
  | SilentFeaturesType 
  | SpecificationCategoryType;
  
import { ButtonType } from "./common";

// ... existing imports

export interface SpecificationCategoryType {
  _type: "specificationCategory";
  headline?: string;
  description?: string;
  categories?: SpecificationCategory[];
}


// 3. Add to SectionType union
export type SectionType =
  | HomeHeroSectionType
  // ... other sections ...
  | SpecificationSectionType // <-- Add this line
  | FooterType;
  
export interface FooterLinkType {
  label?: string;
  url?: string;
}

export interface SilentFeaturesType {
  _type: "silentFeatures";
  title?: string;
  logo?: CustomImageType[];
}

export interface FooterType {
  _type: "footer";
  title?: string;
  titletext?: string;
  btn?: ButtonType;
  sociallogolink?: SocialLinkType[];
  titlelabellink?: FooterSectionType[];
}

export interface TitleTextSectionType {
  _type: "TitleTextSection";
  titleText?: TitleTextSectionsType[];
}

export interface RecentPostSectionType {
  _type: "RecentPostSection";
  title?: string;
  seemore?: string;
  blog?: BlogType[];
}

export interface ProductionTimeSectionType {
  _type: "productionTimeSection";
  Production?: {
    _key?: string;
    value?: string;
    label?: string;
  }[];
  buttons?: ButtonType[];
}

export interface ImageSectionType {
  _type: "ImageSection";
  image?: ImageType;
}

export interface HomeRightImageSectionType {
  _type: "homeRightImageSection";
  items?: {
    _key?: string;
    title?: string;
    titleText?: RichTextType;
    button?: ButtonType;
    image?: ImageType;
  }[];
}

export interface HeroRemediateSectionType {
  _type: "heroRemediateSection";
  rating?: HeroRemediateRatingType;
  title?: string;
  description?: RichTextType;
  buttons?: HeroRemediateButtonType[];
}


export interface FeaturedPostSectionType {
  _type: "featuredPostSection";
  maintitle?: string;
  title?: string;
  image?: CustomImageType;
  button?: ButtonType[];
  features?: FeaturedPostFeatureType[];
}

export interface DemoSectionType {
  _type: "demoSection";
  title?: string;
  heroImage?: ImageType;

  firstNameLabel?: string;
  lastNameLabel?: string;
  emailLabel?: string;
  companyLabel?: string;
  regionLabel?: string;
  sourceLabel?: string;

  disclaimer?: RichTextType;
  submitButtonText?: ButtonType;
}

export interface ContactUsSectionType {
  _type: "contactUsSection";
   id?: string;
  maintitle?: string;
  titletext?: string;
  contactUs?: ContactUsItemType[];
  businessHour?: BusinessHourItemType[];
}

export interface ContactMapSectionType {
  _type: "ContactMapSection";
  title?: string;
  description?: string;
  button?: ButtonType;
}

export interface ContactHeroSectionType {
  _type: "ContactHeroSection";
  title?: string;
  image?: ImageType;
  description?: string;
  button?: ButtonType[];
}

export interface Page extends SanityDocument {
  hasWithBackGround: any;
  slug: Slug;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: SectionType[];
}

export interface AboutHeroSectionType {
  _type: "AboutHeroSection";
  title?: string;
  bgimage?: ImageType;
  btn?: ButtonType[];
}

export interface HomeHeroSectionType {
  _type: "homeHeroSections";
  id?: string;
  title?: RichTextType;
  description?: RichTextType;
 image?: CustomImageType;
 mobileImage?: CustomImageType;
 buttons?: ButtonType[];
 lists?: string[];

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

export interface AboutLeftRightImageItemType {
  image?: CustomImageType;
  title?: string;
  titleText?: RichTextType;
  button?: ButtonType;
}

export interface AboutLeftRightImageSectionType {
  _type: "aboutLeftRightImageSection";
  leftImageText?: AboutLeftRightImageItemType[];
  rightImageText?: AboutLeftRightImageItemType[];
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
export { ButtonType, FooterType };

