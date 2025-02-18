import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "contactHeroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactHeroImage",
      title: "Hero Image",
      type: "reference",
      to: [{ type: "imageAssets" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactSectionTitle",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactSectionSubtitle",
      title: "Section Subtitle",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactSectionImage",
      title: "Section Image",
      type: "reference",
      to: [{ type: "imageAssets" }],
      validation: (rule) => rule.required(),
    }),
  ]
})