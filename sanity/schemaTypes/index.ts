import { type SchemaTypeDefinition } from "sanity";
import page from "./page";
import documentsTypes from "./document";
import globalTypes from "./global";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, ...documentsTypes, ...globalTypes],
};
