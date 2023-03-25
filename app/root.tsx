import { json, LinksFunction, MetaFunction } from "@remix-run/node";

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
import { loadPages, Pages } from "~/page.server";
import { PageContext } from "~/utils/pageContext";
import { Layout } from "~/components/Layout/Layout";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: appStyles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "WASESCHA Immobilien AG",
  viewport: "width=device-width,initial-scale=1",
});

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
          <Layout>
            <Outlet />
          </Layout>
        </PageContext.Provider>
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
