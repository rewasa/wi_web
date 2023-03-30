import { usePage } from "~/utils/pageContext";
import { SectionRenderer } from "~/renderer/Section";
import { Layout } from "~/components/Layout/Layout";

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
