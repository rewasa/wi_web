import { Link } from "@remix-run/react";
import { ActionButton } from "~/components/Button/ActionButton";
import { Container } from "~/components/Container/Container";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

import iwan from "~/images/iwan-wasescha.svg";
import natalina from "~/images/natalina-schaerer.svg";

export default function UeberUns() {
  return (
    <Layout className="bg-[#CDBDA6]" bgMain="bg-primary">
      <div className="bg-primary pb-20 text-gray-200">
        <Heading isMain title="Wer wir sind?" className="pt-20" />
        <p className="container mx-auto py-10 px-4 text-xl">
          Wir, Iwan Wasescha und Natalina Schärer, sind ein engagiertes Team,
          mit sowohl langjährigem Unternehmer-Hintergrund, als auch
          umfangreicher Führungserfahrung. In Zusammenarbeit mit unseren
          Kooperationspartnern aus den Bereichen Finanzen, Immobilien und Recht
          bieten wir das Know-how, das unsere Kunden für die Umsetzung ihrer
          Ziele benötigen. Sie schildern uns Ihr Anliegen, wir arbeiten mit
          Ihnen auf Augenhöhe. Wir bewerten und finden eine massgeschneiderte
          Lösung für Sie. Kurzfristig, per Verkauf oder Forderungsablösung oder
          langfristig zum Beispiel per Mietkauf. Ganz gleich wie Sie sich
          entscheiden: Sie dürfen sicher sein, dass wir Ihren Auftrag mit jener
          Leidenschaft umsetzen, als ob es unsere eigene Immobilie wäre. Immer
          mit dem Fokus darauf, das Beste für Sie zu erzielen.
        </p>
        <Heading
          title="Unsere Philosophie"
          hasLogo
          className="text-[#AD9B81]"
        />
        <p className="container mx-auto mt-10 px-4 text-xl text-[#AD9B81]">
          Manchmal nimmt das Leben eine andere Kursrichtung als geplant. Ein
          unvorhersehbarer Jobverlust, eine Scheidung, eine schwere Krankheit
          oder auch ein Start in die berufliche Selbständigkeit bringen
          finanzielle Herausforderungen mit sich. Diese können schnell zu einem
          finanziellen Engpass führen. Um Ihre finanziellen Probleme zu lösen,
          denken Sie nun an den ungewollten Notverkauf Ihres Eigentums? Seien
          wir realistisch: Eigentumsverkauf unter Zeitdruck bietet die
          schlechtesten Voraussetzungen, um einen guten Preis zu erzielen. Eine
          Zwangsversteigerung darf nicht die Lösung sein. Wir helfen, indem wir
          die für Sie bestmögliche Lösung finden. Damit Sie in einer solchen
          Situation mit Ihrer Eigentumsfinanzierung nicht einen finanziellen
          Schiffbruch erleiden.
        </p>
        <p className="container mx-auto my-10 px-4 text-xl text-[#AD9B81]">
          Unsere Beratung ist transparent, erfolgt diskret und mit unserem
          grössten Engagement. Wir wägen alle Optionen ab, die Ihnen eine
          finanzielle Entlastung bieten können und entscheiden uns gemeinsam mit
          Ihnen für die passende Lösung. Es ist uns wichtig, dass Sie durch eine
          ungewollte Kursrichtung Ihren Lebenstraum nicht aufgeben müssen.
        </p>
        <Heading title="Unsere Werte" hasLogo />
        <div className="container mx-auto my-10 px-4 text-xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex-cols flex items-start">
              <div>
                <h3 className="pb-4 text-2xl font-bold">Diskretion</h3>
                <p>
                  Höchste Diskretion im Umgang mit unseren Kunden steht für uns
                  im Vordergrund unseres täglichen Handelns.
                </p>
              </div>
            </div>
            <div className="flex-cols flex items-start">
              <div>
                <h3 className="pb-4 text-2xl font-bold">Transparenz</h3>
                <p>
                  Wir kommunizieren transparent und direkt. Wir machen keine
                  Versprechungen, die wir nicht halten können, sondern bewerten
                  die Situation unserer Kunden realistisch und fair.
                </p>
              </div>
            </div>

            <div className="flex-cols flex items-start">
              <div>
                <h3 className="pb-4 text-2xl font-bold">Engagement</h3>
                <p>
                  Mit höchstem Engagement setzen wir uns für unsere Kunden,
                  deren Ziele und Bedürfnisse ein.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex-cols flex items-center">
              <div className="mx-auto py-8">
                <img src={iwan} alt="iwan wasescha" />
              </div>
            </div>
            <div className="flex-cols flex items-center">
              <div>
                <p className="text-center text-4xl text-[#AD9B81]">
                  “Der Mensch steht bei uns IMMER im Vordergrund.”
                </p>
              </div>
            </div>

            <div className="flex-cols flex items-start">
              <div className="mx-auto py-8">
                <img src={natalina} alt="natalina schärer" />
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="my-20 grid place-items-center">
            <Link to="/kontakt">
              <ActionButton className="btn-secondary">
                Hier geht's zum Kontakt
              </ActionButton>
            </Link>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
