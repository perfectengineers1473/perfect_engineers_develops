import { SchemaTypeDefinition } from "sanity";

export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "logotitle",
      title: "Logo Title",
      type: "string",
    },
  ],
} as SchemaTypeDefinition;
