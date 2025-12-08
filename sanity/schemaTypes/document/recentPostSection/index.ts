import { SchemaTypeDefinition } from "sanity";

export default {
  name: "recentpost",
  title: "Recentpost",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "seemore",
      title: "Seemore",
      type: "string",
    },
    {
      name: "blog",
      title: "Blog",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              name: "blogtitle",
              title: "Blog Title",
              type: "string",
            },
            {
              name: "date",
              title: "Date",
              type: "date",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
