import { PortableTextTypeComponentProps } from "@portabletext/react";
import React from "react";
import Image from "../../image";
import { CustomImageType } from "../../../../../lib/sanity/types";

const RichTextImage: React.FC<
  PortableTextTypeComponentProps<CustomImageType>
> = ({ value }) => {
  return <Image src={value} aria-label={value?.alt || ""} alt={value?.alt || ""} className="w-full rounded-lg my-4 h-auto object-cover" />;
};

export default RichTextImage;
