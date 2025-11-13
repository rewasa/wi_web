import { Link } from "@remix-run/react";
import wi from "~/images/wi.svg";

export const Footer = () => {
  return (
    <div className="container bottom-0 mx-auto">
      <footer className="footer p-10 text-base-content">
        <div>
          <h3 className="pb-6 font-bold">Angebote</h3>
          <Link
            to="/angebote/weitere-angebote/eigenheim-darlehen/"
            className="link link-hover"
          >
            Eigenheim-Darlehen
          </Link>
          <Link to="/angebote/easy-verkauf/" className="link link-hover">
            EASY-Verkauf
          </Link>
          <Link to="/angebote/expert-verkauf/" className="link link-hover">
            EXPERT-Verkauf
          </Link>
          <Link
            to="/angebote/weitere-angebote/immobilienrettung/"
            className="link link-hover"
          >
            Immobilienrettung
          </Link>
          <Link
            to="/angebote/weitere-angebote/zwangsversteigerung/"
            className="link link-hover"
          >
            Zwangsversteigerung
          </Link>
        </div>
        <div>
          <h3 className="pb-6 font-bold">Unternehmen</h3>
          <Link to="/ueber-uns/" className="link link-hover">
            Über uns
          </Link>
          <Link to="/kontakt-wo-sind-wir/" className="link link-hover">
            Kontakt
          </Link>
          <Link to="/impressum" className="link link-hover">
            Impressum
          </Link>
          <Link to="/agb" className="link link-hover">
            AGBs
          </Link>
          <Link to="/datenschutz" className="link link-hover">
            Datenschutzerklärung
          </Link>
        </div>
        <div>
          <h3 className="pb-6 font-bold">Benefits</h3>
          <Link to="/partner" className="link link-hover">
            Unsere Partner
          </Link>
        </div>
      </footer>
      <footer className="border-base-grey footer border-t px-10 py-4 text-base-content">
        <div className="grid-flow-col items-center">
          <img
            src={wi}
            alt="Wasescha Immobilien Logo Klein"
            className="h-7 w-10"
            loading="lazy"
          />
          <p>
            <span className="">WASESCHA Immobilien AG</span>
            <br />
            <span className="text-sm">
              Churerstrasse 158, 8808 Pfäffikon SZ
            </span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/wasescha.immobilien/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
