import type { V2_MetaArgs } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import clsx from "clsx";
import { Layout } from "~/components/Layout/Layout";
import { useRevalidateOnFocus } from "~/hooks/useRevalidateOnFocus";
import { NotFoundPage } from "~/renderer/404";
import { SectionRenderer } from "~/renderer/Section";
import { metaData } from "~/utils/metaData";
import { usePage } from "~/utils/pageContext";
import type { Page } from "~/page.server";

export const meta = (meta: V2_MetaArgs) => {
  const pageData = (meta.matches[0].data || meta.matches?.[1].data) as {
    pages: { data: Page[] };
  };
  const pageMeta = pageData.pages.data?.find((page) =>
    page.slug.startsWith(meta.location.pathname)
  );

  return metaData(pageMeta);
};

export default function Pages() {
  const location = useLocation();
  const pages = usePage();
  useRevalidateOnFocus({ enabled: true });

  //console.log(JSON.stringify(pages, null, 2));

  const routePage = pages.find(
    (page) => page.status === "published" && page.slug === location.pathname
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
