import { SchemaTypeDefinition } from "sanity";

export default {
  name: "homeRightImageSection",
  title: "Home Right Image Section",
  type: "object",
  fields: [
    {
      name: "items",
      title: "Section Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "item",
          title: "Content Item",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "titleText",
              title: "Description",
              type: "richText",
            },
            {
              name: "button",
              title: "Button",
              type: "button",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;