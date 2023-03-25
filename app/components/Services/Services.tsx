import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ActionButton } from "~/components/Button/ActionButton";
import type { Service } from "~/page.server";
import { getAssetUrl } from "~/utils/getAssetsUrl";
import bg from "./images/bg.svg";

export type ServicesProps = {
  title?: string;
  services?: Array<Service>;
  text: string;
  link: string;
  backgroundImage?: {
    id: string;
  };
  textColor?: string;
  backgroundColor?: string;
};

export const Services = ({
  title,
  services = [],
  link,
  text,
  backgroundImage,
  textColor,
  backgroundColor,
}: ServicesProps) => {
  const styles = backgroundColor
    ? { backgroundColor: backgroundColor }
    : backgroundImage?.id
    ? { backgroundImage: `url(${getAssetUrl(backgroundImage.id)})` }
    : { backgroundImage: `url(${bg})` };

  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat py-20"
      style={styles}
    >
      <div className="container mx-auto">
        {title ? (
          <div
            className={clsx(
              "py-5 text-center text-4xl font-bold text-white",
              textColor
            )}
          >
            {title}
          </div>
        ) : null}
        <div className="flex-wrap text-white sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between">
          {services?.length
            ? services.map((service, index) => {
                const linkTo = service.item.link || "#";
                const descriptionInHtml =
                  service.item.description?.includes("<");

                return (
                  <Link
                    to={linkTo}
                    key={service.item.id}
                    className="relative  sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                  >
                    <div
                      className={clsx({
                        "duration-400 delay-10 transition ease-in-out hover:rounded hover:bg-black":
                          !backgroundColor && !backgroundImage?.id,
                      })}
                    >
                      {service.item?.image ? (
                        <div className="flex w-full justify-center ">
                          <div className="p-3">
                            <img
                              src={getAssetUrl(service.item.image)}
                              alt={service.item.title}
                              className="aspect-square rounded-full object-cover p-6"
                            />
                          </div>
                        </div>
                      ) : null}

                      <div
                        className={clsx(
                          "text-center",
                          service.item.title && "my-16 py-4"
                        )}
                      >
                        {service.item.title ? (
                          <h1
                            className={clsx(
                              "pb-4 text-center text-3xl font-bold",
                              textColor
                            )}
                          >
                            {service.item.title}
                          </h1>
                        ) : null}
                        {descriptionInHtml ? (
                          <div
                            className={clsx("px-4 text-xl", textColor)}
                            dangerouslySetInnerHTML={{
                              __html: service.item.description || "",
                            }}
                          ></div>
                        ) : (
                          <p className={clsx("px-4 text-xl", textColor)}>
                            {service.item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>

        {text ? (
          <div className="pt-5 text-center">
            <Link to={link}>
              <ActionButton>{text}</ActionButton>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
