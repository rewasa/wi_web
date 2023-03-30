import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ActionButton } from "~/components/Button/ActionButton";
import { getAssetUrl } from "~/utils/getAssetsUrl";

export type ContentFeatureProps = {
  rowBreakdown?: number;
  contentLeft?: boolean;
  contentList: Array<{
    text?: string;
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
};

export const ContentFeature = ({
  rowBreakdown = 6,
  contentLeft = true,
  contentList,
  images,
  imageClassName,
  imageHeight,
  textColor,
  backgroundColor,
  text,
  link,
}: ContentFeatureProps) => {
  return (
    <>
      <div
        className={clsx(
          "py-20",
          `bg-[${
            backgroundColor?.includes("000000")
              ? backgroundColor.replace("000000", "000")
              : backgroundColor
          }]`
        )}
      >
        <div className="container mx-auto w-full items-center justify-between px-4 py-10 md:flex">
          {contentLeft ? (
            <>
              {renderContent(
                contentList,
                text,
                link,
                contentLeft,
                rowBreakdown,
                textColor
              )}
              {renderImages(
                images,
                contentLeft,
                text,
                rowBreakdown,
                imageClassName,
                imageHeight
              )}
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
                textColor
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

function renderContent(
  content: Array<{ text?: string }>,
  text?: string,
  link?: string,
  contentLeft?: boolean,
  rowBreakdown?: number,
  textColor?: string
) {
  return (
    <div
      className={clsx(
        contentLeft ? "" : "xl:pl-28",
        { "md:w-2/12": rowBreakdown === 2 },
        { "md:w-4/12": rowBreakdown === 4 },
        { "md:w-6/12": rowBreakdown === 6 },
        { "md:w-8/12": rowBreakdown === 8 },
        { "md:w-10/12": rowBreakdown === 10 },
        "w-full"
      )}
    >
      {content.map((content, index) => {
        if (content?.text?.includes("<")) {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: content.text }}
              key={index}
              style={{ color: textColor }}
              className="my-4 text-lg"
            />
          );
        }
        return (
          <p key={index} style={{ color: textColor }} className="my-4 text-lg">
            {content.text}
          </p>
        );
      })}
      <div className="my-10">
        {text ? (
          <Link to={link || "#"}>
            <ActionButton>{text}</ActionButton>
          </Link>
        ) : null}
      </div>
    </div>
  );
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
        contentLeft ? "xl:pl-28" : "",
        { "md:w-2/12": rowBreakdown === 10 },
        { "md:w-4/12": rowBreakdown === 8 },
        { "md:w-6/12": rowBreakdown === 6 },
        { "md:w-8/12": rowBreakdown === 4 },
        { "md:w-10/12": rowBreakdown === 2 },
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
                  <img
                    src={getAssetUrl(image.directus_files_id)}
                    alt={alt}
                    className={clsx(
                      "object-cover m-auto w-full",
                      imageClassName,
                      {
                        "md:h-[100px] md:w-auto": imageHeight === "100",
                        "md:h-[150px] md:w-auto": imageHeight === "150",
                        "md:h-[200px] md:w-auto": imageHeight === "200",
                        "md:h-[250px] md:w-auto": imageHeight === "250",
                        "md:h-[300px] md:w-auto": imageHeight === "300",
                        "md:h-[350px] md:w-auto": imageHeight === "350",
                        "md:h-[400px] md:w-auto": imageHeight === "400",
                        "md:h-[450px] md:w-auto": imageHeight === "450",
                        "md:h-[500px] md:w-auto": imageHeight === "500",
                        "md:h-[550px] md:w-auto": imageHeight === "550",
                        "md:h-[600px] md:w-auto": imageHeight === "600",
                      }
                    )}
                  />
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}
