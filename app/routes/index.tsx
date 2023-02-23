import { Link } from "@remix-run/react";
import { Hero } from "~/components/Hero/Hero";
import { Layout } from "~/components/Layout/Layout";
import { Services } from "~/components/Services/Services";

import verkaufen from "~/components/Home/images/verkaufen.svg";
import inserieren from "~/components/Home/images/inserieren.svg";
import finanzierung from "~/components/Home/images/finanzierung.svg";

const serviceTitle = "Bei welchem anliegen dürfen wir dich unterstützen?";
const services = [
  {
    title: "Verkaufen",
    description:
      "Befinden Sie sich in einer finanziellen Notlage? Wenn die Zwangsversteigerung droht, scheint ein Notverkauf meist als einziger Ausweg. Doch Immobilien sind mehr als nur Objekte. Sie stehen für Sicherheit, Familie und Erinnerungen. Unsere Kernkompetenz liegt in der Rettung Ihrer Immobilie.",
    image: verkaufen,
  },
  {
    title: "Finanzierung",
    description:
      "Benötigen Sie Geld um Ihr Projekt zu verwirklichen? Egal, was Ihr visionäres Projekt ist – WASESCHA Immobilien AG hat die passende Lösung für Sie: Verkaufen Sie Ihr Wohneigentum für einen vertraglich festgelegte Zeitraum an uns und bleiben Sie als Mieter darin wohnen.",
    image: finanzierung,
  },
  {
    title: "Inserieren",
    description:
      "Steht Ihre Liegenschaft kurz vor der Zwangsversteigerung? Oder ist Ihre Liegenschaft bereits im Zwangsversteigerungsprozess? Wir bieten Ihnen eine kostenlose Erstberatung an!",
    image: inserieren,
  },
];

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Services serviceTitle={serviceTitle} services={services} />
    </Layout>
  );
}
