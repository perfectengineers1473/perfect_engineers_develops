import { SchemaTypeDefinition } from "sanity";

export default {
  name: "contactHeroSection",
  type: "object",
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
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "button",
      title: "Button",
      type: "array",
      of:[
        {
            name:"btn",
            title:"Btn",
            type:"button",
        },
      ]
    },
  ],
} as SchemaTypeDefinition;
