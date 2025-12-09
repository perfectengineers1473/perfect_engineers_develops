import { SchemaTypeDefinition } from "sanity";

export default {
  name: "titleTextSection",
  type: "document",
  fields: [
    {
      name: "titleText",
      title: "Title Text",
      type: "array",
      of: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
