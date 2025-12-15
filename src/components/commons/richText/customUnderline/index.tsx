import { PortableTextMarkComponentProps } from "@portabletext/react";
import clsx from "clsx";
import React from "react";

export interface CustomUnderlineType {
  _type: "customUnderline";
  underline: boolean;
}

const CustomUnderline: React.FC<
  PortableTextMarkComponentProps<CustomUnderlineType>
> = ({ children, value, text }) => {
  return (
    <span
      aria-label={text}
      className={clsx(
        value?.underline
          ? `bg-none md:bg-[url(/images/customUnderline.png)] bg-no-repeat bg-[bottom] bg-underline leading-[110%]`
          : ""
      )}
    >
      {children}
    </span>
  );
};

export default CustomUnderline;
