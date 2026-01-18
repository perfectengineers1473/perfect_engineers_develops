import React from "react";
import NextImage from "next/image";
import { CustomImageType } from "../../../../lib/sanity/types";
import { useSanityImage } from "../../../../lib/sanity";

type SanityImageProps = {
  src: CustomImageType;
  alt?: string;
} & Omit<React.ComponentProps<typeof NextImage>, "src" | "alt">;

const SanityImage: React.FC<SanityImageProps> = ({ src, alt, ...props }) => {
  const image = useSanityImage(src);
  return image ? (
    <NextImage
      {...image}
      alt={alt ?? src?.alt ?? "Image"}
      quality={75}
      loading="lazy"
      {...props}
    />
  ) : null;
};

export default SanityImage;
