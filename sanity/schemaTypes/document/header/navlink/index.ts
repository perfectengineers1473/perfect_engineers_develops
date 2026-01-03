import { SchemaTypeDefinition } from "sanity";

export default {
  name: "navLink",
  title: "Nav Link",
  type: "document",
 fields: [
  {
    name: "buttonlinks",
    title: "Button Links",
    type: "array",
    of: [{ type: "labelLink" }]
  }
],
} as SchemaTypeDefinition;
