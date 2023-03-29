import { Link } from "@remix-run/react";
import { ActionButton } from "~/components/Button/ActionButton";
import { getAssetUrl } from "~/utils/getAssetsUrl";

export const NotFoundPage = () => {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Wir haben die Seite nicht gefunden, die Sie gesucht haben.
                </h1>
                <p className="my-2 text-gray-800">
                  Hier finden Sie Informationen zu unseren Dienstleistungen.
                </p>
                <Link to="/">
                  <ActionButton>Auf Startseite gehen</ActionButton>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={getAssetUrl("68ff6801-1c4a-486d-8a20-3ca6ff3961cd")}
                alt="404"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src={getAssetUrl("3f64b3f2-fa5a-479d-8591-f161d5b08a2a")}
            alt="404 page not found"
          />
        </div>
      </div>
    </div>
  );
};
