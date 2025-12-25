import { type SchemaTypeDefinition } from "sanity";
import page from "./page";
import documentsTypes from "./document";
import globalTypes from "./global";
import sectionsTypes from "./section";

// 1. Import your new Specification schemas
// (Assuming you created them in sanity/schemaTypes/section/...)
import { specificationItem } from "./section/specificationItem";
import { specificationCategory } from "./section/specificationCategory";
import { specificationSection } from "./section/specificationSection";

// 2. Export 'schema' (NOT 'schemaTypes') to match sanity.config.ts
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    ...documentsTypes,
    ...globalTypes,
    ...sectionsTypes,
    
    // 3. Add the new specification types here
    specificationItem,
    specificationCategory,
    specificationSection,
  ],
};