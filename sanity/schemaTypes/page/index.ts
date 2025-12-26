import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      group: "main",
      type: "array",
      of: [
        // Existing Sections
        { type: "homeHeroSections" },
        { type: "aboutLeftRightImageSection" },
        { type: "productionTimeSection" },
        { type: "aboutHeroSection" },
        { type: "contactHeroSection" },
        { type: "contactMapSection" },
        { type: "contactUsSection" },
        { type: "demoSection" },
        { type: "featuredPostSection" },
        { type: "heroRemediateSection" },
        { type: "homeRightImageSection" },
        { type: "imageSection" },
        { type: "recentPostSection" },
        { type: "titleTextSection" },
        { type: "specificationSection" },
        { type: "silentFeaturesSection" },
      ],
    }),
  ],
});