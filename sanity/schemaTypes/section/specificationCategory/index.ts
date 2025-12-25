import { defineField, defineType } from "sanity";

export const specificationCategory = defineType({
  name: "specificationCategory",
  title: "Specification Category",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Category Title (e.g., Dimensions)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Specifications",
      type: "array",
      of: [{ type: "specificationItem" }],
    }),
  ],
});