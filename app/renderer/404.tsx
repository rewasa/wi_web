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
          </div>
        </div>
        <div className="max-w-md">
          <img
            src={getAssetUrl("c667938c-dded-4491-b8d4-78185db04121")}
            alt="404 page not found"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
