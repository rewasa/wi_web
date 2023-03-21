import fs from "fs";
import openapiTS from "openapi-typescript";

const DIRECTUS_BASE_URL = process.env.DIRECTUS_BASE_URL;
const DIRECTUS_API_TOKEN = process.env.DIRECTUS_API_TOKEN;

if (!DIRECTUS_BASE_URL)
  throw new Error("You must provide a DIRECTUS_BASE_URL!");
if (!DIRECTUS_API_TOKEN)
  throw new Error("You must provide a DIRECTUS_API_TOKEN!");

async function createTypes() {
  const response = await fetch(`${DIRECTUS_BASE_URL}/server/specs/oas`, {
    headers: {
      Authorization: `Bearer ${DIRECTUS_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const rawOpenAPI = await response.json();

  const tags = rawOpenAPI.tags
    .filter((tag) => {
      const xCollection = tag["x-collection"];

      if (typeof xCollection !== "string" || !xCollection) return false;

      return !xCollection.startsWith("directus_");
    })
    .map((tag) => tag.name);

  tags.push("Files");

  const componentSchemas = {};

  // For security
  for (const tag of tags) {
    componentSchemas[tag] = rawOpenAPI.components.schemas[tag];
  }

  // Fix weird openAPI types
  componentSchemas.ItemsPagesSections.properties.item.items = {};

  const openapi = {
    openapi: rawOpenAPI.openapi,
    components: {
      schemas: componentSchemas,
    },
  };

  const types = await openapiTS(openapi, {
    immutableTypes: true,
  });

  const noTypeCheckComment = "// @ts-nocheck\n\n";

  fs.writeFileSync("./app/generated/types.ts", noTypeCheckComment + types);
}

createTypes().then(() =>
  console.log(`Successfully created TypeScript types at generated/types.ts`)
);
