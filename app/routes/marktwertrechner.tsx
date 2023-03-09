import { useEffect } from "react";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

export default function Marktwertrechner() {
  useEffect(() => {
    const scriptIazi = document.createElement("script");
    scriptIazi.src = "https://app.iazi.ch/mod/hedolight/interface.js";
    scriptIazi.async = true;
    document.body.appendChild(scriptIazi);
    const script = document.createElement("script");
    script.text = `
    setTimeout(function() {
      iazi.hedolight('iazihedolightcontainer',
      '0AA0AB33DADB4CCEA69168F70F4916A4880BDA42F61442FB839A0006FD698A15',
      '{ "basePath": "https://app.iazi.ch/mod/hedolight"}')
      }, 2000)
    `;
    document.body.appendChild(script);
    script.async = true;

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptIazi);
    };
  }, []);

  return (
    <Layout>
      <Heading isMain title="Marktwertrechner" />
      <div
        id="iazihedolightcontainer"
        on-load-language="de"
        className="h-min-screen w-min-screen"
      ></div>
    </Layout>
  );
}
