import { defineField, defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "work Landing Page",
  type: "document",
  fields: [
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "reference",
      to: [{ type: "imageAssets" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaButtonTxt",
      title: "CTA Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workPages",
      title: "Work Pages",
      type: "array",
      of: [{ type: "reference", to: [{ type: "workPage" }]}],
      validation: (rule) => rule.required(),
    }),
  ]
})