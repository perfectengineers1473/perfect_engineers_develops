import { type SchemaTypeDefinition } from "sanity";

import page from "./page";
import documentsTypes from "./document";
import globalTypes from "./global";
import sectionsTypes from "./section";

// Specification Imports (Keep these if they are NOT in sectionsTypes)
import { specificationItem } from "./section/specificationItem";
import { specificationCategory } from "./section/specificationCategory";
import { specificationSection } from "./section/specificationSection";

// DELETE THIS LINE:
// import { silentFeaturesSection } from "./section/silentFeaturesSection"; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    ...documentsTypes,
    ...globalTypes,
    
    // This array ALREADY contains silentFeaturesSection now
    ...sectionsTypes, 

    // Specification
    specificationItem,
    specificationCategory,
    specificationSection,

    // DELETE THIS LINE:
    // silentFeaturesSection, 
  ],
};