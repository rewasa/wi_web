import clsx from "clsx";
import { Footer } from "~/components/Footer/Footer";
import { Navbar } from "~/components/Navbar/Navbar";

export const Layout = ({
  children,
  className,
  bgMain,
}: {
  children: React.ReactNode;
  className?: string;
  bgMain?: string;
}) => {
  return (
    <div className={clsx("flex h-full flex-col justify-between", className)}>
      <Navbar />
      <main className={clsx(bgMain)}>{children}</main>
      <Footer />
    </div>
  );
};
