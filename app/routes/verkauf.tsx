import { Layout } from "~/components/Layout/Layout";

import { ContentFeatureContainer } from "~/components/Content/ContentFeatureContainer";
import verkauf1 from "~/images/verkauf1.svg";
import verkauf2 from "~/images/verkauf2.svg";
import verkauf3 from "~/images/verkauf3.svg";
import verkauf4 from "~/images/verkauf4.svg";
import verkauf5 from "~/images/verkauf5.svg";
import serviceProvision from "~/images/service-provision.svg";
import serviceEmpathie from "~/images/service-empathie.svg";
import serviceMaxPreis from "~/images/service-max-preis.svg";
import kundenbewertungenBg from "~/images/kundenbewertungen-bg.svg";
import kundenbewertungen1 from "~/images/kundenbewertungen1.svg";
import kundenbewertungen2 from "~/images/kundenbewertungen2.svg";
import kundenbewertungen3 from "~/images/kundenbewertungen3.svg";

import { Heading } from "~/components/Heading/Heading";
import { Services } from "~/components/Services/Services";

export default function Verkauf() {
  return (
    <Layout>
      <ContentFeatureContainer
        contentList={[
          "<h1 class='font-sans text-3xl text-bold pb-6'>So gelingt Dir ein erfolgreicher Verkauf Deiner Immobilie, ohne dass es Dich Zeit & Nerven kostet</h1>",
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
          '<h2 class="font-sans text-3xl text-white pb-4">Wir könnten dir jetzt erzählen...</h2>',
          '<span class="font-sans text-white">...dass wir deine Immobilie zum maximalen preis verkaufen<br />...keinerlei provision verlangen<br />...deine Immobilie nur bei uns in guten Händen ist</h2>',
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
      <Heading hasLogo title="„Ein Haus ist weit mehr als ein gegenstand.“" />
      <ContentFeatureContainer
        rowBreakdown={{ image: 4, content: 8 }}
        contentLeft={false}
        contentList={[
          "<h2 class='font-sans text-3xl pb-4'>Befindest Du Dich gerade in folgender Situation?</h2>",
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
    </Layout>
  );
}
