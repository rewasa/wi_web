import { redirect } from "@remix-run/server-runtime";

export const loader = () => {
  return redirect("/angebote/finanzierung");
};

export const Angebote = () => {
  return null;
};
