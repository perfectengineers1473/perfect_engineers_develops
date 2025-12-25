import { SchemaTypeDefinition } from "sanity";

export default {
  name: "silentFeaturesSection",
  title: "Silent Features Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "array",
      of: [
        {
          title: "Logo Items",
          type: "object",
          fields: [
            {
              name: "logoImage",
              title: "Logo Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title}) {
      return {
        title: title || "Silent Features Section",
      };
    },
  },
} as SchemaTypeDefinition;
