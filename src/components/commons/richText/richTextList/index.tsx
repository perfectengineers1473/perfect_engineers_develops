import { PortableTextListComponent, PortableTextMarkComponent } from "@portabletext/react";
import React from "react";

export const BulletList: PortableTextListComponent = ({ children }) => {
  return (
    <div className="pt-6 pb-4 ">
      <ul className="flex flex-col gap-3 list-disc pl-6 [&>li]:font-normal [&>li]:text-base">{children}</ul>
    </div>
  );
};

export const NumberList: PortableTextListComponent = ({ children }) => {
  return (
    <div className="pt-6 pb-4">
      <ol className="flex flex-col gap-3 list-decimal pl-6 [&>li]:font-normal [&>li]:text-base">{children}</ol>
    </div>
  );
};

export const RichTextItalic: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <em aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px] italic">
      {children}
    </em>
  );
};

export const RichTextBold: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <strong aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px] font-bold">
      {children}
    </strong>
  );
};

export const RichTextCode: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <code aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px]">
      {children}
    </code>
  );
};

export const RichTextUnderline: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <span aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px] underline">
      {children}
    </span>
  );
};

export const RichTextStrikeThrough: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <del aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px] line-through">
      {children}
    </del>
  );
};
