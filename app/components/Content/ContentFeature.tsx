import { getAssetUrl, getThreeToTwoRatioAssetUrl } from "~/utils/getAssetsUrl";

import { ActionButton } from "~/components/Button/ActionButton";
import { Container } from "~/components/Container/Container";
import ImageLoader from "~/components/Image/Image";
import { Link } from "@remix-run/react";
import type { Size } from "~/hooks/useWindowSize";
import clsx from "clsx";
import { useWindowSize } from "~/hooks/useWindowSize";

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
  classNames: string[] | null;
  imagePercentPosition?: number;
  teaser?: string;
};

type Feature = {
  item: {
    id: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
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
  classNames,
  imagePercentPosition = 0,
  teaser,
}: ContentFeatureProps) => {
  const size: Size = useWindowSize();
  const isTablet = size?.width && size.width < 1280 ? true : false;
  return (
    <>
      {features?.length ? (
        containerFeatures(features, backgroundColor, text, link, teaser)
      ) : (
        <>
          {renderSpacer(backgroundColor)}
          <div
            className="relative"
            style={{ backgroundColor: backgroundColor }}
          >
            {contentLeft || isTablet ? (
              <>
                <div className="px-4 w-full xl:w-3/5 xl:pl-36">
                  {renderContent(
                    contentList,
                    text,
                    link,
                    contentLeft,
                    rowBreakdown,
                    textColor,
                    questionsAndAnswers,
                    classNames,
                    teaser
                  )}
                </div>
                <div className="w-full h-full xl:absolute xl:inset-y-0 xl:right-0 xl:w-2/5 max-w-xl">
                  {renderImages(
                    images,
                    contentLeft,
                    text,
                    rowBreakdown,
                    imageClassName,
                    imageHeight,
                    isTablet,
                    imagePercentPosition
                  )}
                </div>
                {renderActionButton("mobile", text, link, teaser)}
              </>
            ) : (
              <>
                <div className="w-full h-full xl:absolute xl:inset-y-0 xl:left-0 xl:w-2/5 max-w-xl my-auto">
                  {renderImages(
                    images,
                    contentLeft,
                    text,
                    rowBreakdown,
                    imageClassName,
                    imageHeight,
                    isTablet,
                    imagePercentPosition
                  )}
                </div>
                <div className="px-4 xl:pl-20 w-full md:max-w-[48rem] xl:max-w-[56rem] xl:ml-[37%]">
                  {renderContent(
                    contentList,
                    text,
                    link,
                    contentLeft,
                    rowBreakdown,
                    textColor,
                    questionsAndAnswers,
                    classNames
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
  contentList: Array<{ text?: string }>,
  text?: string,
  link?: string,
  contentLeft?: boolean,
  rowBreakdown?: number,
  textColor?: string,
  questionsAndAnswers?: Array<{
    question?: string;
    answer?: string;
  }>,
  classNames?: string[] | null,
  teaser?: string
) {
  return (
    <div>
      {contentList?.map((content, index) => {
        if (content?.text?.includes("<")) {
          const textWithClasses = classNames
            ? content.text.replace(/<p>/g, `<p class="${clsx(classNames)}">`)
            : content.text.replace(/<p>/g, `<p class="pb-4">`);

          return (
            <div
              dangerouslySetInnerHTML={{ __html: textWithClasses }}
              key={index}
              style={{ color: textColor }}
              className={clsx("text-lg max-w-4xl", {
                "opacity-80": textColor?.includes("FFF") && index > 0,
                "pb-4 md:pb-0":
                  !text && !link && contentList.length === index + 1,
                "pb-6": contentList.length !== index + 1,
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
      {renderActionButton("desktop", text, link, teaser)}
    </div>
  );
}

function renderActionButton(
  device: "mobile" | "desktop" | "both",
  text?: string,
  link?: string,
  teaser?: string
) {
  if (text) {
    return (
      <div
        className={clsx(
          "p-4 lg:p-0 lg:py-10 justify-center sm:justify-start",
          { "flex sm:hidden": device === "mobile" },
          { "hidden sm:flex": device === "desktop" }
        )}
      >
        <Link to={link || "#"}>
          <ActionButton teaser={teaser}>{text}</ActionButton>
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
  imageHeight?: string,
  isTablet?: boolean,
  imagePercentPosition?: number
) {
  return (
    <div
      className="relative h-full w-full pt-4 lg:pt-0"
      style={{
        marginTop:
          imagePercentPosition && !isTablet
            ? `${imagePercentPosition}%`
            : undefined,
      }}
    >
      {images?.length
        ? images.slice(0, isTablet ? 1 : images.length).map((image, index) => {
            return (
              <div
                key={image.directus_files_id}
                className={clsx(
                  { "pb-4": images.length > 0 && index + 1 < images.length },
                  imageClassName
                )}
              >
                {image?.directus_files_id && (
                  <img
                    src={getThreeToTwoRatioAssetUrl(image.directus_files_id)}
                    alt={alt}
                    className={clsx(
                      "h-full w-full",
                      {
                        "xl:absolute xl:inset-0 xl:right-0 object-cover":
                          imageHeight === null || imageHeight === "auto",
                      },
                      {
                        "mx-auto my-auto object-contain": imageHeight,
                      }
                    )}
                    style={{
                      maxHeight: `${imageHeight}px`,
                    }}
                    loading="lazy"
                  />
                  // <ImageLoader
                  //   assetId={image.directus_files_id}
                  //   alt={alt}
                  //   className={clsx(
                  //     "h-full w-full",
                  //     {
                  //       "xl:absolute xl:inset-0 object-cover":
                  //         imageHeight === null || imageHeight === "auto",
                  //     },
                  //     {
                  //       "mx-auto my-auto object-contain": imageHeight,
                  //     }
                  //   )}
                  //   style={{
                  //     maxHeight: `${imageHeight}px`,
                  //   }}
                  // />
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
  link?: string,
  teaser?: string
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
          const isPartner = feature.item.link?.startsWith("http");
          return (
            <a
              key={feature.item.id}
              href={feature.item.link}
              target={isPartner ? "_blank" : "_self"}
              className={clsx(
                "flex w-full flex-col items-center",
                index < 2 && !isPartner
                  ? "border-b-[#565555] md:border-b-2"
                  : "",
                index % 2 === 0 && !isPartner
                  ? "border-r-[#565555] md:border-r-2"
                  : ""
              )}
              rel="noreferrer"
            >
              <div className="flex flex-col p-10 text-center">
                {feature.item.image ? (
                  <img
                    className="max-w-[320px] mx-auto"
                    src={getAssetUrl(feature.item.image)}
                    alt={feature.item.title}
                    loading="lazy"
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
            </a>
          );
        })}
      </div>

      {text ? (
        <div className="my-20 grid place-items-center">
          <Link to={link || "#"}>
            <ActionButton teaser={teaser}>{text}</ActionButton>
          </Link>
        </div>
      ) : null}
    </Container>
  );
}
