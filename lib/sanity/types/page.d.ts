import { Slug } from "sanity";
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
  | AboutLeftImageSection
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
  | TitleTextSectionType;

  export interface TitleTextSectionType {
  _type: "TitleTextSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }

export interface RecentPostSectionType {
  _type: "RecentPostSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }

export interface ProductionTimeSectionType {
  _type: "ProductionTimeSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }

export interface ImageSectionType {
  _type: "ImageSection";
  image?: ImageType;
  }

  export interface HomeRightImageSectionType {
  _type: "HomeRightImageSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }
  
  export interface HeroRemediateSectionType {
  _type: "HeroRemediateSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }

  export interface FeaturedPostSectionType {
  _type: "featuredPostSection";
  id?: string;
  maintitle?: string;
  title?: string;
  image?: ImageType;
  button?: ButtonType;
  features?: FeaturedPostFeatureType[];
}

  export interface DemoSectionType {
  _type: "DemoSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
  }

export interface ContactUsSectionType {
  _type: "ContactUsSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}

export interface ContactMapSectionType {
  _type: "ContactMapSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}

export interface ContactHeroSectionType {
  _type: "ContactHeroSection";
  id?: string;
  headline?: string;
  title?: string;
  bgimage?: ImageType;
  description?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
}

export interface Page extends SanityDocument {
  hasWithBackGround: any;
  slug: string;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: PageBuilderType[];
}

export interface AboutHeroSectionType {
  _type: "AboutHeroSection";
  title?: string;
  bgimage?: ImageType;
  btn?: ButtonType[];
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
