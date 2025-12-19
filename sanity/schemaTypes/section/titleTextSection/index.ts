import { SchemaTypeDefinition } from "sanity";

export default {
  name: "titleTextSection",
  type: "object",
  fields: [
    {
      name: "titleText",
      title: "Title Text",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "richText",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
