import clsx from "clsx";
import { Container } from "~/components/Container/Container";
import { Breadcrumbs } from "~/components/Content/Breadcrumbs";
import wi from "~/images/wi.svg";

type HeadingProps = {
  isMain?: boolean;
  title: string;
  hasLogo?: boolean;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <Container>
      <div
        className={clsx(
          "flex flex-wrap items-center justify-between my-4",
          props.className
        )}
      >
        {props?.isMain ? (
          <h1 className="lg:text-3xl text-3xl font-bold">{props.title}</h1>
        ) : (
          <h2 className="lg:text-3xl font-bold">{props.title}</h2>
        )}
        {props?.hasLogo && (
          <img
            className="w-[20px] md:w-[70px]"
            src={wi}
            alt="wasescha immobilien logo klein"
          />
        )}
      </div>
      <Breadcrumbs />
    </Container>
  );
};
