import { SchemaTypeDefinition } from "sanity";

export default {
  name: "footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titletext",
      title: "Title Text",
      type: "string",
    },
    {
      name: "btn",
      title: "btn",
      type: "button",
    },
    {
      name: "sociallogolink",
      title: "Social Logo Link",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sociallogo",
              title: "Social Logo",
              type: "image",
            },
            {
              name: "sociallogolink",
              title: "Social Logo Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
