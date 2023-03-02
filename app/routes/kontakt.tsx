import { makeDomainFunction } from "domain-functions";
import { ActionButton } from "~/components/Button/ActionButton";
import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

import map from "~/images/map.svg";
import kontakt from "~/images/kontakt.svg";

import { formAction } from "~/form-action.server"; /* path to your custom formAction */
import type { DataFunctionArgs } from "@remix-run/server-runtime";
import { ContactFormSchema } from "~/schema/ContactFromSchema";
import { Form } from "~/form";

const mutation = makeDomainFunction(ContactFormSchema)(
  async (values) =>
    console.log(values) /* or anything else, like saveMyValues(values) */
);

export const action = async (args: DataFunctionArgs) =>
  formAction({
    request: args.request,
    schema: ContactFormSchema,
    mutation,
    successPath: "/kontakt",
  });

export default function Kontakt() {
  return (
    <Layout className="bg-[#CDBDA6]">
      <div className="bg-primary pb-20 text-gray-200">
        <Heading
          isMain
          title="Wo und wie erreichst du uns?"
          className="pt-20"
        />
        <div className="container mx-auto my-10 px-4 text-xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex-cols z-10 flex items-center">
              <div>
                <a href="#hallo" className="btn-secondary btn mb-8">
                  Kontaktformular ausfüllen
                </a>

                <div id="hallo" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box bg-primary">
                    <a
                      href="#abbrechen"
                      className="btn-sm btn-circle btn absolute right-2 top-2"
                    >
                      ✕
                    </a>
                    <h3 className="text-2xl font-bold">
                      Kontaktieren Sie uns.
                    </h3>
                    <p className="py-4">Gerne beraten wir Sie persönlich.</p>

                    <Form schema={ContactFormSchema}>
                      {({ Field, Errors, Button }) => (
                        <>
                          <Field name="firstName">
                            {({ Label, SmartInput, Errors }) => (
                              <>
                                <Label className="label">Vorname</Label>
                                <SmartInput
                                  type="text"
                                  placeholder=""
                                  className="input-bordered input-primary input w-full max-w-xs"
                                />
                                <Errors />
                              </>
                            )}
                          </Field>
                          <Field name="lastName">
                            {({ Label, SmartInput, Errors }) => (
                              <>
                                <Label className="label">Nachname</Label>
                                <SmartInput
                                  type="text"
                                  placeholder=""
                                  className="input-bordered input-primary input w-full max-w-xs"
                                />
                                <Errors />
                              </>
                            )}
                          </Field>
                          <Field name="email">
                            {({ Label, SmartInput, Errors }) => (
                              <>
                                <Label className="label">E-Mail</Label>
                                <SmartInput
                                  type="email"
                                  placeholder=""
                                  className="input-bordered input-primary input w-full max-w-xs"
                                />
                                <Errors />
                              </>
                            )}
                          </Field>
                          <Field name="message">
                            {({ Label, Multiline, Errors }) => (
                              <>
                                <Label className="label">Nachricht</Label>
                                <Multiline
                                  rows={6}
                                  className="textarea-bordered textarea-primary w-full max-w-xs"
                                  placeholder=""
                                />
                                <Errors />
                              </>
                            )}
                          </Field>
                          <Errors />
                          <div className="modal-action">
                            <Button className="btn-secondary btn">
                              Senden
                            </Button>
                          </div>
                        </>
                      )}
                    </Form>
                  </div>
                </div>

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
