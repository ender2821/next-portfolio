import { defineField, defineType } from "sanity";

export const serviceCategoryList = defineType({
  name: "serviceCategoryList",
  title: "Service CategoryList",
  type: "object",
  fields: [
    defineField({
      name: "serviceCatergoryListTitle",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serviceCatergoryListTags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "serviceCatergoryListDescriptions",
      title: "Descriptions",
      type: "array",
      of: [{ type: "text" }],
    }),
  ]
});