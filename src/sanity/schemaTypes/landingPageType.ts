import { defineType, defineField } from "sanity";

export const landingPageType = defineType({
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
        defineField({
            name: "greetings",
            type: "string"
        }),
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "summary",
            type: 'blockContent',
        })
    ],
})