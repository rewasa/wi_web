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
  bgColor,
  button,
}: ContentFeatureContainerProps) => {
  return (
    <>
      <div className={`${bgColor} py-20`}>
        <div className="md:flex items-center justify-between w-full container mx-auto px-4 py-10">
          {contentLeft ? (
            <>
              {renderContent(contentList, button, contentLeft, rowBreakdown)}
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
              {renderContent(contentList, button, contentLeft, rowBreakdown)}
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
  rowBreakdown: { content: number; image: number }
) {
  return (
    <div
      className={clsx(
        "font-catamaran",
        contentLeft ? "" : "xl:pl-28",
        mapBreakDownToClass(rowBreakdown.content),
        "w-full"
      )}
    >
      {content.map((content, index) => {
        if (content.includes("<")) {
          return (
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              key={index}
              className="text-lg my-4"
            />
          );
        }
        return (
          <p key={index} className="text-lg my-4">
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
  alt: string = "wasescha immobilien verkauf",
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
              <div key={index} className={clsx("w-full my-4", imageClassName)}>
                <img
                  src={image}
                  alt={alt}
                  className="md:w-full sm:w-1/2 w-full"
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
