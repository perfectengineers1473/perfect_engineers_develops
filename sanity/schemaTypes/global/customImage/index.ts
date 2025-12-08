import { SchemaTypeDefinition } from "sanity";

export default {
  name: "customImage",
  title: "Custom Image",
  type: "image",
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "alt",
      type: "string",
      title: "Alt",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset",
      alt: "alt",
    },
    prepare(select) {
      const { imageUrl, alt } = select;
      return {
        title: alt,
        media: imageUrl && imageUrl,
      };
    },
  },
} as SchemaTypeDefinition;
