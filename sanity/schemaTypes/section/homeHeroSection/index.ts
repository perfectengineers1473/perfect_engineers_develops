import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "homeHeroSections",
  title: "Home Hero Section",
  type: "object",
  fields: [
    {
      name: "id",
      title: "Id",
      type: "string",
      description:
        "Use the same ID provided in the anchor link to navigate to a specific section on the same page.",
    },
    {
      name: "title",
      title: "Title",
      type: "richText",
    },
    {
      name: "description",
      title: "Description",
      type: "richText",
    },
    {
      name: "lists",
      title: "Lists",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title.custom_rich_text",
    },
    prepare({ title }) {
      const getTitle = title ? toPlainText(title) : null;
      if (!title) {
        return {
          title: "Home Hero Section",
        };
      }
      return {
        title: getTitle,
      };
    },
  },
} as SchemaTypeDefinition;
