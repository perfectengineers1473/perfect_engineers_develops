import { SchemaTypeDefinition } from "sanity";

export default {
  name: "contactUsSection",
  title: "Contact Us Section",
  type: "object",
  fields: [
    {
      name: "maintitle",
      title: "Main Title",
      type: "string",
    },
    {
      name: "titletext",
      title: "Title Text",
      type: "string",
    },
    {
      name: "contactUs",
      title: "Contact Us Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactItem",
          title: "Contact Item",
          fields: [
            { name: "image", title: "Image", type: "image" },
            { name: "title", title: "Title", type: "string" },
            { name: "text", title: "Text", type: "string" },
            { name: "description", title: "Description", type: "string" },
          ],
        },
      ],
    },
    {
      name: "businessHour",
      title: "Business Hours",
      type: "array",
      of: [
        {
          type: "object",
          name: "businessHourItem",
          title: "Business Hour Item",
          fields: [
            { name: "iconImage", title: "Icon Image", type: "image" },
            { name: "icontitle", title: "Icon Title", type: "string" },

            {
              name: "textInfo",
              title: "Text Info",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "textInfoItem",
                  title: "Text Info Item",
                  fields: [
                    { name: "textTime", title: "Text Time", type: "string" },
                    { name: "textTime1", title: "Text Time", type: "string" },
                    { name: "textTime2", title: "Text Time", type: "string" },
                    { name: "textTime3", title: "Text Time", type: "string" },
                    { name: "textTime4", title: "Text Time", type: "string" },
                    { name: "descriptions", title: "Descriptions", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "maintitle",
      subtitle: "titletext",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Us Section",
        subtitle: subtitle,
      };
    },
  },
} as SchemaTypeDefinition;
