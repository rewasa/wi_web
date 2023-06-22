import { makeDomainFunction } from "domain-functions";
import { Layout } from "~/components/Layout/Layout";

import { formAction } from "~/form-action.server"; /* path to your custom formAction */
import { json, type DataFunctionArgs } from "@remix-run/server-runtime";
import { ContactFormSchema } from "~/schema/ContactFromSchema";
import { Form } from "~/form";
import { getDirectusClient } from "~/lib/directus";
import { useLoaderData } from "@remix-run/react"

async function findKnownPerson(email: string) {
  const directus = await getDirectusClient();
  const knownPersons = await directus.items("Person").readByQuery({
    filter: {
      email: {
        _eq: email,
      },
    },
  });
  if (!knownPersons.data || knownPersons.data.length === 0) {
    return { id: null };
  }
  return {
    id: knownPersons.data[0].id,
    messages: knownPersons.data[0].messages || ([] as any),
  };
}

export const action = async (args: DataFunctionArgs) => {
  const mutation = makeDomainFunction(ContactFormSchema)(async (values) => {
    const directus = await getDirectusClient();
    const knownPerson = await findKnownPerson(values.email);

    if (knownPerson.id) {
      await directus.items("Person").updateOne(knownPerson.id, {
        ...values,
        messages: [
          {
            sourcePage: values.sourcePage,
            message: values.message,
          },
          ...knownPerson.messages,
        ] as any,
      });
    } else {
      await directus.items("Person").createOne({
        ...values,
        messages: [{ sourcePage: values.sourcePage, message: values.message }] as any,
      });
    }
  });

  return formAction({
    request: args.request,
    schema: ContactFormSchema,
    mutation,
    successPath: "/kontakt-erfolgreich",
  });
};

export async function loader(args: DataFunctionArgs) {
  const params = new URLSearchParams(args.request.url.split("?")[1]);
  const sourcePage = params.get("sourcePage");
  return json({ sourcePage })
}

export default function Kontaktformular() {
  const data = useLoaderData<typeof loader>()

  return (
    <Layout className="bg-[#CDBDA6]">
      <div className="bg-primary pb-20 text-gray-200">
        <div className="container mx-auto py-10 px-4 text-xl md:py-32">
          <h1 className="text-2xl">Schreibe uns eine Nachricht.</h1>
          <p className="py-4">
            Gerne beraten wir Sie persönlich. Füllen Sie einfach das Formular
            aus und wir melden uns bei Ihnen.
          </p>
          <Form schema={ContactFormSchema} className="w-full">
            {({ Field, Errors, Button }) => (
              <>
                <Field name="firstName">
                  {({ Label, SmartInput, Errors }) => (
                    <>
                      <Label className="label">Vorname</Label>
                      <SmartInput
                        type="text"
                        placeholder=""
                        className="input-bordered input-primary input w-full max-w-md text-black"
                      />
                      <Errors className="text-[#ff0000]" />
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
                        className="input-bordered input-primary input w-full max-w-md text-black"
                      />
                      <Errors className="text-[#ff0000]" />
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
                        className="input-bordered input-primary input w-full max-w-md text-black"
                      />
                      <Errors className="text-[#ff0000]" />
                    </>
                  )}
                </Field>
                <Field name="phone">
                  {({ Label, SmartInput, Errors }) => (
                    <>
                      <Label className="label">Telefon</Label>
                      <SmartInput
                        type="phone"
                        placeholder=""
                        className="input-bordered input-primary input w-full max-w-md text-black"
                      />
                      <Errors className="text-[#ff0000]" />
                    </>
                  )}
                </Field>
                {data.sourcePage && (<Field name="sourcePage" value={data.sourcePage}>
                  {({ Label, SmartInput }) => (
                    <>
                      <Label className="label">Wie dürfen wir dich unterstützen?</Label>
                      <SmartInput
                        type="text"
                        placeholder=""
                        className="input-bordered input-primary input w-full max-w-md text-black"
                      />
                    </>
                  )}</Field>)}
                <Field name="message">
                  {({ Label, Multiline, Errors }) => (
                    <>
                      <Label className="label">Nachricht</Label>
                      <Multiline
                        rows={6}
                        className="textarea-bordered textarea-primary w-full max-w-md rounded-md p-2 text-black"
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
