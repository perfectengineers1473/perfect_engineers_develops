import NextImage from "next/image";
import { CustomImageType } from "../../../../lib/sanity/types";
import { useSanityImage } from "../../../../lib/sanity";

const SanityImage: React.FC<{
  src: CustomImageType;
}> = ({ src, ...props }) => {
  const image = useSanityImage(src);
  return image ? (
    <NextImage {...image} alt={src?.alt || "Image"} quality={100} {...props} />
  ) : null;
};
export default SanityImage;
