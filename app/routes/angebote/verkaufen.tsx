import { Layout } from "~/components/Layout/Layout";

import { ContentFeatureContainer } from "~/components/Content/ContentFeatureContainer";
import verkauf1 from "~/images/verkauf1.png";
import verkauf2 from "~/images/verkauf2.svg";
import verkauf3 from "~/images/verkauf3.svg";
import verkauf4 from "~/images/verkauf4.png";
import verkauf5 from "~/images/verkauf5.png";
import serviceProvision from "~/images/service-provision.svg";
import serviceEmpathie from "~/images/service-empathie.svg";
import serviceMaxPreis from "~/images/service-max-preis.svg";
import kundenbewertungenBg from "~/images/kundenbewertungen-bg.svg";
import kundenbewertungen1 from "~/images/kundenbewertungen1.svg";
import kundenbewertungen2 from "~/images/kundenbewertungen2.svg";
import kundenbewertungen3 from "~/images/kundenbewertungen3.svg";
import schritt1 from "~/images/schritt1.png";
import schritt2 from "~/images/schritt2.png";
import schritt3 from "~/images/schritt3.png";
import schritt4 from "~/images/schritt4.png";
import schritt5 from "~/images/schritt5.png";
import packet1 from "~/images/packet1.svg";
import packet2 from "~/images/packet2.svg";
import packet3 from "~/images/packet3.svg";
import haus from "~/images/haus.png";
import iwan from "~/images/iwan-wasescha.svg";
import natalina from "~/images/natalina-schaerer.svg";
import iwanundnatalina from "~/images/iwan-und-natalina.svg";

import { Heading } from "~/components/Heading/Heading";
import { Services } from "~/components/Services/Services";

