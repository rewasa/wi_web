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
import type { Pages } from "~/page.server";
import { loadPages } from "~/page.server";
import { PageContext } from "~/utils/pageContext";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: appStyles },
  ];
};

export async function loader() {
  const { pages } = await loadPages();
  return json(pages);
}

export default function App() {
  const { data: pages } = useLoaderData() as Pages;
  return (
    <html lang="de" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
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
