import { Breadcrumbs } from "~/components/Content/Breadcrumbs";
import { Footer } from "~/components/Footer/Footer";
import { Navbar } from "~/components/Navbar/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
