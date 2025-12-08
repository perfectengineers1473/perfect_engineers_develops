import { SchemaTypeDefinition } from "sanity";

export default {
  name: "heroRemediate",
  title: "Hero — Remediate Section",
  type: "document",
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow / Badge",
      type: "string",
      description: "Short text above the heading (e.g. 'Gartner 4.8/5').",
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "block" }],
      description: "Main large headline. Use multiple blocks if you need highlighted words or line breaks.",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "subtitle",
      title: "Subtitle / Tagline",
      type: "string",
      description: "Short tagline shown under the title (one line).",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Longer paragraph describing the product or section.",
    },

    // Optional visual (left-flourish / background image)
    {
      name: "heroImage",
      title: "Hero Image / Illustration",
      type: "image",
      options: { hotspot: true },
      description: "Optional image or illustration used in the hero area.",
    },

    // CTA buttons (primary + secondary)
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          title: "Button",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() },
            { name: "url", title: "URL", type: "url", validation: (Rule) => Rule.required() },
            {
              name: "variant",
              title: "Variant",
              type: "string",
              options: { list: [{ title: "Primary", value: "primary" }, { title: "Secondary", value: "secondary" }] },
              initialValue: "primary",
            },
            {
              name: "openInNewTab",
              title: "Open in new tab",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique().min(1).max(2),
      description: "Add 1 or 2 CTAs (primary then secondary).",
    },

    // Rating block (e.g. Gartner rating + stars)
    {
      name: "rating",
      title: "Rating",
      type: "object",
      fields: [
        { name: "source", title: "Source", type: "string", initialValue: "Gartner" },
        { name: "value", title: "Value", type: "string", description: "e.g. 4.8/5" },
        { name: "numericValue", title: "Numeric value", type: "number", description: "Optional numeric value for sorting / calculations" },
        {
          name: "max",
          title: "Maximum",
          type: "number",
          initialValue: 5,
        },
      ],
    },

    // Optional theme / style controls
    {
      name: "theme",
      title: "Theme",
      type: "string",
      options: { list: [{ title: "Light", value: "light" }, { title: "Dark", value: "dark" }] },
      initialValue: "light",
    },

    {
      name: "anchorId",
      title: "Anchor ID",
      type: "string",
      description: "Optional HTML id to link to this section on the page",
    },

    // Timestamps / editorial helpers (not required)
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      eyebrow: "eyebrow",
      titleBlock: "title.0.children.0.text",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { eyebrow, titleBlock, subtitle } = selection;
      return {
        title: eyebrow ? `${eyebrow} — ${titleBlock || "Hero"}` : titleBlock || "Hero Remediate",
        subtitle: subtitle,
      };
    },
  },
} as SchemaTypeDefinition;
