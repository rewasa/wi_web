import { Link } from "@remix-run/react";
import { ActionButton } from "~/components/Button/ActionButton";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

import map from "~/images/map.svg";
import kontakt from "~/images/kontakt.svg";

export default function Kontakt() {
  return (
    <Layout className="bg-[#CDBDA6]">
      <div className="bg-primary pb-20 text-gray-200">
        <Heading
          isMain
          title="Wo und wie erreichst du uns?"
          className="pt-20"
        />
        <div className="container  mx-auto my-10 px-4 text-xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex-cols z-10 flex items-center">
              <div>
                <ActionButton className="btn-secondary mb-8">
                  Kontaktformular ausfüllen
                </ActionButton>

                <img
                  src={map}
                  alt="map from wasescha immobilien"
                  className="z-10"
                />
              </div>
            </div>
            <div className="flex-cols flex items-center">
              <div>
                <div className="text-2xl text-[#AD9B81]">
                  Wasescha Immobilien AG
                  <br /> Churerstrasse 158
                  <br />
                  8808 Pfäffikon SZ
                  <div className="btn-link pt-2 text-[#AD9B81]">
                    <a href="tel:+41448801414">+41 44 880 14 14</a>
                  </div>
                  <div className="btn-link text-[#AD9B81]">
                    <a href="mailto:info@wasescha.immobilien">
                      info@wasescha.immobilien
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-0">
          <img src={kontakt} alt="kontakt" className="mx-auto md:-mt-32" />
        </div>

        {/* <Container>
        <div className="my-20 grid place-items-center">
          <Link to="/kontakt">
            <ActionButton className="btn-secondary">
              Hier geht's zum Kontakt
            </ActionButton>
          </Link>
        </div>
      </Container> */}
      </div>
    </Layout>
  );
}
