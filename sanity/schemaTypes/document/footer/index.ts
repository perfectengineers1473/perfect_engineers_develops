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
    {
      name: "titlelabellink",
      title: "Title Label Link",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "maintitle",
              title: "Main Title",
              type: "string",
            },
            {
              name: "label",
              title: "Label",
              type: "array",
              of: [{ type: "labelLink" }],
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
