import wi from "~/images/wi.svg";

export const Footer = () => {
  return (
    <div className="container mx-auto bottom-0">
      <footer className="footer p-10 text-base-content">
        <div>
          <a className="link link-hover pb-6">Immobilien</a>
          <a className="link link-hover">Verkaufen</a>
          <a className="link link-hover">Kaufen</a>
          <a className="link link-hover">Finanzierung</a>
          <a className="link link-hover">Inserieren</a>
        </div>
        <div>
          <a className="link link-hover pb-6">Unternehmen</a>
          <a className="link link-hover">über uns</a>
          <a className="link link-hover">Kontakt</a>
          <a className="link link-hover">Impressum</a>
          <a className="link link-hover">AGB</a>
        </div>
        <div>
          <a className="link link-hover pb-6">Benefits</a>
          <a className="link link-hover">Checklisten</a>
          <a className="link link-hover">Marktwertrechner</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t text-base-content border-base-grey">
        <div className="items-center grid-flow-col">
          <img
            src={wi}
            alt="Wasescha Immobilien Logo Klein"
            className="w-10 h-10"
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
