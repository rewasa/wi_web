import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";

import zwangsversteigerung from "~/images/zwangsversteigerung.svg";

import { Container } from "~/components/Container/Container";
import { ContentFeature } from "~/components/Content/ContentFeature";

export default function Zwangsversteigerung() {
  return (
    <Layout>
      <Heading className="mt-20" isMain title="Zwangsversteigerung" />
      <Container>
        <p className="my-20 text-xl">
          Steht Ihre Liegenschaft kurz vor der Zwangsversteigerung? Oder ist
          Ihre Liegenschaft bereits im Zwangsversteigerungsprozess? Wir bieten
          Ihnen eine kostenlose Erstberatung an!
        </p>
      </Container>
      <ContentFeature
        contentLeft={false}
        contentList={[
          "✓ Ihnen fehlt die Liquidität für ein neues Projekt privat oder beruflich<br />✓ Evtl. haben Sie sogar private Schulden oder offene Forderungen<br />✓ Banken, Investoren und Kreditgesellschaften haben Sie abgelehnt",
          "Steht Ihre Liegenschaft kurz vor der Zwangsversteigerung? Oder ist Ihre Liegenschaft bereits im Zwangsversteigerungsprozess? Und befindet sich Ihre Liegenschaft in der Schweiz? Eine drohende Zwangsversteigerung lässt sich auf verschiedene Wege abweisen. Wir finden für Sie eine auf Ihre persönliche Lebenssituation ausgerichtete, massgeschneiderte Lösung.",
        ]}
        images={[zwangsversteigerung]}
        imageClassName="max-w-[600px]"
        button={{
          text: "Hier geht’s zum Kontakt",
          link: "/kontakt",
        }}
        bgColor="bg-[#AD9A81]"
      />
    </Layout>
  );
}
