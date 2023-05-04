import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ActionButton } from "~/components/Button/ActionButton";
import { Container } from "~/components/Container/Container";
import ImageLoader from "~/components/Image/Image";
import type { Size } from "~/hooks/useWindowSize";
import { useWindowSize } from "~/hooks/useWindowSize";
import { getAssetUrl } from "~/utils/getAssetsUrl";

export type ContentFeatureProps = {
  rowBreakdown?: number;
  contentLeft?: boolean;
  contentList: Array<{
    text?: string;
  }>;
  questionsAndAnswers?: Array<{
    question?: string;
    answer?: string;
  }>;
  images: Array<{
    directus_files_id: string;
  }>;
  imageHeight?: string;
  imageClassName?: string;
  textColor?: string;
  backgroundColor?: string;
  text: string;
  link: string;
  features?: Feature[];
};

type Feature = {
  item: {
    id: string;
    title: string;
    description: string;
    image?: string;
  };
};

export const ContentFeature = ({
  rowBreakdown = 6,
  contentLeft = true,
  contentList = [],
  questionsAndAnswers = [],
  images,
  imageClassName,
  imageHeight,
  textColor,
  backgroundColor,
  text,
  link,
  features = [],
}: ContentFeatureProps) => {
  const size: Size = useWindowSize();
  const isTablet = size?.width && size.width < 1280;
  return (
    <>
      {features?.length ? (
        containerFeatures(features, backgroundColor, text, link)
      ) : (
        <>
          {renderSpacer(backgroundColor)}
          <div
            className="relative"
            style={{ backgroundColor: backgroundColor }}
          >
            {contentLeft || isTablet ? (
              <>
                <div className="pb-10 w-full xl:w-2/3 xl:px-20 xl:pl-52 px-4">
                  {renderContent(
                    contentList,
                    text,
                    link,
                    contentLeft,
                    rowBreakdown,
                    textColor,
                    questionsAndAnswers
                  )}
                </div>
                <div className="w-full h-full xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/3 xl:h-full">
                  {renderImages(
                    images,
                    contentLeft,
                    text,
                    rowBreakdown,
                    imageClassName,
                    imageHeight
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-full xl:absolute xl:inset-y-0 xl:left-0 xl:w-1/3 xl:h-full">
                  {renderImages(
                    images,
                    contentLeft,
                    text,
                    rowBreakdown,
                    imageClassName,
                    imageHeight
                  )}
                </div>
                <div className="pb-10 xl:pl-20 w-full xl:max-w-[64rem] xl:ml-[33.333%]">
                  {renderContent(
                    contentList,
                    text,
                    link,
                    contentLeft,
                    rowBreakdown,
                    textColor,
                    questionsAndAnswers
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

function renderSpacer(backgroundColor?: string) {
  return (
    <div
      className="w-full h-10 md:h-20"
      style={{ backgroundColor: backgroundColor }}
    />
  );
}

function renderContent(
  content: Array<{ text?: string }>,
  text?: string,
  link?: string,
  contentLeft?: boolean,
  rowBreakdown?: number,
  textColor?: string,
  questionsAndAnswers?: Array<{
    question?: string;
    answer?: string;
  }>
) {
  return (
    <div>
      {content?.map((content, index) => {
        if (content?.text?.includes("<")) {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: content.text }}
              key={index}
              style={{ color: textColor }}
              className={clsx("mb-6 text-lg", {
                "opacity-80": textColor?.includes("FFF") && index > 0,
              })}
            />
          );
        }
        return (
          <p key={index} style={{ color: textColor }} className="my-4 text-lg">
            {content.text}
          </p>
        );
      })}
      {questionsAndAnswers?.length ? (
        <div>
          {questionsAndAnswers.map((questionAndAnswer, index) => {
            return (
              <div key={index} tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                {questionAndAnswer?.question && (
                  <div
                    className="text-xl font-bold my-4 collapse-title"
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{
                      __html: questionAndAnswer.question,
                    }}
                  />
                )}
                {questionAndAnswer?.answer && (
                  <div className="mb-4 text-xl collapse-content opacity-80">
                    <div
                      tabIndex={0}
                      className="text-lg"
                      style={{ color: textColor }}
                      dangerouslySetInnerHTML={{
                        __html: questionAndAnswer.answer,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : null}
      {renderActionButton("desktop", text, link)}
    </div>
  );
}

function renderActionButton(
  device: "mobile" | "desktop" | "both",
  text?: string,
  link?: string
) {
  if (text) {
    return (
      <div
        className={clsx(
          "mt-10 lg:mt-20 justify-center sm:justify-start",
          { "flex sm:hidden": device === "mobile" },
          { "hidden sm:flex": device === "desktop" }
        )}
      >
        <Link to={link || "#"}>
          <ActionButton>{text}</ActionButton>
        </Link>
      </div>
    );
  }
  return null;
}

function renderImages(
  images: Array<{
    directus_files_id: string;
  }>,
  contentLeft: boolean,
  alt: string = "Wasescha Immobilien Verkauf",
  rowBreakdown?: number,
  imageClassName?: string,
  imageHeight?: string
) {
  return (
    <div>
      {images?.length
        ? images.map((image, index) => {
            return (
              <div
                key={image.directus_files_id}
                className={clsx(
                  { "pb-4": images.length > 0 && index + 1 < images.length },
                  imageClassName
                )}
              >
                {image?.directus_files_id && (
                  <ImageLoader
                    assetId={image.directus_files_id}
                    alt={alt}
                    className={clsx(
                      "h-full w-full",
                      {
                        "xl:absolute xl:inset-0 object-cover":
                          imageHeight === null || imageHeight === "auto",
                      },
                      {
                        "mx-auto my-auto object-contain": imageHeight,
                      }
                    )}
                    style={{
                      maxHeight: `${imageHeight}px`,
                    }}
                  />
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}

function containerFeatures(
  features: Feature[],
  backgroundColor?: string,
  text?: string,
  link?: string
) {
  const featuresServices = features?.[0]?.ContentFeature_id?.features?.[0]?.item
    ?.services as Feature[];
  return (
    <Container>
      <div
        className="my-20 grid grid-cols-1 rounded p-4 md:grid-cols-2 md:p-10 bg-[#968D7E]"
        style={{ backgroundColor }}
      >
        {featuresServices?.map((feature: Feature, index) => {
          return (
            <div
              key={feature.item.id}
              className={clsx(
                "flex w-full flex-col items-center",
                index < 2 ? "border-b-[#565555] md:border-b-2" : "",
                index % 2 === 0 ? "border-r-[#565555] md:border-r-2" : ""
              )}
            >
              <div className="flex flex-col p-10 text-center">
                {feature.item.image ? (
                  <img
                    className="w-max-[200px] mx-auto"
                    src={getAssetUrl(feature.item.image)}
                    alt={feature.item.title}
                  />
                ) : null}
                <h3 className="pb-2 text-2xl font-bold">
                  {feature.item.title}
                </h3>

                <div
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: feature.item.description }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {text ? (
        <div className="my-20 grid place-items-center">
          <Link to={link || "#"}>
            <ActionButton>{text}</ActionButton>
          </Link>
        </div>
      ) : null}
    </Container>
  );
}
