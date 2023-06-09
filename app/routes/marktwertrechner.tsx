import { useEffect, useState } from "react";
import { Container } from "~/components/Container/Container";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";
import useHedolight from "~/hooks/useHedolight";
import type { Page } from "~/page.server";
import { metaData } from "~/utils/metaData";

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
    title: "Marktwertrechner",
    description: "Marktwertrechner",
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
    if (loaderValue > 300) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loaderValue]);

  return (
    <Layout>
      <Heading isMain title="Marktwertrechner" />
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
