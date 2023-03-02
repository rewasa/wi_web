import wi from "~/images/wi.svg";

export const Footer = () => {
  return (
    <div className="container bottom-0 mx-auto">
      <footer className="footer p-10 text-base-content">
        <div>
          <a className="link-hover link pb-6">Immobilien</a>
          <a className="link-hover link">Verkaufen</a>
          <a className="link-hover link">Kaufen</a>
          <a className="link-hover link">Finanzierung</a>
          <a className="link-hover link">Inserieren</a>
        </div>
        <div>
          <a className="link-hover link pb-6">Unternehmen</a>
          <a className="link-hover link">über uns</a>
          <a className="link-hover link">Kontakt</a>
          <a className="link-hover link">Impressum</a>
          <a className="link-hover link">AGB</a>
        </div>
        <div>
          <a className="link-hover link pb-6">Benefits</a>
          <a className="link-hover link">Checklisten</a>
          <a className="link-hover link">Marktwertrechner</a>
        </div>
      </footer>
      <footer className="border-base-grey footer border-t px-10 py-4 text-base-content">
        <div className="grid-flow-col items-center">
          <img
            src={wi}
            alt="Wasescha Immobilien Logo Klein"
            className="h-10 w-10"
          />
          <p>
            <span className="">Wasescha Immobilien AG</span>
            <br />
            <span className="text-sm">
              Churerstrasse 158, 8808 Pfäffikon SZ
            </span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
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
