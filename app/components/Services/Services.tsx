import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ActionButton } from "~/components/Button/ActionButton";
import bg from "./images/bg.svg";

type Service = {
  title?: string;
  description?: string;
  image: string;
};

type ServicesProps = {
  serviceTitle?: string;
  services: Array<Service>;
  actionButton?: {
    text: string;
    link: string;
  };
  bgImage?: any;
  textColor?: string;
};

export const Services = ({
  serviceTitle,
  services,
  actionButton,
  bgImage,
  textColor,
}: ServicesProps) => {
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bgImage ? bgImage : bg})` }}
    >
      <div className="container mx-auto">
        {serviceTitle ? (
          <div
            className={clsx(
              "py-5 text-center text-4xl font-bold text-white",
              textColor
            )}
          >
            {serviceTitle}
          </div>
        ) : null}
        <div className="flex-wrap text-white sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between">
          {services?.length
            ? services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                  >
                    <div className="">
                      <div className="flex w-full justify-center">
                        <div className="p-3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      {service.title && service.description ? (
                        <div className="my-16 py-4 text-center">
                          {service.title ? (
                            <h1
                              className={clsx(
                                "pb-4 text-center text-3xl font-bold",
                                textColor
                              )}
                            >
                              {service.title}
                            </h1>
                          ) : null}
                          <p className={clsx("px-4 text-xl", textColor)}>
                            {service.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })
            : null}
        </div>

        {actionButton?.text ? (
          <div className="pt-5 text-center">
            <Link to={actionButton?.link}>
              <ActionButton>{actionButton.text}</ActionButton>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