export default function Verkaufen() {
  return (
    <Layout>
      <Heading className="pt-20" isMain title="Verkaufen" />
      <ContentFeatureContainer
        contentList={[
          "<h1 class='text-3xl text-bold pb-6'>So gelingt Dir ein erfolgreicher Verkauf Deiner Immobilie, ohne dass es Dich Zeit & Nerven kostet</h1>",
          "&#8226; Geringer Aufwand für Dich als Eigentümer <br />&#8226; Transparente Preisgestaltung <br />&#8226; Fairer Deal für alle Beteiligten",
          "Weil so ein Hausverkauf mit viel Emotionen, Abklärungen, Terminen verbunden ist - reichen wir Dir die Hand und übernehmen jeglichen Papierkram für Dich.",
          "In aller Ruhe kannst Du dir anschliessend die eingetroffenen Angebote anschauen.",
        ]}
        images={[verkauf1]}
        imageClassName="max-w-[600px]"
        button={{
          text: "Kostenfreie Schätzung deiner Immobilie",
          link: "/kontakt",
        }}
        bgColor="bg-[#AD9A81]"
      />
      <ContentFeatureContainer
        rowBreakdown={{ content: 8, image: 4 }}
        contentList={[
          '<h2 class="text-3xl text-white pb-4">Wir könnten dir jetzt erzählen...</h2>',
          '<span class="text-white">...dass wir deine Immobilie zum maximalen preis verkaufen<br />...keinerlei provision verlangen<br />...deine Immobilie nur bei uns in guten Händen ist</h2>',
          '<span class="text-white">Aber auf diese Standard-Floskeln verzichten wir bewusst. Denn es sind schlichtweg Halbwahrheiten.  Keiner kann dir garantieren, deine Immobilie zum Bestpreis zu verkaufen, dafür müsste sie ja versteigert werden.</span>',
          '<span class="text-white">Wenn dir ein Makler also das Blaue vom Himmel verspricht: Vorsicht! Diese Rechnung geht selten auf.</span>',
        ]}
        images={[verkauf2]}
        imageClassName="w-full md:max-w-[200px] bg-opacity-50"
        button={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        bgColor="bg-[#000]"
      />
      <Heading
        className="py-10"
        hasLogo
        title="„Ein Haus ist weit mehr als ein gegenstand.“"
      />
      <ContentFeatureContainer
        rowBreakdown={{ image: 4, content: 8 }}
        contentLeft={false}
        contentList={[
          "<h2 class='text-3xl pb-4'>Befindest Du Dich gerade in folgender Situation?</h2>",
          `&#8226; Du hast einen lieben Menschen verloren und Immobilien geerbt?<br />
          &#8226; Du hast ein gewisses Alter erreicht und möchtest deshalb verkaufen?<br />
          &#8226; Du möchtest Gewinne realisieren?<br />
          &#8226; Du ziehst aufgrund des neuen Arbeitsplatzes um?<br />
          &#8226; Familiäre und berufliche Umbrüche stehen an...<br />
          &#8226; Du befindest dich in einer wirtschaftliche Zwangslage.?<br />
          &#8226; Es haben sich persönliche Lebensumstände geändert?<br />`,
          "Manchmal hat der Hausverkauf sehr emotionale Gründe. Wir versprechen dir mit unserer Empathie-Fähigkeit ein angenehmer Partner zu sein.",
        ]}
        images={[verkauf3, verkauf4, verkauf5]}
        imageClassName="max-w-[350px]"
        button={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        bgColor="bg-[#AD9A81]"
      />
      <Services
        serviceTitle="Was dich bei einer Zusammenarbeit mit uns erwartet"
        actionButton={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        services={[
          {
            title: "",
            description:
              "Natürlich leben auch wir nicht nur von Luft und Liebe. Es soll für alle Seiten fair sein. ",
            image: serviceProvision,
          },
          {
            title: "",
            description:
              "Unsere Beratung erfolgt mit unserem vollen Engagement. Wir finden für dich eine auf deine persönliche Lebenssituation ausgerichtete, massgeschneiderte Lösung.",
            image: serviceEmpathie,
          },
          {
            title: "",
            description:
              "Egal wie Hoch der Verkaufspreis am Ende ist, bei uns bezahlst du nie mehr.",
            image: serviceMaxPreis,
          },
        ]}
      />
      <Services
        serviceTitle="Das sagen unsere Kunden über uns"
        actionButton={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        bgImage={kundenbewertungenBg}
        textColor="text-black"
        services={[
          {
            image: kundenbewertungen1,
          },
          {
            image: kundenbewertungen2,
          },
          {
            image: kundenbewertungen3,
          },
        ]}
      />
      <Heading
        className="py-10"
        title="Schritt für Schritt zum erfolgreichen Verkauf"
        hasLogo
      />
      <ContentFeatureContainer
        rowBreakdown={{ image: 4, content: 8 }}
        contentList={[
          "<h2 class='text-3xl pb-4'>1. Erstberatung & Marktwertermittlung</h2>",
          `Bei einem ersten Beratungsgespräch besprechen wir deine Wünsche und Ziele. <br /> <br />Mittels Markt- und Konkurrenzanalyse ermitteln wir kostenfrei wieviel deine Immobilie auf dem Markt wert ist und besprechen unsere Ergebnisse.`,
        ]}
        images={[schritt1]}
        button={{
          text: "",
          link: "",
        }}
        textColor="text-white"
        bgColor="bg-black"
      />
      <ContentFeatureContainer
        contentLeft={false}
        rowBreakdown={{ image: 4, content: 8 }}
        contentList={[
          "<h2 class='text-3xl pb-4'> 2. Deine Immobilie wird ins beste Licht gestellt</h2>",
          `Für deine Immobilie erstellen wir hochwertige Verkaufsunterlagen mit ansprechenden Fotos und entwickeln eine individuelle Marketingstrategie.<br /> <br />Damit deine Immobilie auf passende Käufer trifft, wird sie auf sämtlichen Immobilienportalen veröffentlicht.`,
        ]}
        images={[schritt2]}
        button={{
          text: "",
          link: "",
        }}
        textColor="text-white"
        bgColor="bg-black"
      />
      <ContentFeatureContainer
        rowBreakdown={{ image: 4, content: 8 }}
        contentList={[
          "<h2 class='text-3xl pb-4'>3. Besichtigungen vor Ort</h2>",
          `Sobald erste Anfragen eintreffen, ermitteln wir gekonnt, wer wirkliches Kaufinteresse hat. Danach koordinieren wir Besichtigungen vor Ort und führen diese professionell durch. <br /> <br />Natürlich kannst du die Besichtigungen auch selber durchführen.`,
        ]}
        images={[schritt3]}
        button={{
          text: "",
          link: "",
        }}
        textColor="text-white"
        bgColor="bg-black"
      />
      <ContentFeatureContainer
        contentLeft={false}
        rowBreakdown={{ image: 4, content: 8 }}
        contentList={[
          "<h2 class='text-3xl pb-4'>4. Betreuung und Austausch</h2>",
          `FEs ist uns ein grosses Anliegen, dass du stets über den aktuellen Stand informiert bist. 
          <br /> <br />
          Deshalb sprechen wir uns regelmässig ab und tauschen den Informationsstand aus. 
          <br /> <br />
          Sobald ein passender Käufer gefunden wird, stellen wir ihn dir anhand Dokumentation vor. 
          `,
        ]}
        images={[schritt4]}
        button={{
          text: "",
          link: "",
        }}
        textColor="text-white"
        bgColor="bg-black"
      />
      <ContentFeatureContainer
        rowBreakdown={{ image: 4, content: 8 }}
        contentList={[
          "<h2 class='text-3xl pb-4'>5. Vertragsabschluss</h2>",
          `Sobald Du dich für einen passenden Käufer entscheidest, bereiten wir alle nötigen Unterlagen vor und überprüfen für dich den Kaufvertragsentwurf. 
          <br /> <br />
          Auch beim letzten entscheidenden Schritt – dem Notartermin – stehen wir dir zur Seite. Gemeinsam bis zum Schluss!`,
        ]}
        images={[schritt5]}
        button={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        textColor="text-white"
        bgColor="bg-black"
      />
      <Services
        serviceTitle="Für jeden Bedarf das passende Paket"
        actionButton={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        services={[
          {
            title: "",
            description: `Du hast keine Zeit und keine Lust, dich um den Verkauf zu kümmern?
            <br /> <br />
             Wir übernehmen alles. 
             Von der Inserierung bis zur Schlüsselübergabe`,
            image: packet1,
          },
          {
            title: "",
            description: `Natürlich kannst du die Besichtigungen vor Ort auch selber übernehmen. 
            <br /> <br />
            Dieser Aufwand wird in der Abrechnung natürlich gutgeschrieben.`,
            image: packet2,
          },
          {
            title: "",
            description: `Du kümmerst dich gerne selber um den Verkauf, hast aber bemerkt, dass ein Inserat sehr teuer und aufwändig ist? 
            <br /> <br />
            Gerne schalten wir das Inserat für dich auf allen Plattformen schweizweit. 
            <br /> <br />
            Entweder du stellst uns dafür die notwenigen Fotos... oder wir...`,
            image: packet3,
          },
        ]}
      />
      <Heading
        title="“Es ist schon verrückt, wie unbedacht die meisten Eigentümer ein solch wichtiges Mandat vergeben.”"
        className="py-10"
      />
      <ContentFeatureContainer
        contentList={[
          `Oder würdest du dein Mandat bei einem wichtigen Gerichtsfall pauschal dem günstigsten Anwalt in die Hände geben? 
        <br /> <br />
        Wohl kaum. Vertrauen und Sicherheit führen dich zum Ziel. Und deshalb gilt auch beim Verkauf deiner Immobilie:
        <br /> <br />
        Lasse dich beraten, bevor du deine bewusste Entscheidung triffst. `,
        ]}
        images={[haus]}
        button={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        bgColor="bg-[#AD9A81]"
      />
      <Heading
        title="“Zusammen schafft man alles”"
        hasLogo
        className="-mb-20 bg-black text-white md:-mb-32"
      />
      <ContentFeatureContainer
        contentList={[
          `<h3 class="font-bold md:text-2xl">Lerne uns unverbindlich kennen, bevor Du uns vertraust</h3>`,
          `Wir sind.....<br />
          TEXT TEXT TEXT<br />
          TEXT TEXT TEXT<br />
          TEXT TEXT TEXT<br />
          TEXT TEXT TEXT<br />
          TEXT TEXT TEXT
          `,
        ]}
        images={[iwanundnatalina]}
        button={{
          text: "Ja, ich will eine kompetente Beratung",
          link: "/kontakt",
        }}
        bgColor="bg-black"
        textColor="text-white"
      />
    </Layout>
  );
}
