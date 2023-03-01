import clsx from "clsx";
import { Container } from "~/components/Container/Container";

type Feature = {
  title: string;
  description: string;
  image: string;
};

type FeatureContainerProps = {
  features: Feature[];
  backgroundColor?: string;
};

export const FeatureContainer = (props: FeatureContainerProps) => {
  return (
    <Container>
      <div
        className={clsx(
          "my-20 grid grid-cols-1 rounded p-10 md:grid-cols-2",
          props.backgroundColor
        )}
      >
        {props.features.map((feature, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex w-full flex-col items-center",
                index < 2 ? "border-b-black md:border-b-2" : "",
                index % 2 === 0 ? "border-r-black md:border-r-2" : ""
              )}
            >
              <div className="flex flex-col p-10 text-center">
                <img
                  className="w-max-[200px] mx-auto"
                  src={feature.image}
                  alt={feature.title}
                />
                <h3 className="pb-2 text-2xl font-bold">{feature.title}</h3>
                <p className="text-xl">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
