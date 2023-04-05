import { Link } from "@remix-run/react";
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
    <div className="lg:flex items-center h-full">
      <div role="contentinfo" className="w-full lg:w-2/3 m-4 md:pl-36 md:mr-20">
        <p
          tabIndex={0}
          className="invisible md:visible text-secondary uppercase text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] md:text-right"
        >
          Wasescha Immobilien
        </p>
        <h1
          tabIndex={0}
          className="text-3xl lg:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] md:text-right"
        >
          {props?.title}
        </h1>
        <div
          tabIndex={0}
          className="text-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] md:text-right md:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text1 as string }}
        ></div>
        <div
          tabIndex={0}
          className="text-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#A28F77] md:text-right md:pl-36"
          dangerouslySetInnerHTML={{ __html: props.text2 as string }}
        ></div>
        <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
          <div className="sm:flex py-2">
            <Link
              to={"/marktwertrechner"}
              className="btn btn-lg btn-secondary md:ml-36"
            >
              Kostenlose Schätzung
            </Link>
          </div>
          <div className="sm:flex py-2">
            <Link to={"/ueber-uns"} className="btn btn-lg btn-link">
              über uns
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full md:pb-10 md:pr-4">
        <img
          tabIndex={0}
          aria-label="people smiling"
          className="mx-auto rounded"
          src={bgImage}
          alt="people smiling"
        />
      </div>
    </div>
  );
};
