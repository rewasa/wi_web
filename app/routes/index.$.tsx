import { useLocation } from "@remix-run/react";
import clsx from "clsx";
import { Layout } from "~/components/Layout/Layout";
import { useRevalidateOnFocus } from "~/hooks/useRevalidateOnFocus";
import { NotFoundPage } from "~/renderer/404";
import { SectionRenderer } from "~/renderer/Section";

import { usePage } from "~/utils/pageContext";

export default function Page() {
  const location = useLocation();
  const pages = usePage();
  useRevalidateOnFocus({ enabled: true });

  //console.log(JSON.stringify(pages, null, 2));

  const routePage = pages.find(
    (page) =>
      page.status === "published" && page.slug.startsWith(location.pathname)
  );

  if (!routePage) {
    return (
      <Layout>
        <section>
          <NotFoundPage />
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      className={clsx({
        "bg-[#CDBDA6]": routePage.darkMode,
      })}
      bgMain={routePage.darkMode ? "bg-primary" : ""}
    >
      {routePage.sections?.map((section) => (
        <section
          key={section.item.id}
          className={clsx({
            "bg-primary": routePage.darkMode,
            "text-gray-200": routePage.darkMode,
          })}
        >
          <SectionRenderer section={section} />
        </section>
      ))}
    </Layout>
  );
}
