import clsx from "clsx";
import { Container } from "~/components/Container/Container";

type Feature = {
  title: string;
  description: string;
  image?: string;
};

type FeatureContainerProps = {
  features: Feature[];
  backgroundColor?: string;
};

export const FeatureContainer = (props: FeatureContainerProps) => {
  console.log("fjdlfjkd", props.features);
  return (
    <Container>
      <div
        className={clsx(
          "my-20 grid grid-cols-1 rounded p-4 md:grid-cols-2 md:p-10",
          props.backgroundColor
        )}
      >
        {props.features.map((feature, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex w-full flex-col items-center",
                index < 2 ? "border-b-[#565555] md:border-b-2" : "",
                index % 2 === 0 ? "border-r-[#565555] md:border-r-2" : ""
              )}
            >
              <div className="flex flex-col p-10 text-center">
                {feature.image ? (
                  <img
                    className="w-max-[200px] mx-auto"
                    src={feature.image}
                    alt={feature.title}
                  />
                ) : null}
                <h3 className="pb-2 text-2xl font-bold">{feature.title}</h3>
                {feature.description.includes("<") ? (
                  <p
                    className="text-xl"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                ) : (
                  <p className="text-xl">{feature.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
