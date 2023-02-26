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
      className="bg-black bg-no-repeat bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${bgImage ? bgImage : bg})` }}
    >
      <div className="container mx-auto">
        {serviceTitle ? (
          <div
            className={clsx(
              "text-4xl font-bold text-center py-5 text-white",
              textColor
            )}
          >
            {serviceTitle}
          </div>
        ) : null}
        <div className="lg:flex md:flex sm:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around text-white">
          {services?.length
            ? services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="">
                      <div className="w-full flex justify-center">
                        <div className="p-3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </div>
                      {service.title && service.description ? (
                        <div className="py-4 my-16 text-center">
                          {service.title ? (
                            <h1
                              className={clsx(
                                "font-bold text-3xl text-center pb-4",
                                textColor
                              )}
                            >
                              {service.title}
                            </h1>
                          ) : null}
                          <p
                            className={clsx(
                              "font-catamaran text-xl px-4",
                              textColor
                            )}
                          >
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
          <div className="font-catamaran text-center pt-5">
            <Link to={actionButton?.link}>
              <ActionButton>{actionButton.text}</ActionButton>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
