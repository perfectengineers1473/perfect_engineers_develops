import { SchemaTypeDefinition } from "sanity";

export default {
  name: "productionTimeSection",
  title: "Production Time Section",
  type: "object",
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
  preview: {
    select: {
      firstStat: "Production.0",
    },
    prepare({ firstStat }) {
      const statLabel = firstStat?.label || "";
      const statValue = firstStat?.value || "";
      return {
        title: "Production Time Section",
        subtitle: statLabel && statValue ? `${statLabel}: ${statValue}` : undefined,
      };
    },
  },
} as SchemaTypeDefinition;
