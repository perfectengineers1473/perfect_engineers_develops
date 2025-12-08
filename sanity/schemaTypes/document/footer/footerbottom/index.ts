import { SchemaTypeDefinition } from "sanity";

export default {
  name: "footerbottom",
  type: "document",
  fields: [
    {
      name: "leftsidetext",
      title: "Left Side Text",
      type: "string",
    },
    {
      name: "centertextlink",
      title: "Center Text Link",
      type: "string",
    },
    {
      name: "rightsidetext",
      title: "Right Side Text",
      type: "string",
    },
  ],
} as SchemaTypeDefinition;
