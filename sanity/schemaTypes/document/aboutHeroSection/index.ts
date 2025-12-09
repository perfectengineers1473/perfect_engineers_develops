import { SchemaTypeDefinition } from "sanity";

export default {
  name: "aboutHeroSection",
  type: "document",
  fields: [
    {
      name: "bgimage",
      title: "BgImage",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "btn",
      title: "btn",
      type: "array",
      of:[
        {
            name:"button",
            title:"Button",
            type:"button"
        }
      ]
    },
  ],
} as SchemaTypeDefinition;
