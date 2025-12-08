import { SchemaTypeDefinition } from "sanity";

export default {
  name: "navLink",
  title: "Nav Link",
  type: "document",
  fields: [
    {
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
