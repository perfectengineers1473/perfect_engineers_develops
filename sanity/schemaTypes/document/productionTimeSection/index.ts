import { SchemaTypeDefinition } from "sanity";

export default {
  name: "productionTimeSection",
  title: "Production Time Section",
  type: "document",
  fields: [
    {
      name: "Production",
      type: "array",
      of: [
        {
          type: "object",
          name: "statItem",
          title: "Stat Item",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "Example: 80%, 22, $20K+"
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ]
        }
      ],
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          title: "button",
        }
      ],
    },
  ],
} as SchemaTypeDefinition;
