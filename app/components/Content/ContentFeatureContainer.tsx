import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ActionButton } from "~/components/Button/ActionButton";

type ContentFeatureContainerProps = {
  rowBreakdown?: {
    content: number; // 1-12
    image: number; // 1-12
  };
  contentLeft?: boolean;
  contentList: string[];
  images: string[];
  imageClassName?: string;
  textColor?: string;
  bgColor?: string;
  button: {
    text: string;
    link: string;
  };
};

export const ContentFeatureContainer = ({
  rowBreakdown = { content: 6, image: 6 },
  contentLeft = true,
  contentList,
  images,
  imageClassName,
  textColor,
  bgColor,
  button,
}: ContentFeatureContainerProps) => {
  return (
    <>
      <div className={clsx("py-20", bgColor)}>
        <div className="container mx-auto w-full items-center justify-between px-4 py-10 md:flex">
          {contentLeft ? (
            <>
              {renderContent(
                contentList,
                button,
                contentLeft,
                rowBreakdown,
                textColor
              )}
              {renderImages(
                images,
                contentLeft,
                button.text,
                rowBreakdown,
                imageClassName
              )}
            </>
          ) : (
            <>
              {renderImages(
                images,
                contentLeft,
                button.text,
                rowBreakdown,
                imageClassName
              )}
              {renderContent(
                contentList,
                button,
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
  content: string[],
  button: { text: string; link: string },
  contentLeft: boolean,
  rowBreakdown: { content: number; image: number },
  textColor?: string
) {
  return (
    <div
      className={clsx(
        contentLeft ? "" : "xl:pl-28",
        mapBreakDownToClass(rowBreakdown.content),
        "w-full",
        textColor
      )}
    >
      {content.map((content, index) => {
        if (content.includes("<")) {
          return (
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              key={index}
              className="my-4 text-lg"
            />
          );
        }
        return (
          <p key={index} className="my-4 text-lg">
            {content}
          </p>
        );
      })}
      <div className="my-10">
        {button.text ? (
          <Link to={button.link}>
            <ActionButton>{button.text}</ActionButton>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function renderImages(
  images: string[],
  contentLeft: boolean,
  alt: string = "Wasescha Immobilien Verkauf",
  rowBreakdown: { content: number; image: number },
  imageClassName?: string
) {
  return (
    <div
      className={clsx(
        contentLeft ? "xl:pl-28" : "",
        mapBreakDownToClass(rowBreakdown.image),
        "w-full"
      )}
    >
      {images?.length
        ? images.map((image, index) => {
            return (
              <div key={index} className={clsx("my-4 w-full", imageClassName)}>
                <img
                  src={image}
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

const mapBreakDownToClass = (breakdownNumber: number) => {
  return `md:w-${breakdownNumber}/12`;
};
