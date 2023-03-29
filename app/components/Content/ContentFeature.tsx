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
                imageClassName
              )}
            </>
          ) : (
            <>
              {renderImages(
                images,
                contentLeft,
                text,
                rowBreakdown,
                imageClassName
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
  imageClassName?: string
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
                className={clsx(
                  "my-4",
                  `h-[${images.length === 1 ? "555" : "55"}px]`,
                  imageClassName
                )}
              >
                <img
                  src={getAssetUrl(image.directus_files_id)}
                  alt={alt}
                  className="w-full sm:w-1/2 md:w-full"
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
