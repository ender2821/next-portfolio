import { defineField, defineType } from "sanity";

export const serviceCategory = defineType({
  name: "serviceCategory",
  title: "Service Categories",
  type: "document",
  fields: [
    defineField({
      name: "serviceCatergoryTitle",
      title: "Service Category Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serviceCatergoryId",
      title: "Service Category ID",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "serviceCatergoryTitle",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "serviceCategoryDescription",
      title: "Service Category Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serviceCategoryImage",
      title: "Service Category Image",
      type: "reference",
      to: [{ type: "imageAssets" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serviceCategories",
      title: "Service Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceCategoryList" }]}],
    }),
  ]
})