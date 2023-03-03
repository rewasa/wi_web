import { makeDomainFunction } from "domain-functions";
import { Layout } from "~/components/Layout/Layout";

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
    successPath: "/kontakt-erfolgreich",
  });

export default function Kontaktformular() {
  return (
    <Layout className="bg-[#CDBDA6]">
      <div className="bg-primary pb-20 text-gray-200">
        <div className="container mx-auto py-10 px-4 text-xl md:py-32">
          <h1 className="text-2xl">Schreibe uns eine Nachricht.</h1>
          <p className="py-4">
            Gerne beraten wir Sie persönlich. Füllen Sie einfach das Formular
            aus und wir melden uns bei Ihnen.
          </p>
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
                        className="textarea-bordered textarea-primary w-full max-w-xs rounded-md"
                        placeholder=""
                      />
                      <Errors />
                    </>
                  )}
                </Field>
                <Errors />
                <div className="">
                  <Button className="btn-secondary btn">Senden</Button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </Layout>
  );
}
