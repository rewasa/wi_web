import { json } from "@remix-run/server-runtime";
import { Layout } from "~/components/Layout/Layout";

// export const loader = () => {
//   return null;
// };

export const NotFound = () => {
  return (
    <Layout>
      <div>404</div>
    </Layout>
  );
};
