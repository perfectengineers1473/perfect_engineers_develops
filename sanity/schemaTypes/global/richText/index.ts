import { SchemaTypeDefinition } from "sanity";

const richText: SchemaTypeDefinition = {
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "custom_rich_text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Heading5", value: "h5" },
            { title: "Heading6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            {
              title: "Bullet",
              value: "bullet",
            },
            { title: "Number", value: "number" },
          ],
          // marks: {
          //   annotations: [
          //     { name: "color", title: "Color", type: "color", icon: IoColorPaletteOutline },
          //     {
          //       name: "customUnderline",
          //       type: "object",
          //       title: "Custom Underline",
          //       icon: PiTextAUnderline,
          //       fields: [
          //         {
          //           name: 'underline',
          //           title: 'Underline',
          //           type: 'boolean',
          //           initialValue: false,
          //         }
          //       ],
          //     },
          //     {
          //       name: "link",
          //       type: "object",
          //       title: "Link",
          //       fields: [
          //         {
          //           name: 'link',
          //           title: 'Link',
          //           type: 'link',
          //         }
          //       ],
          //     },
          //   ],
          // },
        },
        { type: "customImage" },
        { type: "button" },
      ],
    },
  ],
};

export default richText;
