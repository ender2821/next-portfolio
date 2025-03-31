import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const workPage = defineType({
  name: "workPage",
  title: "Work Secondary Page",
  type: "document",
  fields: [
    orderRankField({ type: "workPage", newItemPosition: "before" }),
    defineField({
      name: "name",
      title: "Page Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "secondaryTitle",
      title: "Secondary Title",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workPageMainGallery",
      title: "Main Gallery",
      type: "array",
      of: [{ type: "reference", to: [{ type: "imageAssets" }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workPageServiceCategory',
      title: 'Service Category',
      type: 'reference',
      to: [{type: 'serviceCategory'}],
    }),
    defineField({
      name: "workPageLayout",
      title: "Work Layout",
      type: "array",
      of: [{type: "workLayout" }],
      validation: (rule) => rule.required(),
    }),
  ]
});