import { PortableTextMarkComponentProps } from "@portabletext/react";
import React from "react";

export interface RichTextColorType {
  _type: "color";
  hex: string;
}

const RichTextColor: React.FC<
  PortableTextMarkComponentProps<RichTextColorType>
> = ({ children, value, text }) => {
  return (
    <span className="font-semibold" aria-label={text} style={{ color: String(value?.hex) }}>
      {children}
    </span>
  );
};

export default RichTextColor;
