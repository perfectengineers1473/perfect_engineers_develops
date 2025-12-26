import { SchemaTypeDefinition } from "sanity";

export default {
  name: "contactHeroSection",
  title: "Contact Hero Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
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
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    }

  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Hero Section",
        subtitle: subtitle,
      };
    },
  },
} as SchemaTypeDefinition;
