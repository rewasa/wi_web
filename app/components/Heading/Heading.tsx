import clsx from "clsx";
import { Container } from "~/components/Container/Container";
import { Breadcrumbs } from "~/components/Content/Breadcrumbs";
import wi from "~/images/wi.svg";

export type HeadingProps = {
  isMain?: boolean;
  title: string;
  hasLogo?: boolean;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <>
      <div className={clsx("py-10", props.className)}>
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            {props?.isMain ? (
              <h1
                className={clsx(
                  "text-5xl font-bold pr-[50px]",
                  props.className
                )}
              >
                {props.title}
              </h1>
            ) : (
              <h2
                className={clsx(
                  "font-bold text-3xl lg:text-4xl pr-[50px]",
                  props.className
                )}
              >
                {props.title}
              </h2>
            )}
            {props?.hasLogo && (
              <img
                className="absolute right-2 lg:relative w-[40px] md:w-[70px]"
                src={wi}
                alt="wasescha immobilien logo klein"
              />
            )}
          </div>
        </Container>
      </div>
      <Container>{props?.isMain ? <Breadcrumbs /> : null}</Container>
    </>
  );
};
