import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
          name: "phone number", // Error message is "Does not match phone number pattern"
          invert: false, // Boolean to allow any value that does NOT match pattern
        }),
    }),
    defineField({
      name: "emailLink",
      title: "Email Link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ["https", "http", "mailto"],
        }),
    }),
  ]
});

