import { SchemaTypeDefinition } from "sanity";

export default {
  name: "aboutLeftRightImageSection",
  title: "About Left Right Image Section",
  type: "object",
  fields: [
    {
      name: "rightImageText",
      title: "Right Image Text",
      type: "array",
      of: [
        {
          type: "object",
          name: "rightImageTextItem",
          title: "Right Image Item",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "titleText",
              title: "Title Text",
              type: "richText",
            },
            {
              name: "button",
              title: "Button",
              type: "button",
            },
          ],
        },
      ],
    },

    {
      name: "leftImageText",
      title: "Left Image Text",
      type: "array",
      of: [
        {
          type: "object",
          name: "leftImageTextItem",
          title: "Left Image Item",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "titleText",
              title: "Title Text",
              type: "richText",
            },
            {
              name: "button",
              title: "Button",
              type: "button",
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
