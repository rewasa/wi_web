import { useEffect, useState } from "react";

import { Container } from "~/components/Container/Container";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";
import type { Page } from "~/page.server";
import { metaData } from "~/utils/metaData";
import useHedolight from "~/hooks/useHedolight";

const scripts = () => {
  return [
    {
      src: "https://app.iazi.ch/mod/hedolight/interface.js",
    },
  ];
};

export const handle = { scripts };

export const meta = () => {
  const marktwertrechnerMeta = {
    title:
      "Du möchtest den Marktwert deiner Immobilie kennen? | Marktwertrechner",
    description:
      "Nutze unser Online-Tool und erhalte in wenigen Minuten eine kostenlose und unverbindliche Immobilienbewertung.",
    slug: "/marktwertrechner",
    ogImage: {
      id: "bad74d54-58ee-461c-8768-ad7cfda57bb1", // Hero Image
    },
  } as Page;
  return metaData(marktwertrechnerMeta);
};

export default function Marktwertrechner() {
  const [loaderValue, setLoaderValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaderValue((loaderValue) => loaderValue + 1);
    }, 10);
    if (loaderValue > 100) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loaderValue]);

  return (
    <Layout>
      <Heading title="Du möchtest den Marktwert deiner Immobilie kennen?" />
      <div className="px-4 xl:pl-36 xl:pr-20 text-xl">
        <p className="pb-2">Wir haben die Lösung für dich!</p>
        <p className="pb-2">
          Nutze unser Online-Tool und erhalte in wenigen Minuten eine kostenlose
          und unverbindliche Immobilienbewertung.
        </p>
      </div>

      <Container>
        <div className="flex min-h-[400px] items-center justify-center">
          {loaderValue < 100 ? (
            <div
              className="radial-progress text-secondary"
              style={{ "--value": loaderValue, "--thickness": "5px" } as any}
            >
              {loaderValue}%
            </div>
          ) : (
            <Hedolight />
          )}
        </div>
      </Container>
    </Layout>
  );
}

const Hedolight = () => {
  useHedolight();
  return <div id="iazihedolightcontainer"></div>;
};
