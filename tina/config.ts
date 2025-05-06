import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            return "/"
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  {
                    name: "message",
                    label: "Message",
                    type: "rich-text",
                  },
                  {
                    name: "links",
                    label: "Links",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label }
                      },
                      defaultItem: {
                        label: "new link",
                        link: "/"
                      },
                    },
                    fields: [
                      {type: "string", name: "label", label: "Label"},
                      {type: "string", name: "link", label: "Link"},
                      {
                        type: "string",
                        name: "style",
                        label: "Style",
                        options: ["cta-button", "secondary-button"],
                      }
                    ]
                  }
                ]
              },
              {
              name: "feature",
              label: "Feature",
              fields: [
                {
                  name: "message",
                  label: "Message",
                  type: "rich-text",
                },
                {
                  name: "cards",
                  label: "Cards",
                  type: "object",
                  list: true,
                  ui: {
                    itemProps: (item) => {
                      return { label: item.label }
                    },
                    defaultItem: {
                      icon: "shield",
                      label: "new card",
                      description: "This is a new card",
                    },
                  },
                  fields: [
                    {
                      type: "string",
                      name: "icon",
                      label: "Icon",},
                    { type: "string", name: "label", label: "Label" },
                    {
                      type: "string",
                      name: "description",
                      label: "Description",
                      ui: {
                        component: "textarea",
                      },
                    },
                  ],
                },
              ],
            },
            ]
          }
        ]
      },
    ],
  },
});
