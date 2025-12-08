import { SchemaTypeDefinition } from "sanity";

export default {
  name: "homeHeroSection",
  type: "document",
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
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "btn",
      title: "btn",
      type: "button",
    },
  ],
} as SchemaTypeDefinition;
