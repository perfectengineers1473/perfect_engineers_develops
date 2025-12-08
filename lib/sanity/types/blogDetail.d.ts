import { SanityDocument } from "next-sanity";
import { CategoryType, CustomImageType, RichTextType } from "./common";
import { LayoutPropsType, PageBuilderType } from "./page";
import { SeoType } from "./settings";

export interface BlogDetailPageType extends SanityDocument {
  _type: "blogs";
  _id: string;
  slug: string;
  layoutProps: LayoutPropsType;
  seo: SeoType;
  title?: string;
  publishDate?: string;
  image?: CustomImageType;
  description?: RichTextType;
  content?: RichTextType;
  category?: CategoryType;
  jsonFile?: {
    jsonFileUrl?: string;
    jsonFileExtension?: string;
    jsonFileSize?: string;
    jsonFileId?: string;
  }
  pageBuilder?: PageBuilderType[];
}
        