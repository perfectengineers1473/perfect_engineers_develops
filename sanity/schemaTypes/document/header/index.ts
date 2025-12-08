import { SchemaTypeDefinition } from "sanity";

export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "logotitle",
      title: "Logo Title",
      type: "string",
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
