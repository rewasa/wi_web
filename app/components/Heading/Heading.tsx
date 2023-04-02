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
      <div className={clsx("py-10 md:pt-20", props.className)}>
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            {props?.isMain ? (
              <h1
                className={clsx(
                  "text-3xl font-bold lg:text-3xl",
                  props.className
                )}
              >
                {props.title}
              </h1>
            ) : (
              <h2 className={clsx("font-bold lg:text-3xl", props.className)}>
                {props.title}
              </h2>
            )}
            {props?.hasLogo && (
              <img
                className="w-[20px] md:w-[70px]"
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
