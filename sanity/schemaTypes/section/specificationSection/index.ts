import { defineField, defineType } from "sanity";

export const specificationSection = defineType({
  name: "specificationSection",
  title: "Specification Section",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Section Headline",
      type: "string",
      initialValue: "Technical Specifications",
    }),
    defineField({
      name: "description",
      title: "Short Description (Optional)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "categories",
      title: "Specification Categories",
      type: "array",
      of: [{ type: "specificationCategory" }],
    }),
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare({ title }) {
      return {
        title: title || "Specification Section",
        subtitle: "Specs display",
      };
    },
  },
});