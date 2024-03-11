import { ActionButton } from "~/components/Button/ActionButton";
import ImageLoader from "~/components/Image/Image";
import { Link } from "@remix-run/react";
import type { Service } from "~/page.server";
import bg from "./images/bg.svg";
import clsx from "clsx";
import { getAssetUrl } from "~/utils/getAssetsUrl";

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
              "py-5 text-center text-4xl font-bold",
              textColor ? `text-[${textColor}]` : "text-white"
            )}
          >
            {title}
          </div>
        ) : null}
        <div className="flex-wrap text-white sm:flex sm:justify-around md:flex lg:flex">
          {services?.length
            ? services.map((service, index) => {
                const linkTo = service.item.link || "";
                const descriptionInHtml =
                  service.item.description?.includes("<");

                return (
                  <div
                    key={service.item.id}
                    className="relative sm:mb-24 xl:w-1/3"
                  >
                    <div
                      className={clsx({
                        "duration-400 delay-10 transition ease-in-out hover:rounded hover:bg-black":
                          !backgroundColor && !backgroundImage?.id && linkTo,
                      })}
                    >
                      <ConditionLinkWrapper link={linkTo}>
                        {service.item?.image ? (
                          <div className="flex justify-center p-8">
                            <ImageLoader
                              assetId={service.item.image}
                              alt={
                                service.item.title ||
                                "Wasescha Immobilien Service"
                              }
                              className={clsx(
                                "mx-auto",
                                {
                                  "sm:h-80 sm:w-80 lg:rounded":
                                    service.item.title ||
                                    service.item.description,
                                },
                                {
                                  "w-full h-full":
                                    !service.item.title &&
                                    !service.item.description,
                                }
                              )}
                            />
                          </div>
                        ) : null}

                        <div
                          className={clsx(
                            "text-center",
                            service.item.title && "lg:my-16 py-4"
                          )}
                        >
                          {service.item.title ? (
                            <h1
                              style={{ color: textColor }}
                              className="pb-4 text-center text-3xl font-bold"
                            >
                              {service.item.title}
                            </h1>
                          ) : null}
                          {descriptionInHtml ? (
                            <div
                              style={{ color: textColor }}
                              className="px-4 text-xl"
                              dangerouslySetInnerHTML={{
                                __html: service.item.description || "",
                              }}
                            ></div>
                          ) : (
                            <p
                              style={{ color: textColor }}
                              className="px-4 text-xl"
                            >
                              {service.item.description}
                            </p>
                          )}
                        </div>
                      </ConditionLinkWrapper>
                      {service.item.detailDescription ? (
                        <div className="flex w-full justify-center">
                          <label
                            htmlFor={`detail-modal${index}`}
                            className="btn"
                          >
                            Mehr erfahren
                          </label>
                          <>
                            {renderModal(
                              service.item.detailDescription,
                              `detail-modal${index}`
                            )}
                          </>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })
            : null}
        </div>

        {text && link ? (
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

function renderModal(content: string, id: string) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box bg-black text-lg xl:w-6/12 max-w-2xl">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="modal-action fixed bottom-2 bg-black">
          <label htmlFor={id} className="btn">
            Schliessen
          </label>
        </div>
      </div>
    </>
  );
}

export function ConditionLinkWrapper({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return link ? <Link to={link}>{children}</Link> : <>{children}</>;
}
