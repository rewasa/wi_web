import { Layout } from "~/components/Layout/Layout";

import { Heading } from "~/components/Heading/Heading";

import inserierung from "~/images/inserierung.png";
import inserierun1 from "~/images/inserierung1.png";
import inserierun2 from "~/images/inserierung2.png";
import inserierun3 from "~/images/inserierung3.png";
import inserierun4 from "~/images/inserierung4.png";
import { ContentFeatureContainer } from "~/components/Content/ContentFeatureContainer";
import { Carousel } from "~/components/Carousel/Carousel";
import { Container } from "~/components/Container/Container";

export default function Inserierung() {
  return (
    <Layout>
      <Heading
        className="mt-20"
        isMain
        title="Spare Zeit und Geld für die Inserierung"
      />
      <ContentFeatureContainer
        contentLeft={false}
        contentList={[
          "Wenn Du den verkauf gerne selber in die hand nehmen möchtest, bieten wir dir an, lediglich das Inserat für dich zu schalten.",
          "Folgende Infos & Dokumente werden dafür benötigt:<br />Fotos<br />Angaben zur Immobilie<br />Grundrissplan",
        ]}
        images={[inserierung]}
        imageClassName="max-w-[300px] md:pl-4"
        bgColor="bg-[#AD9A81]"
        button={{
          text: "Hier geht’s zum Kontakt",
          link: "/kontakt",
        }}
      />
      <div className="-mt-32">
        <Container>
          <Carousel
            imageClassName="max-h-[320px] mx-4"
            images={[inserierun1, inserierun2, inserierun3, inserierun4]}
          />
        </Container>
      </div>
    </Layout>
  );
}
