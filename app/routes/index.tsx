import { usePage } from "~/utils/pageContext";
import { SectionRenderer } from "~/renderer/Section";
import { Layout } from "~/components/Layout/Layout";
import type { V2_MetaArgs } from "@remix-run/node";
import type { Page } from "~/page.server";
import { metaData } from "~/utils/metaData";

export const meta = (meta: V2_MetaArgs) => {
  const pageData = (meta.matches[0].data || meta.matches?.[1].data) as {
    data: Page[];
  };
  const homeMeta = pageData.data.find((page) => page.slug === "/home");

  return metaData(homeMeta);
};

export default function Index() {
  const pages = usePage();
  const homePage = pages.find((page) => page.slug === "/home");

  return (
    <Layout>
      {homePage?.sections?.map((section) => (
        <section key={section.item.id}>
          <SectionRenderer section={section} />
        </section>
      ))}
    </Layout>
  );
}
