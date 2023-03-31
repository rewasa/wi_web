import { getDirectusClient } from "~/lib/directus";

export interface Pages {
  data: Page[];
}

export interface Page {
  id: string;
  status: string;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface Section {
  collection: "Heading" | "Hero" | "Services" | "ContentFeature"; // add more
  item: Item;
}

export interface Item {
  id: string;
  title: string;
  text1?: string;
  text2?: string;
  status: string;
  sort: any;
  text?: string;
  link?: string;
  services?: Service[];
  backgroundImage?: {
    id: string;
  };
  textColor?: string;
  backgroundColor?: string;
  images?: any[];
  imageHeight?: string;
}

export interface Service {
  collection: "Service";
  item: ServiceItem;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export async function loadPages() {
  const directus = await getDirectusClient();
  const pages = await directus.items("Pages").readByQuery({
    fields: [
      "id",
      "status",
      "slug",
      "title",
      "description",
      "sections.collection",
      "sections.item.title",
      "sections.item.text",
      "sections.item.text1",
      "sections.item.text2",
      "sections.item.backgroundImage.id",
      "sections.item.textColor",
      "sections.item.backgroundColor",
      "sections.item.rowBreakdown",
      "sections.item.contentLeft",
      "sections.item.link",
      "sections.item.contentList.*",
      "sections.item.images.*",
      "sections.item.imageHeight",
      "sections.item.html",
      "sections.item.*.collection",
      "sections.item.*.item.id",
      "sections.item.*.item.title",
      "sections.item.*.item.description",
      "sections.item.*.item.image",
      "sections.item.*.item.link",
    ],
  });
  // cache the pages

  return { pages };
}
