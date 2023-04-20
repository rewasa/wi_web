import { Link } from "@remix-run/react";
import bg from "./images/bg.png";
import ImageLoader from "~/components/Image/Image";
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
        className="w-full lg:w-2/3 m-4 lg:pl-20 lg:mr-20 container mx-auto"
      >
        <p
          tabIndex={0}
          className="invisible lg:visible text-secondary uppercase text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right"
        >
          Wasescha Immobilien
        </p>
        <h1
          tabIndex={0}
          className="text-2xl lg:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right"
        >
          {props?.title}
        </h1>
        <div
          tabIndex={0}
          className="text-md mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right lg:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text1 as string }}
        ></div>
        <div
          tabIndex={0}
          className="text-md mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] lg:text-right lg:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text2 as string }}
        ></div>
        <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
          <div className="sm:flex py-2">
            <Link
              to={"/marktwertrechner"}
              className="btn btn-lg btn-secondary lg:ml-36"
            >
              Kostenlose Schätzung
            </Link>
          </div>
          <div className="invisible xl:visible sm:flex py-2">
            <Link to={"/ueber-uns"} className="btn btn-lg btn-link">
              über uns
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full lg:pb-10">
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
