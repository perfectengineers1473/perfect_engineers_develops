import { defineField, defineType } from "sanity";

export const specificationItem = defineType({
  name: "specificationItem",
  title: "Specification Row",
  type: "object",
  fields: [
    defineField({
      name: "model",
      title: "Model",
      type: "string",
    }),
    defineField({
      name: "coolingCapacity",
      title: "Cooling Capacity (Approx)",
      type: "string",
    }),
    defineField({
      name: "storageCapacity",
      title: "Storage Capacity",
      type: "string",
    }),
    // Dimensions Group
    defineField({
      name: "height",
      title: "Height",
      type: "string",
      fieldset: "dimensions",
    }),
    defineField({
      name: "depth",
      title: "Depth",
      type: "string",
      fieldset: "dimensions",
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "string",
      fieldset: "dimensions",
    }),
    defineField({
      name: "faucets",
      title: "No. of Faucets",
      type: "string",
    }),
  ],
  fieldsets: [
    {
      name: "dimensions",
      title: "Approx Dimensions",
      options: { collapsible: true, collapsed: false },
    },
  ],
  preview: {
    select: {
      title: "model",
      subtitle: "coolingCapacity",
    },
  },
});