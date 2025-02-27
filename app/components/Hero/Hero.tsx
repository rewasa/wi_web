import ImageLoader from "~/components/Image/Image";
import { Link } from "@remix-run/react";
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
  return (
    <div className="h-full items-center md:flex">
      <div
        role="contentinfo"
        className="container m-4 mx-auto w-full px-4 lg:mr-20 lg:w-2/3 lg:pl-20"
      >
        <p
          tabIndex={0}
          className="invisible mb-4 bg-gradient-to-r from-primary to-[#A28F77] bg-clip-text text-xl uppercase text-secondary text-transparent lg:visible lg:text-right"
        >
          Wasescha Immobilien
        </p>
        <h1
          tabIndex={0}
          className="mb-2 bg-gradient-to-r from-primary to-[#A28F77] bg-clip-text text-3xl font-black text-transparent lg:text-right lg:text-6xl"
        >
          {props?.title}
        </h1>
        <p
          tabIndex={0}
          className="mb-8 bg-gradient-to-r from-primary to-[#A28F77] bg-clip-text text-3xl text-transparent lg:text-right lg:text-5xl"
        >
          Dein Zuhause, unsere Expertise
        </p>
        <div
          tabIndex={0}
          className="mb-8 bg-gradient-to-r from-primary to-[#A28F77] bg-clip-text text-xl text-transparent lg:pl-36 lg:text-right"
          dangerouslySetInnerHTML={{ __html: props.text1 as string }}
        ></div>
        <div
          tabIndex={0}
          className="mb-8 bg-gradient-to-r from-primary to-[#A28F77] bg-clip-text text-xl text-transparent lg:pl-36 lg:text-right"
          dangerouslySetInnerHTML={{ __html: props.text2 as string }}
        ></div>
        <div className="flex flex-col items-start justify-start bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <div className="mx-auto flex py-2">
            <Link
              to={"/angebote/easy-verkauf/"}
              className="btn btn-secondary btn-lg"
            >
              Easy-Verkauf
            </Link>
          </div>
          <div className="invisible sm:flex xl:visible">
            <Link
              to={"/kontakt-wo-sind-wir"}
              className="btn btn-outline btn-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full lg:w-2/3">
        {props?.backgroundImage?.id && (
          <ImageLoader
            assetId={props.backgroundImage.id}
            alt="Haus mit pool"
            className="mx-auto lg:rounded"
          />
        )}
      </div>
    </div>
  );
};
