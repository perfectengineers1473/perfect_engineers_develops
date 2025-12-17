import {
  useNextSanityImage,
  UseNextSanityImageBuilder,
  UseNextSanityImageOptions,
} from "next-sanity-image";
import { getClient } from "../getClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const defaultImageBuilder: UseNextSanityImageBuilder = (
  imageUrlBuilder,
  options
) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 1920)
    )
    .quality(options.quality || 100)
    .fit("clip");
};
export const useSanityImage = function (
  img: SanityImageSource,
  options?: UseNextSanityImageOptions
) {
  const client = getClient();
  try {
    const imageProps = useNextSanityImage(client!, img, {
      ...options,
      imageBuilder: options?.imageBuilder ?? defaultImageBuilder,
    });
    return imageProps;
  } catch {
    // Swallow image builder errors and return null so UI can fallback gracefully
    return null;
  }
};
