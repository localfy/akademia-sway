import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

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

  schema: {
    collections: [
      {
        name: "szkolenia",
        label: "Szkolenia",
        path: "content/szkolenia",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Tytuł", isTitle: true, required: true },
          { type: "string", name: "subtitle", label: "Podtytuł" },
          { type: "string", name: "description", label: "Opis", ui: { component: "textarea" } },
          { type: "string", name: "price", label: "Cena" },
          { type: "string", name: "duration", label: "Czas trwania" },
          { type: "string", name: "level", label: "Poziom", options: ["Podstawowy", "Średniozaawansowany", "Zaawansowany"] },
        ],
      },
      {
        name: "strona",
        label: "Treści strony",
        path: "content/strona",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Tytuł sekcji", isTitle: true, required: true },
          { type: "string", name: "content", label: "Treść", ui: { component: "textarea" } },
        ],
      },
    ],
  },
});
