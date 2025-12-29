import { type SchemaTypeDefinition } from "sanity";

import page from "./page";
import documentsTypes from "./document";
import globalTypes from "./global";
import sectionsTypes from "./section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    ...documentsTypes,
    ...globalTypes,
    ...sectionsTypes,
  ],
};