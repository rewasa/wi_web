import { Link } from "@remix-run/react";
import { Layout } from "~/components/Layout/Layout";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Layout>
      <div>test2</div>
    </Layout>
  );
}
