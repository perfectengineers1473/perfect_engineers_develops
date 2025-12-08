import { SchemaTypeDefinition } from "sanity";

export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "position",
      title: "Position",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      position: "position",
    },
    prepare(select) {
      const { title, position } = select;
      if (!title) {
        return {
          title: "Author",
          subtitle: position && position,
        };
      }
      return {
        title: title,
        subtitle: position && position,
      };
    },
  },
} as SchemaTypeDefinition;
