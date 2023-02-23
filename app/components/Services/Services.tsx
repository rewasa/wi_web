import bg from "./images/bg.svg";

type Service = {
  title: string;
  description: string;
  image: string;
};

type ServicesProps = {
  serviceTitle: string;
  services: Array<Service>;
};

export const Services = ({ serviceTitle, services }: ServicesProps) => {
  return (
    <div
      className="bg-black bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto">
        {serviceTitle ? (
          <div className="text-4xl uppercase font-bold text-center py-5 pt-10 text-white">
            {serviceTitle}
          </div>
        ) : null}
        <div className="lg:flex md:flex sm:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around text-white">
          {services?.length
            ? services.map((service) => {
                return (
                  <div
                    key={service.title}
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md">
                      <div className="w-full flex justify-center">
                        <div className="p-3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="py-4 my-16">
                        <h1 className="uppercase font-bold text-3xl text-center pb-2">
                          {service.title}
                        </h1>
                        <p className="font-catamaran">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
