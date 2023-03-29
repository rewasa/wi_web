import { usePage } from "~/utils/pageContext";
import { SectionRenderer } from "~/renderer/Section";

export default function Index() {
  const pages = usePage();
  const homePage = pages.find((page) => page.slug === "/home");

  return homePage?.sections?.map((section) => (
    <section key={section.item.id}>
      <SectionRenderer section={section} />
    </section>
  ));
}
