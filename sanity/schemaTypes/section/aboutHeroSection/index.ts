import { SchemaTypeDefinition } from "sanity";

export default {
  name: "aboutHeroSection",
  title: "About Hero Section",
  type: "object",
  fields: [
    {
      name: "bgimage",
      title: "BgImage",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
   {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "bgimage",
    },
    prepare({ title, media }) {
      return {
        title: title || "About Hero Section",
        media,
      };
    },
  },
} as SchemaTypeDefinition;
