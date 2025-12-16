import { SchemaTypeDefinition } from "sanity";

export default {
  name: "imageSection",
  title: "Image Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
} as SchemaTypeDefinition;