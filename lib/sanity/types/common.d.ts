import { PortableTextBlock, Slug } from "sanity";
import { LinkType } from "./linkType";

export interface IconProps {
  className?: string;
}

export type ButtonVariantType = "purple";

export type RichTextLinkType = {
  _type: "link";
  link?: LinkType;
};
export type RichTextSectionType = {
  _type: "richTextSection";
  richText?: RichTextType;
};
export type LeftRightContentSectionType = {
  _type: "leftRightContentSection";
  leftContent?: RichTextType;
  rightContent?: RichTextType;
};

export interface FeaturedPostFeatureType {
  _key?: string;
  type?: string;
  title?: string;
  date?: string; // Sanity date = string
  featureImage?: ImageType;
}


export type RichTextType = {
  _type: "richText";
  custom_rich_text?: PortableTextBlock[];
  richTextLinks?: RichTextLinkType[];
};
export type LabelLinkType = {
  _type: "labelLink";
  label?: string;
  link?: LinkType;
};
export type ButtonType = {
  _type: "button";
  variant?: ButtonVariantType;
  label?: string;
  link?: LinkType | string;
};
export type CustomImageType = {
  _type: "customImage";
  caption?: string;
  alt?: string;
  link?: LinkType;
  asset?: SanityImageAssetType;
  crop?: {
    _type: "SanityImageCrop";
    right: number;
    top: number;
    left: number;
    bottom: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    _type: "SanityImageHotspot";
    width?: number;
  };
};
export type SanityImageAssetType = {
  _type?: "SanityImageAsset";
  _id?: string;
  path?: string;
  url?: string;
  metadata?: {
    _type?: "SanityImageMetadata";
    dimensions?: {
      _type?: "SanityImageDimensions";
      height?: number;
      width?: number;
    };
  };
};
export type TitleContentType = {
  _type: "titleContent";
  title?: string;
  content?: RichTextType;
};
export type TitleImageContentType = {
  _type: "titleImageContent";
  title?: string;
  content?: RichTextType;
  image?: CustomImageType;
};
export interface TitleContentButtonType {
  _type: "titleContentButton";
  title: string;
  content: RichTextType;
  cta: ButtonType;
}
export type TitleImageType = {
  _type: "titleImage";
  title?: string;
  image?: CustomImageType;
};
export type TitleContentJsonFileType = {
  _type: "titleContentJsonFile";
  title?: string;
  content?: RichTextType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
};
export type TitleImageContentJsonFileType = {
  _type: "titleImageContentJsonFile";
  title?: string;
  content?: RichTextType;
  image?: CustomImageType;
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
};
export type AlignmentOptionsType = "left" | "right";
export type TitleContentListJsonFileType = {
  _type: "titleContentListJsonFile";
  title?: string;
  align?: AlignmentOptionsType;
  content?: RichTextType;
  lists?: string[];
  jsonFileUrl?: string;
  jsonFileExtension?: string;
  jsonFileSize?: string;
  jsonFileId?: string;
};
export type IconLabelLinkType = {
  _type: "iconLabelLink";
  label?: string;
  link?: LinkType;
  icon?: CustomImageType;
};
export type AuthorType = {
  _type: "author";
  _id?: string;
  name?: string;
  position?: string;
};
export type ServicesType = {
  _type: "services";
  _id?: string;
  title?: string;
  slug?: Slug;
  image?: CustomImageType;
  description?: RichTextType;
};
export type BlogsType = {
  _type: "blogs";
  _id?: string;
  title?: string;
  category?: CategoryType;
  publishDate?: string;
  slug?: Slug;
  image?: CustomImageType;
  description?: RichTextType;
};

export type CategoryType = {
  _type: "category";
  _id?: string;
  title?: string;
  slug?: Slug;
};
export interface TableRowType {
  _type: "tableRow";
  cells?: string[];
}
export interface PackageDetailType {
  _type: "packageDetail";
  title?: string;
  sizeChart?: {
    rows?: TableRowType[];
  };
}
export interface CountryType {
  _type: "country";
  countryName?: string;
  countryCurrencySymbol?: string;
  planprice?: number;
}
export interface PlanPackageType {
  _type: "planPackage";
  icon?: CustomImageType;
  title?: string;
  currencySymbol?: string;
  price?: string;
  pricePostfix?: string;
  discount?: RichTextType;
  description?: string;
  cta?: ButtonType;
  countries?: CountryType[];
}
export type PlanType = {
  _type: "plan";
  _id?: string;
  name?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  planPackages?: PlanPackageType[];
  packageDetails?: PackageDetailType[];
};

export type ImageAsset = {
  _id: string;
  url: string;
};

export type Button = {
  link: string | undefined;
  label: string;
  url: string;
};

export type HomeHeroSectionType = {
  bgimage: {
    asset: ImageAsset;
  };
  title: string;
  description: string;
  btn: Button;
};

export type SocialLogoLink = {
  sociallogo: {
    asset: ImageAsset;
  };
  sociallogolink: string;
};

export type HeaderType = {
  logo: {
    asset: ImageAsset;
  };
  logotitle: string;
  sociallogolink: SocialLogoLink[];
};

export type ImageAsset = {
  url: string;
};

export type NavLinkItem = {
  _type: "linkItem";
  label: string;
  link: string;
};

export type NavLinkType = {
  _type: "navLink";
  links: NavLinkItem[];
};

export type ImageAsset = {
  _id?: string;
  url: string;
};

export type FeatureItem = {
  _type: "featureItem";
  type: string;
  title: string;
  date: string;
  featureImage: {
    asset: ImageAsset;
  };
};

export type FeaturedPostType = {
  _type: "featuredpost";
  maintitle: string;
  title: string;
  image: {
    asset: ImageAsset;
  };
  buttonText: string;
  buttonUrl: string;
  features: FeatureItem[];
};

export type BlogPost = {
  _type: "blogPost";
  image: {
    asset: ImageAsset;
  };
  type: string;
  blogtitle: string;
  date: string;
};

export type RecentPostType = {
  _type: "recentpost";
  title: string;
  seemore: string;
  blog: BlogPost[];
};

export type FooterType = {
  _type: "footer";
  title: string;
  titletext: string;
  btn: Button;
  sociallogolink: {
    sociallogo: {
      asset: ImageAsset;
    };
    sociallogolink: string;
  }[];
};

export type FooterBottomType = {
  _type: "footerbottom";
  leftsidetext: string;
  centertextlink: string;
  rightsidetext: string;
};
