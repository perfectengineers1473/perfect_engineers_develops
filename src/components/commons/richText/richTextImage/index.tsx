import { PortableTextTypeComponentProps } from "@portabletext/react";
import React from "react";
import Image from "../../image";
import { CustomImageType } from "../../../../../lib/sanity/types";

const RichTextImage: React.FC<
  PortableTextTypeComponentProps<CustomImageType>
> = ({ value }) => {
  const altText = value?.alt || "Image";

  return (
    <Image
      src={value}
      aria-label={altText}
      alt={altText}
      className="w-full rounded-lg my-4 h-auto object-cover"
    />
  );
};

export default RichTextImage;
