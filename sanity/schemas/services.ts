import { defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services Page",
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
      name: "serviceList",
      title: "Service List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceCategory" }]}],
      validation: (rule) => rule.required(),
    }),
  ]
})