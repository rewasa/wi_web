import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";
import { FeatureContainer } from "~/components/Content/FeatureContainer";
import { Container } from "~/components/Container/Container";
import { Link } from "@remix-run/react";
import { ActionButton } from "~/components/Button/ActionButton";
import förderablösung from "~/images/foerderabloesung.svg";
import förderablösungHome from "~/images/foerderabloesung-home.svg";
import { ContentFeatureContainer } from "~/components/Content/ContentFeatureContainer";

export default function Förderablösung() {
  return (
    <Layout>
      <Heading className="mt-20" isMain title="Förderablösung" />
      <Container>
        <p className="my-20 text-xl">
          Dieses Modell verspricht eine Abwendung der Zwangsversteigerung. Dabei
          wird die Immobilie zwar verkauft, der bisherige Eigentümer kann sie
          jedoch weiterhin entgeltlich bewohnen und während einer bestimmten
          Frist jederzeit zurückkaufen. Die WASESCHA Immobilien AG erwirbt das
          Objekt vom Eigentümer, der aus dem Verkaufserlös die Forderungen
          gegenüber der Bank oder anderen Gläubigern begleicht. Den
          verbleibenden Restbetrag erhält der bisherige Eigentümer. Das
          Rückkaufsrecht wird notariell beurkundet. Es bestehen zwei Varianten
          der Forderungsablösung.
        </p>
      </Container>
      <ContentFeatureContainer
        rowBreakdown={{ content: 8, image: 4 }}
        contentLeft={false}
        bgColor="bg-[#968D7E]"
        contentList={[
          "<h2 class='text-xl font-bold'>Nutzung & Rückkauf</h2>",
          "Eine schriftliche Vereinbarung gewährt dem bisherigen Eigentümer die entgeltliche Nutzung der Immobilie während einer individuell abgestimmten Optionsfrist.",
          "&#8226; Ihre Immobilie ist weiterhin für Sie nutzbar<br />&#8226; Vertraglich zugesichertes Rückkaufsrecht der Immobilie<br />&#8226; Zeitgewinn zur Klärung des finanziellen Engpasses",
          "<h2 class='text-xl font-bold'>Verkauf mit Mehrerlösbeteiligung</h2>",
          "Eine schriftliche Vereinbarung gewährt dem bisherigen Eigentümer 50% am Mehrerlös aus dem wertmaximierenden Verkauf durch die WASESCHA Immobilien AG.",
          "&#8226; Gilt auch, wenn der Alteigentümer die Rückkaufoption nicht nutzt<br />&#8226; Deutlich mehr Liquidität als bei einer Zwangsversteigerung<br />&#8226; Vermarktung / Verkauf wird von Spezialisten durchgeführt",
          "<h2 class='text-xl font-bold'>Ihre Vorteile:</h2>",
          "&#8226; Abwendung der Zwangsversteigerung<br />&#8226; Bereinigung des Grundbuches (hoch wertsteigernd)<br />&#8226; Zeitgewinn in Hinblick einer Um- oder Anschlussfinanzierung<br />&#8226; Immobilie bleibt weiterhin im Einflussbereich des früheren Eigentümers",
        ]}
        images={[förderablösung]}
        imageClassName="max-w-[350px]"
        button={{ text: "", link: "" }}
      />
      <ContentFeatureContainer
        bgColor="bg-[#968D7E]"
        contentList={[
          "<h2 class='text-xl font-bold'>Nutzung & Rückkauf</h2>",
          "&#8226; Erfahrung Zwangsvollstreckungsrecht<br />&#8226; Erfahrung im Management komplexer Transaktionen<br />&#8226; Effiziente Abwicklung der Finanzierungsprojekte<br />&#8226; Bankenunabhängigkeit (ohne Basel-III-Restriktionen)<br />&#8226; Flexibilität auch bei hohen Finanzierungsvolumina (100’000-2’500’000 CHF)<br />&#8226; Kundenspezifische Lösung auch bei Kleinprojekten<br />&#8226; Transparente Kosten ohne Strukturierungs- bzw. Ratinggebühren",
        ]}
        images={[förderablösungHome]}
        button={{ text: "Hier geht’s zum Kontakt", link: "/kontakt" }}
      />
    </Layout>
  );
}
