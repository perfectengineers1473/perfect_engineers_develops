import { SchemaTypeDefinition } from "sanity";

export default {
  name: "heroRemediateSection",
  title: "Hero Remediate Section",
  type: "object",
  fields: [
    {
      name: "rating",
      title: "Rating",
      type: "object",
      fields: [
        { name: "source", title: "Source", type: "string", initialValue: "Gartner" },
        { name: "value", title: "Value", type: "string", description: "e.g. 4.8/5" },
        { name: "numericValue", title: "Numeric value", type: "number", description: "Optional numeric value for sorting / calculations" },
        {
          name: "max",
          title: "Maximum",
          type: "number",
          initialValue: 5,
        },
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "richText",
      description: "Longer paragraph describing the product or section.",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          title: "Button",
          fields: [
            { name: "label", title: "Label", type: "string"},
            { name: "url", title: "URL", type: "url"},
          ],
        },
      ],
      description: "Add 1 or 2 CTAs (primary then secondary).",
    },
  ],
} as SchemaTypeDefinition;
