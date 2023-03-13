import clsx from "clsx";
import { useEffect, useState } from "react";
import { Container } from "~/components/Container/Container";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

export default function Marktwertrechner() {
  const [loaderValue, setLoaderValue] = useState(0);

  useEffect(() => {
    const scriptIazi = document.createElement("script");
    scriptIazi.src = "https://app.iazi.ch/mod/hedolight/interface.js";
    document.body.appendChild(scriptIazi);
    const script = document.createElement("script");
    script.text = `
    setTimeout(function() {
      iazi.hedolight('iazihedolightcontainer',
      '0AA0AB33DADB4CCEA69168F70F4916A4880BDA42F61442FB839A0006FD698A15',
      '{ "basePath": "https://app.iazi.ch/mod/hedolight"}')
    }, 5000);
    `;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      setLoaderValue((loaderValue) => loaderValue + 1);
    }, 50);

    if (loaderValue === 100) {
      clearInterval(interval);
    }

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptIazi);
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <Heading isMain title="Marktwertrechner" />
      <Container>
        <div className="flex min-h-[400px] items-center justify-center">
          <div
            className={clsx("radial-progress text-secondary", {
              invisible: loaderValue > 100,
            })}
            style={{ "--value": loaderValue, "--thickness": "5px" } as any}
          >
            {loaderValue}%
          </div>

          <div className={clsx({ visible: loaderValue >= 100 })}>
            <div id="iazihedolightcontainer"></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
