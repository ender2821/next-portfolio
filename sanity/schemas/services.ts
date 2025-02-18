import { defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "servicesHeroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "servicesHeroImage",
      title: "Hero Image",
      type: "reference",
      to: [{ type: "imageAssets" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "servicesCtaButtonTxt",
      title: "CTA Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "servicesServiceList",
      title: "Service List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceCategory" }]}],
      validation: (rule) => rule.required(),
    }),
  ]
})