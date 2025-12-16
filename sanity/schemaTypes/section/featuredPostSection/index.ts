import { SchemaTypeDefinition } from "sanity";

export default {
  name: "featuredPostSection",
  type: "object",
  fields: [
    {
      name: "maintitle",
      title: "MainTitle",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "text",
            },
            {
              name: "date",
              title: "Date",
              type: "date",
            },
            {
              name: "featureImage",
              title: "Feature Image",
              type: "image",
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "featureImage",
            },
          },
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
