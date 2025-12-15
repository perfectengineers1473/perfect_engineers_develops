import { SchemaTypeDefinition } from "sanity";

export default {
  name: "contactMapSection",
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
      type: "string",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
  ],
} as SchemaTypeDefinition;
