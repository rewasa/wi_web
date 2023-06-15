import { useEffect } from "react";

export default function useHedolight() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://app.iazi.ch/mod/hedolight/interface.js";
    script.async = true;

    script.onload = () => {
      iazi.hedolight(
        "iazihedolightcontainer",
        "0AA0AB33DADB4CCEA69168F70F4916A4880BDA42F61442FB839A0006FD698A15",
        '{ "basePath": "https://app.iazi.ch/mod/hedolight"}'
      );
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
