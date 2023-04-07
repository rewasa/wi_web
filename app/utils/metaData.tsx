import type { Page } from "~/page.server";
import { getAssetUrl } from "~/utils/getAssetsUrl";

export function metaData(page: Page | undefined) {
  const suffix = "WASESCHA Immobilien AG";
  const title = page?.title ? `${page?.title} | ${suffix}` : suffix;
  const description = page?.description;
  const imageId = page?.ogImage?.id;
  const slug = page?.slug === "/home" ? "" : page?.slug;
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { robots: "noindex" }, // TODO: Remove this line when you're ready to go live
    { title: title },
    {
      property: "og:title",
      content: title,
    },
    { name: "url", content: `https://wasescha.immobilien${slug}` },
    description && { name: "description", content: description },
    description && { property: "og:description", content: description },
    imageId && { property: "og:image", content: getAssetUrl(imageId) },
  ];
}
