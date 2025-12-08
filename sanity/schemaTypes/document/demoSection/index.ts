import { SchemaTypeDefinition } from "sanity";

export default {
  name: "demoSection",
  title: "Demo Request Section",
  type: "document",
  groups: [
    { name: "content", title: "Main Content" },
    { name: "form", title: "Form Labels & Placeholders" },
  ],
  fields: [
    // --- MAIN CONTENT ---
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      initialValue: "Start your free demo!",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
    },

    // --- FORM FIELD CONFIGURATION ---
    // This allows you to edit the text SHOWN on the form, 
    // not the data the user types in.
    {
      name: "firstNameLabel",
      title: "First Name Label",
      type: "string",
      group: "form",
      initialValue: "FIRST NAME*",
    },
    {
      name: "lastNameLabel",
      title: "Last Name Label",
      type: "string",
      group: "form",
      initialValue: "LAST NAME*",
    },
    {
      name: "emailLabel",
      title: "Email Label",
      type: "string",
      group: "form",
      initialValue: "WORK EMAIL*",
    },
    {
      name: "companyLabel",
      title: "Company Label",
      type: "string",
      group: "form",
      initialValue: "COMPANY*",
    },
    {
      name: "regionLabel",
      title: "Region Dropdown Label",
      type: "string",
      group: "form",
      initialValue: "COMPANY REGION*",
    },
    {
      name: "sourceLabel",
      title: "Source Question Label",
      type: "string",
      group: "form",
      initialValue: "HOW DID YOU HEAR ABOUT US?",
    },

    // --- FOOTER / LEGAL ---
    {
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "string",
      group: "form",
      initialValue: "SUBMIT",
    },
    {
      name: "disclaimer",
      title: "Privacy Disclaimer",
      type: "text",
      group: "form",
      description: "The small legal text below the form.",
    },
  ],
} as SchemaTypeDefinition;