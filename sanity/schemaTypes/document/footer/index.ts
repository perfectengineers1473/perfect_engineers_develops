import { SchemaTypeDefinition } from "sanity";

export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Company Name",
      type: "string",
    },
    {
      name: "titletext",
      title: "Description",
      type: "string",
    },

    // CTA BUTTON
    {
      name: "btn",
      title: "Back To Top Button",
      type: "button",
    },

    // SOCIAL ICONS
    {
      name: "sociallogolink",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sociallogo",
              title: "Icon",
              type: "image",
            },
            {
              name: "sociallogolink",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },

    // SITE MAP LINKS
    {
      name: "siteLinks",
      title: "Site Map Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              description: "Example: /contact",
            },
          ],
        },
      ],
    },

    // LEGAL LINKS
    {
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
