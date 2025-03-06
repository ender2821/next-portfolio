import { defineField, defineType } from "sanity";

export const workPage = defineType({
  name: "workPage",
  title: "Work Page",
  type: "document",
  fields: [
    defineField({
      name: "workPageLayout",
      title: "Work Page Layout",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "workLayoutGallery",
              title: "Work Layout Gallery",
              type: "array",
              of: [{ type: "reference", to: [{ type: "imageAsset" }] }],
            }),
          ],
        },
      ],
    }),
    // ...existing code...
  ],
});
