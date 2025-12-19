import { SchemaTypeDefinition } from "sanity";

export default {
  name: "recentPostSection",
  title: "Recent Post Section",
  type: "object",
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
  preview: {
    select: {
      title: "title",
      firstPost: "blog.0.blogtitle",
    },
    prepare({ title, firstPost }) {
      return {
        title: title || "Recent Post Section",
        subtitle: firstPost ? `Latest: ${firstPost}` : undefined,
      };
    },
  },
} as SchemaTypeDefinition;
