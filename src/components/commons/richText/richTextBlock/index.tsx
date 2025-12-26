import {
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";
import React from "react";

export type PortableTextStyleType =
  | "normal"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

const RichTextBlock = ({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) => {
  switch (value.style) {
    case "h1":
      return <h1 className="text-[32px] sm:text-[46px] md:text-[56px] xl:text-[72px] leading-[110%] tracking-[-0.02em] pt-5 md:pt-11 pb-4 font-semibold">{children}</h1>;
    case "h2":
      return <h2 className="text-[30px] sm:text-[40px] xl:text-[56px] leading-[117%] pt-5 md:pt-11 pb-4 font-semibold">{children}</h2>;
    case "h3":
      return <h3 className="text-[26px] sm:text-[32px] leading-[130%] tracking-[-0.02em] pt-5 md:pt-11 pb-4 font-semibold">{children}</h3>;
    case "h4":
      return <h4 className="text-[22px] sm:text-[24px] leading-[100%] pt-5 md:pt-11 pb-4 font-semibold">{children}</h4>;
    case "h5":
      return <h5 className="text-[18px] leading-[1.15] pt-5 md:pt-11 pb-4 font-semibold">{children}</h5>;
    case "h6":
      return <h6 className="text-[16px] leading-[1.15] pt-5 md:pt-11 pb-4 font-semibold">{children}</h6>;
    case "blockquote":
      return <blockquote className="text-base font-medium pl-4 border-l-[2px]">{children}</blockquote>;
    default:
      return <p className="text-[15px] em:text-[18px]  text-black leading-[176%] mb-[30px]">{children}</p>;
  }
};

export default RichTextBlock;
