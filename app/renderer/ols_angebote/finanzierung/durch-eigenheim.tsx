import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";

import finanzierungDruchEigenheim from "~/images/finanzierung-eigenheim.svg";
import finanzierungDruchEigenheim1 from "~/images/finanzierung-eigenheim1.svg";
import finanzierungDruchEigenheim2 from "~/images/finanzierung-eigenheim2.svg";
import finanzierungDruchEigenheim3 from "~/images/finanzierung-eigenheim3.svg";

import featureSchaetzung from "~/images/feature-schaetzung.svg";
import featureCheck from "~/images/feature-check.svg";
import featureMoney from "~/images/feature-money.svg";
import featureIdee from "~/images/feature-idee.svg";

import { ContentFeature } from "~/components/Content/ContentFeature";
import { Services } from "~/components/Services/Services";
import { Container } from "~/components/Container/Container";
import { FeatureContainer } from "~/components/Content/FeatureContainer";
import { ActionButton } from "~/components/Button/ActionButton";
import { Link } from "@remix-run/react";

export default function DurchEigenheim() {
  return (
    <Layout>
      <Heading
        className="mt-20"
        isMain
        title="Projektfinanzierung durch Eigenheim"
      />
      <ContentFeature
        contentLeft={false}
        contentList={[
          "<h1 class='text-3xl text-bold pb-6'>Trifft einer oder mehrere Punkte auf Sie zu?<br />Dann sollten wir sprechen!</h1>",
          "✓ Ihnen fehlt die Liquidität für ein neues Projekt privat oder beruflich<br />✓ Evtl. haben Sie sogar private Schulden oder offene Forderungen<br />✓ Banken, Investoren und Kreditgesellschaften haben Sie abgelehnt<br />✓ Sie müssen kurzfristig Kapital beschaffen<br />✓ Durch Corona oder Wirtschaftsschwankungen haben Sie kein Geld mehr, aber Sie sehen Erholung<br />✓ Sie benötigen eine hohe Summe Geld<br />✓ Sie planen einen Firmenkauf, eine Erweiterung oder den Aufbau eines zweiten Standbeins<br />✓ Sie stehen vor einem Richtungswechsel<br />",
        ]}
        images={[finanzierungDruchEigenheim]}
        imageClassName="max-w-[600px]"
        button={{
          text: "",
          link: "",
        }}
        bgColor="bg-[#AD9A81]"
      />
      <Services
        backgroundColor="#968D7E"
        textColor="text-black"
        actionButton={{
          text: "Hier geht's zum Kontakt",
          link: "/kontakt",
        }}
        services={[
          {
            title: "",
            description:
              "Verkaufen Sie Ihre Immobilie mit Rückkaufsrecht und bleiben Sie darin wohnen",
            image: finanzierungDruchEigenheim1,
          },
          {
            title: "",
            description:
              "Finanzieren Sie durch den Deal Ihre Projekte Beruflich oder Privat!",
            image: finanzierungDruchEigenheim2,
          },
          {
            title: "",
            description:
              "Der Rückkauf ist nach Schweizer Recht gesichert - Keine Sorge!",
            image: finanzierungDruchEigenheim3,
          },
        ]}
      />
      <Heading
        title="Benötigen Sie eine Finanzierung um Ihr Projekt zu verwirklichen?"
        className="mt-20"
      />
      <Container>
        <p className="my-5 text-xl">
          Geschäftsbanken und Kreditinstitute sind heute deutlich vorsichtiger
          bei der Vergabe von Krediten an Schweizer KMU und Privatpersonen.
          Benötigen Sie Geld, um beispielsweise mit einer Geschäftsidee zu
          expandieren, um Ihre Firma zu sanieren oder für ein privates Projekt
          und besitzen Sie eine Immobilie?
        </p>

        <p className="my-5 text-xl">
          Egal, was Ihr visionäres Projekt ist – WASESCHA Immobilien AG hat die
          passende Lösung für Sie: Verkaufen Sie Ihr Wohneigentum für einen
          vertraglich festgelegte Zeitraum an uns und bleiben Sie als Mieter
          darin wohnen!
        </p>
      </Container>
      <FeatureContainer
        backgroundColor="bg-[#968D7E]"
        features={[
          {
            title: "Schätzung der Immobilie",
            description:
              "Wir erstellen eine auf Schweizer Standart gute Schätzung für Sie, welche Ihnen den Wert aufzeigt.",
            image: featureSchaetzung,
          },
          {
            title: "Ausarbeitung eines Kaufangebotes",
            description:
              "Sie erhalten durch uns ein für Sie faires Kaufangebot und dürfen dies natürlich auch mit Ihrem Beratern besprechen.",
            image: featureMoney,
          },
          {
            title: "Rückkaufrechtsvertrag",
            description:
              "Gemeinsam erstellen wir einen Vetrag mit gesichertem Rückkauf.",
            image: featureCheck,
          },
          {
            title: "Mietvertrag bis zum Rückkauf",
            description:
              "Während der Vertragslaufzeit leben Sie zur Miete. Danach kaufen Sie Ihre Immobilie zurück",
            image: featureIdee,
          },
        ]}
      />
      <Container>
        <div className="my-20 grid place-items-center">
          <Link to="/kontakt">
            <ActionButton>Hier geht's zum Kontakt</ActionButton>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
