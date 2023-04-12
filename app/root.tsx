import type {
  LinksFunction,
  MetaFunction,
  V2_MetaFunction,
} from "@remix-run/node";
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
import type { Page, Script, Settings } from "~/page.server";
import { loadPages } from "~/page.server";
import { PageContext } from "~/utils/pageContext";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: appStyles },
  ];
};

export async function loader() {
  const { pages, settings } = await loadPages();
  return json({ pages, settings });
}

export default function App() {
  const loaderData = useLoaderData<typeof loader>();
  const pages = loaderData.pages.data as unknown as Page[];
  const settings = loaderData.settings.data as [{ scripts: Script[] }];
  const scripts = settings?.[0].scripts;

  return (
    <html lang="de" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {scripts.map((script) => (
          <script
            key={script.item.id}
            dangerouslySetInnerHTML={{ __html: script.item.code }}
          />
        ))}

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
