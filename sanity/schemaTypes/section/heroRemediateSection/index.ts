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
        {
          name: "source",
          title: "Source",
          type: "string",
          initialValue: "Gartner",
        },
        {
          name: "value",
          title: "Value",
          type: "string",
          description: "Example: 4.8/5",
        },
        {
          name: "numericValue",
          title: "Numeric Value",
          type: "number",
        },
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
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
} as SchemaTypeDefinition;
