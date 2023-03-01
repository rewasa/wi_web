import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";
import { FeatureContainer } from "~/components/Content/FeatureContainer";
import { Container } from "~/components/Container/Container";
import { Link } from "@remix-run/react";
import { ActionButton } from "~/components/Button/ActionButton";

export default function Immobilienrettung() {
  return (
    <Layout>
      <Heading className="mt-20" isMain title="Immobilienrettung" />
      <Container>
        <p className="mt-20 text-xl">
          Eine drohende Zwangsversteigerung lässt sich auf verschiedene Wege
          abweisen. Vorhergehende Kreditkündigungen und negative Bonitäten
          limitieren jedoch Ihre Chancen. Aus der Kombination der folgenden vier
          Fachbereiche ermöglichen wir Ihnen die Rettung Ihrer Immobilie.
        </p>
      </Container>
      <FeatureContainer
        backgroundColor="bg-[#968D7E]"
        features={[
          {
            title: "Kreditmanagement",
            description:
              "Die WASESCHA Immobilien AG übernimmt in Ihrem Sinne und Namen die Verhandlungen mit den Gläubigern. Geschickte Verhandlungskompetenz und Erfahrung im Kreditmanagement ermöglichen die Reduktion Ihrer Verbindlichkeiten, egal ob betreibender oder nachrangiger Gläubiger, Bank oder Steueramt.",
          },
          {
            title: "Um-/Anschlussfinanzierung",
            description:
              "In Zusammenarbeit mit verschiedenen Banken, Versicherungen und Pensionskassen können wir Ihre bestehenden Kredite neu strukturieren und so eine Um- bzw. Anschlussfinanzierung entsprechend Ihrer finanziellen Situation realisieren.",
          },
          {
            title: "Immobilienverkauf",
            description:
              "Kann eine Immobilie aufgrund überhöhter Verschuldung nicht gehalten werden, ist ein vorzeitiger Verkauf von Eigentum ausserhalb der Zwangsversteigerung vorteilhafter. Unsere Partner verfügen über langjährige Erfahrung im Maklerbereich und hohes Verhandlungsgeschick. Gemeinsam stellen wir einen profitablen Verkauf Ihrer Immobilie zu marktspezifischen Konditionen sicher.",
          },
          {
            title: "Forderungsablösung  ",
            description:
              "Ist eine Umschuldung nicht möglich, bieten wir mit unserem Modell «Forderungsablösung» eine weitere Alternative zur Rettung Ihrer Immobilie. Dabei übernimmt die WASESCHA Immobilien AG durch einen Rettungskauf die Verbindlichkeit gegenüber Ihrem Gläubiger.  <br /> <span class='btn-link'><a href='/kontakt'>Weitere Informationen zur Forderungsablösung finden Sie hier.</a></span>",
          },
        ]}
      />
      <Container>
        <div className="my-20 grid place-items-center">
          <Link to="/kontakt">
            <ActionButton>Hier geht’s zum Kontakt</ActionButton>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
