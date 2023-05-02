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
  return (
    <>
      {features?.length ? (
        containerFeatures(features, backgroundColor, text, link)
      ) : (
        <div
          className="flex flex-wrap md:py-10"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="container mx-auto w-full justify-between py-10 md:flex gap-8">
            {contentLeft || (size.width && size.width <= 640) ? (
              <>
                {renderContent(
                  contentList,
                  text,
                  link,
                  contentLeft,
                  rowBreakdown,
                  textColor,
                  questionsAndAnswers
                )}
                {renderImages(
                  images,
                  contentLeft,
                  text,
                  rowBreakdown,
                  imageClassName,
                  imageHeight
                )}
                {renderActionButton("mobile", text, link)}
              </>
            ) : (
              <>
                {renderImages(
                  images,
                  contentLeft,
                  text,
                  rowBreakdown,
                  imageClassName,
                  imageHeight
                )}
                {renderContent(
                  contentList,
                  text,
                  link,
                  contentLeft,
                  rowBreakdown,
                  textColor,
                  questionsAndAnswers
                )}
                {renderActionButton("mobile", text, link)}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

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
    <div
      className={clsx(
        { "lg:w-2/12": rowBreakdown === 2 },
        { "lg:w-4/12": rowBreakdown === 4 },
        { "lg:w-6/12": rowBreakdown === 6 },
        { "lg:w-8/12": rowBreakdown === 8 },
        { "lg:w-10/12": rowBreakdown === 10 },
        "w-full px-4"
      )}
    >
      {content?.map((content, index) => {
        if (content?.text?.includes("<")) {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: content.text }}
              key={index}
              style={{ color: textColor }}
              className="mb-6 text-lg"
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
                  <div
                    tabIndex={0}
                    className="mb-4 text-xl collapse-content opacity-50"
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{
                      __html: questionAndAnswer.answer,
                    }}
                  />
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
    <div
      className={clsx(
        contentLeft ? "lg:pl-28" : "lg:pr-28",
        { "lg:w-2/12": rowBreakdown === 10 },
        { "lg:w-4/12": rowBreakdown === 8 },
        { "lg:w-6/12": rowBreakdown === 6 },
        { "lg:w-8/12": rowBreakdown === 4 },
        { "lg:w-10/12": rowBreakdown === 2 },
        "w-full"
      )}
    >
      {images?.length
        ? images.map((image, index) => {
            return (
              <div
                key={image.directus_files_id}
                className={clsx({ "py-4": images.length > 1 }, imageClassName)}
              >
                {image?.directus_files_id && (
                  <ImageLoader
                    assetId={image.directus_files_id}
                    alt={alt}
                    className={clsx(
                      "h-full w-full object-cover",
                      imageClassName
                    )}
                    style={{ maxHeight: `${imageHeight}px` }}
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
  backgroundColor: string,
  text: string,
  link: string
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
