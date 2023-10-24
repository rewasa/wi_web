import clsx from "clsx";
import { Container } from "~/components/Container/Container";
import { Breadcrumbs } from "~/components/Content/Breadcrumbs";
import wi from "~/images/wi.svg";

export type HeadingProps = {
  isMain?: boolean;
  title: string;
  hasLogo?: boolean;
  className?: string;
  classNames?: string[] | null;
};

export const Heading = (props: HeadingProps) => {
  const defaultClassNames = !props.classNames?.includes("text-")
    ? "text-4xl"
    : "";
  return (
    <>
      <div className={clsx("py-10", props.classNames)}>
        <div className="flex items-center justify-between px-4 xl:pl-36">
          {props?.isMain ? (
            <h1
              className={clsx(
                "font-bold pr-[50px]",
                defaultClassNames,
                props.classNames
              )}
            >
              {props.title}
            </h1>
          ) : (
            <h2
              className={clsx("font-bold", defaultClassNames, props.classNames)}
            >
              {props.title}
            </h2>
          )}
          {props?.hasLogo && (
            <img
              className="float-right w-[40px] md:w-[70px]"
              src={wi}
              alt="wasescha immobilien logo klein"
              loading="lazy"
            />
          )}
        </div>
      </div>
      <Container>{props?.isMain ? <Breadcrumbs /> : null}</Container>
    </>
  );
};
