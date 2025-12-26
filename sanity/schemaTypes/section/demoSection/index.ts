import { SchemaTypeDefinition } from "sanity";

export default {
  name: "demoSection",
  title: "Demo Request Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Start your free demo!",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
    },
    {
      name: "firstNameLabel",
      title: "First Name Label",
      type: "string",
    },
    {
      name: "lastNameLabel",
      title: "Last Name Label",
      type: "string",
    },
    {
      name: "emailLabel",
      title: "Email Label",
      type: "string",
    },
    {
      name: "companyLabel",
      title: "Company Label",
      type: "string",
    },
    {
      name: "regionLabel",
      title: "Region Dropdown Label",
      type: "string",
    },
    {
      name: "sourceLabel",
      title: "Source Question Label",
      type: "string",
    },
    {
      name: "disclaimer",
      title: "Privacy Disclaimer",
      type: "richText",
    },
    {
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "button",
    },

  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
    prepare({ title }) {
      return {
        title: title || "Demo Request Section",
      };
    },
  },
} as SchemaTypeDefinition;