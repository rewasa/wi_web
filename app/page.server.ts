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
  ogImage?: {
    id: string;
  };
  sections: Section[];
  darkMode: boolean;
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
  detailDescription?: string;
  image: string;
  link?: string;
}

export interface Settings {
  settings: SettingsClass;
}

export interface SettingsClass {
  data: Data;
}

export interface Data {
  scripts: Script[];
  footerLinks: FooterLink[];
}

export interface Script {
  item: CodeItem;
}

export interface FooterLink {
  name: string;
  link: string;
  icon: CodeItem;
}

export interface CodeItem {
  code: string;
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
      "ogImage.id",
      "darkMode",
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
      "sections.item.questionsAndAnswers.*",
      "sections.item.images.*",
      "sections.item.imageHeight",
      "sections.item.html",
      "sections.item.features.*.features.item.services.item.title",
      "sections.item.features.*.features.item.services.item.description",
      "sections.item.features.*.features.item.services.item.detailDescription",
      "sections.item.features.*.features.item.services.item.image",
      "sections.item.features.*.features.item.services.item.link",
      "sections.item.*.collection",
      "sections.item.*.item.id",
      "sections.item.*.item.title",
      "sections.item.*.item.description",
      "sections.item.*.item.detailDescription",
      "sections.item.*.item.image",
      "sections.item.*.item.link",
    ],
  });

  const settings = await directus.items("Settings").readByQuery({
    fields: ["scripts.item.code", "footerLinks", "*"],
  });

  return { pages, settings };
}
