import { defineField, defineType } from "sanity";

export const workLayout = defineType({
  name: "workLayout",
  title: "Work Layout",
  type: "object",
  fields: [
    defineField({
      name: "workLayoutTitle",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workLayoutContent",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workLayoutGallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "reference", to: [{ type: "imageAssets" }]}],
      validation: (rule) => rule.required(),
    }),
  ]
});