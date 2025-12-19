import { SchemaTypeDefinition } from "sanity";

export default {
  name: "contactMapSection",
  title: "Contact Map Section",
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
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Map Section",
        subtitle: subtitle,
      };
    },
  },
} as SchemaTypeDefinition;
