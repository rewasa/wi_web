import { Heading } from "~/components/Heading/Heading";
import { Layout } from "~/components/Layout/Layout";

export default function KontaktErfolgreich() {
  return (
    <Layout className="bg-[#CDBDA6]">
      <div className="bg-primary pb-20 text-gray-200">
        <div className="container mx-auto py-32 px-4 text-xl">
          <h1 className="text-2xl">Vielen Dank für Ihre Nachricht!</h1>
          <p className="py-4">
            Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
        </div>
      </div>
    </Layout>
  );
}
