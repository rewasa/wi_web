import { getAssetUrl } from "~/utils/getAssetsUrl";
import bg from "./images/bg.png";
export type HeroProps = {
  title?: string;
  text1?: string;
  text2?: string;
  backgroundImage?: {
    id: string;
  };
};
export const Hero = (props: HeroProps) => {
  const bgImage = props?.backgroundImage?.id
    ? getAssetUrl(props?.backgroundImage?.id)
    : bg;
  return (
    <>
      <div
        className="h-56 bg-black bg-cover bg-top bg-no-repeat md:h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="invisible md:visible">
          <div className="">
            <h1 className="mb-5 pt-4 text-center text-2xl font-bold md:pt-16 md:text-4xl lg:text-5xl">
              {props?.title}
            </h1>
            <div className="container mx-auto text-xl">
              <div className="chat chat-start pt-6">
                {props.text1 && (
                  <div
                    className="chat-bubble max-w-sm text-base-content"
                    dangerouslySetInnerHTML={{ __html: props.text1 }}
                  ></div>
                )}
              </div>
              <div className="chat chat-end">
                {props.text2 && (
                  <div
                    className="chat-bubble text-base-content"
                    dangerouslySetInnerHTML={{ __html: props.text2 }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-100 md:hidden">
        <div className="container m-2 mx-auto p-2 text-center">
          <h1 className="mb-5 pt-4 text-center text-2xl font-bold">
            {props.title}
          </h1>
          <div className="container mx-auto text-xl">
            <p className="pb-2 text-base-content">{props.text1}</p>

            <p className="pb-2 text-base-content">{props.text2}</p>
          </div>
        </div>
      </div>
    </>
  );
};
