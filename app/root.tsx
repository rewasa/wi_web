import type { DataFunctionArgs, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import appStyles from "~/styles/app.css";
import { ExternalScripts } from "remix-utils";
import type { FooterLink, Page, Script } from "~/page.server";
import { loadPages } from "~/page.server";
import { PageContext } from "~/utils/pageContext";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: appStyles },
  ];
};

export async function loader(args: DataFunctionArgs) {
  const location = new URL(args.request.url);
  const { pages, settings } = await loadPages();

  const routePage =
    location.pathname !== "/"
      ? pages?.data?.find(
          (page) =>
            page.status === "published" &&
            page.slug?.includes(location.pathname)
        )
      : true;

  return json({ pages, settings }, { status: routePage ? 200 : 404 });
}

export default function App() {
  const loaderData = useLoaderData<typeof loader>();
  const pages = loaderData.pages.data as unknown as Page[];
  const settings = loaderData.settings.data as unknown as {
    scripts: Script[];
    footerLinks: FooterLink[];
  };
  const scripts = settings.scripts;
  const footerLinks = settings.footerLinks;
  // TODO: Add footer links to footer

  return (
    <html lang="de" className="h-full">
      <head>
        <Meta />
        <Links />
        {scripts
          .filter((s) => s.item.variant === "head")
          .map((script) => {
            return (
              <script
                key={script.item.id}
                dangerouslySetInnerHTML={{ __html: script.item.code }}
              />
            );
          })}
      </head>
      <body className="h-full">
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WL8R7VN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {scripts
          .filter((s) => s.item.variant === "body")
          .map((script) => {
            return (
              <script
                key={script.item.id}
                dangerouslySetInnerHTML={{ __html: script.item.code }}
              />
            );
          })}

        <PageContext.Provider value={pages}>
          <Outlet />
        </PageContext.Provider>
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
