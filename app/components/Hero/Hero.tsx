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
    <div className="md:flex items-center h-full">
      <div
        role="contentinfo"
        className="w-full lg:w-2/3 m-4 lg:pl-20 lg:mr-20 container mx-auto px-4"
      >
        <p
          tabIndex={0}
          className="invisible lg:visible text-secondary uppercase text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right"
        >
          Wasescha Immobilien
        </p>
        <h1
          tabIndex={0}
          className="text-3xl lg:text-6xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right"
        >
          {props?.title}
        </h1>
        <p
          tabIndex={0}
          className="text-3xl lg:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right"
        >
          Dein Zuhause, unsere Expertise
        </p>
        <div
          tabIndex={0}
          className="text-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right lg:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text1 as string }}
        ></div>
        <div
          tabIndex={0}
          className="text-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right lg:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text2 as string }}
        ></div>
        <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
          <div className="flex py-2 mx-auto">
            <Link to={"/marktwertrechner"} className="btn btn-lg btn-secondary">
              Kostenlose Schätzung
            </Link>
          </div>
          <div className="invisible xl:visible sm:flex">
            <Link
              to={"/kontakt-wo-sind-wir"}
              className="btn btn-lg btn-outline"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full">
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
