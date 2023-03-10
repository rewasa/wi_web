import { Directus } from "@directus/sdk";
import type { components } from "~/generated/types";

type DirectusSchemas = components["schemas"];

type DirectusClient = {
  Person: DirectusSchemas["ItemsPerson"];
  Property: DirectusSchemas["ItemsProperty"];
  Valuations: DirectusSchemas["ItemsValuations"];
};

const directus = new Directus<DirectusClient>(
  process.env.DIRECTUS_BASE_URL || ""
);

export async function getDirectusClient() {
  if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
    });
  } else if (process.env.DIRECTUS_API_TOKEN) {
    await directus.auth.static(process.env.DIRECTUS_API_TOKEN);
  }

  return directus;
}
