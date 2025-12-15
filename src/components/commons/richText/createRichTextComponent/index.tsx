import React from "react";
import { RichTextLinkType } from "../../../../../lib/sanity/types";
import { PortableTextComponents } from "@portabletext/react";
import CustomUnderline from "../customUnderline";
import RichTextColor from "../richTextColor";
import RichTextImage from "../richTextImage";
import RichTextLink from "../richTextLink";
import { BulletList, RichTextItalic, NumberList, RichTextBold, RichTextCode, RichTextUnderline, RichTextStrikeThrough } from "../richTextList";
import RichTextBlock from "../richTextBlock";

export interface CreateRichTextComponentProps {
  richTextLinks: RichTextLinkType[];
  isRichTextBlock?: boolean;
}

const CreateRichTextComponent = ({
  richTextLinks,
  isRichTextBlock,
}: CreateRichTextComponentProps): PortableTextComponents => {
  return {
    types: {
      customImage: RichTextImage,
    },
    marks: {
      link: (props) => (
        <RichTextLink {...props} richTextLinks={richTextLinks} />
      ),
      color: RichTextColor,
      customUnderline: CustomUnderline,
      em: RichTextItalic,
      strong: RichTextBold,
      code: RichTextCode,
      underline: RichTextUnderline,
      "strike-through": RichTextStrikeThrough,
    },
    list: {
      bullet: BulletList,
      number: NumberList,
    },
    block: isRichTextBlock ? RichTextBlock : undefined,
  };
};

export default CreateRichTextComponent;
