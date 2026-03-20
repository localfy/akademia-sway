// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "szkolenia",
        label: "Szkolenia",
        path: "content/szkolenia",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Tytu\u0142", isTitle: true, required: true },
          { type: "string", name: "subtitle", label: "Podtytu\u0142" },
          { type: "string", name: "description", label: "Opis", ui: { component: "textarea" } },
          { type: "string", name: "price", label: "Cena" },
          { type: "string", name: "duration", label: "Czas trwania" },
          { type: "string", name: "level", label: "Poziom", options: ["Podstawowy", "\u015Aredniozaawansowany", "Zaawansowany"] }
        ]
      },
      {
        name: "strona",
        label: "Tre\u015Bci strony",
        path: "content/strona",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Tytu\u0142 sekcji", isTitle: true, required: true },
          { type: "string", name: "content", label: "Tre\u015B\u0107", ui: { component: "textarea" } }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
