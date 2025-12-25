import { defineField, defineType } from "sanity";

// FIXED: Use 'export const' instead of 'export default'
export const silentFeaturesSection = defineType({
  name: "silentFeaturesSection",
  title: "Silent Features Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logos",
      type: "array",
      of: [
        {
          title: "Logo Item",
          type: "object",
          fields: [
            defineField({
              name: "logoImage",
              title: "Logo Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Silent Features Section",
      };
    },
  },
});