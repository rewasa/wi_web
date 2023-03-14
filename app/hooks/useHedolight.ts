import { useEffect } from "react";

export default function useHedolight() {
  useEffect(() => {
    const script = document.createElement("script");
    const hedolight = `iazi.hedolight('iazihedolightcontainer',
    '0AA0AB33DADB4CCEA69168F70F4916A4880BDA42F61442FB839A0006FD698A15',
    '{ "basePath": "https://app.iazi.ch/mod/hedolight"}')`;

    script.text = hedolight;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
