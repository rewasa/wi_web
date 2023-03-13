import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";
import { Services } from "~/components/Services/Services";

import serviceFinanzierung1 from "~/images/service-finanzierung1.svg";
import serviceFinanzierung2 from "~/images/service-finanzierung2.svg";
import serviceFinanzierung3 from "~/images/service-finanzierung3.svg";
import finanzierungHome from "~/images/finanzierung-home.png";

export default function Finanzierung() {
  return (
    <Layout>
      <Heading
        className="mt-20"
        isMain
        title="Wir Helfen Dir bei der Finanzierung"
      />
      <Services
        services={[
          {
            title: "Projektfinanzierung durch Eigenheim",
            description:
              "Benötigen Sie Geld um Ihr Projekt zu verwirklichen? Egal, was Ihr visionäres Projekt ist – WASESCHA Immobilien AG hat die passende Lösung für Sie: Verkaufen Sie Ihr Wohneigentum für einen vertraglich festgelegte Zeitraum an uns und bleiben Sie als Mieter darin wohnen.",
            image: serviceFinanzierung1,
            link: "/angebote/finanzierung/durch-eigenheim",
          },
          {
            title: "Immobilienrettung",
            description:
              "Befinden Sie sich in einer finanziellen Notlage? Wenn die Zwangsversteigerung droht, scheint ein Notverkauf meist als einziger Ausweg. Doch Immobilien sind mehr als nur Objekte. Sie stehen für Sicherheit, Familie und Erinnerungen. Unsere Kernkompetenz liegt in der Rettung Ihrer Immobilie.",
            image: serviceFinanzierung2,
            link: "/angebote/finanzierung/immobilienrettung",
          },
          {
            title: "Zwangsversteigerung",
            description:
              "Steht Ihre Liegenschaft kurz vor der Zwangsversteigerung? Oder ist Ihre Liegenschaft bereits im Zwangsversteigerungsprozess? Wir bieten Ihnen eine kostenlose Erstberatung an!",
            image: serviceFinanzierung3,
            link: "/angebote/finanzierung/zwangsversteigerung",
          },
        ]}
      />
      <img src={finanzierungHome} className="w-full" alt="Finanzierung Home" />
    </Layout>
  );
}
