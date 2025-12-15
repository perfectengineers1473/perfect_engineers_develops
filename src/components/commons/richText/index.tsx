import { PortableText } from "@portabletext/react";
import CreateRichTextComponent from "./createRichTextComponent";
import { RichTextType } from "../../../../lib/sanity/types";

export interface RichTextProps {
  block: RichTextType;
  isRichTextBlock?: boolean // This field is used for the Blog Detail Page
}

const RichText: React.FC<RichTextProps> = ({ block, isRichTextBlock }) => {
  const { custom_rich_text, richTextLinks } = block || {};

  const RichTextComponents = CreateRichTextComponent({ richTextLinks, isRichTextBlock });

  return (
    <PortableText value={custom_rich_text} components={RichTextComponents} />
  );
};
export default RichText;
