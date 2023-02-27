import bg from "./images/bg.svg";

export const Hero = () => {
  return (
    <>
      <div
        className="h-56 bg-black bg-cover bg-top bg-no-repeat md:h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="invisible md:visible">
          <div className="">
            <h1 className="mb-5 pt-4 text-center text-2xl font-bold md:pt-16 md:text-4xl lg:text-5xl">
              „Ein Haus ist eine Arche, um der Flut zu entrinnen“
            </h1>
            <div className="container mx-auto font-catamaran text-xl">
              <div className="chat chat-start pt-6">
                <div className="chat-bubble max-w-sm text-base-content">
                  In jeder Immobilie stecken Geschichten und Emotionen. Von
                  überwältigenden Glücksgefühlen beim Kauf, bis hin zum
                  emotionalen Abschied beim Verkauf.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble text-base-content">
                  Mit diesem Bewusstsein gehen wir <br /> auf deine persönliche
                  Situation ein. <br />
                  Egal ob ein Verkauf oder Kauf bevorsteht, <br />
                  wir kennen den Wert deiner eigenen vier Wände.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-100">
        <div className="container m-2 mx-auto p-2 text-center">
          <h1 className="mb-5 pt-4 text-center text-2xl font-bold md:hidden md:pt-16 md:text-4xl lg:text-5xl">
            „Ein Haus ist eine Arche, um der Flut zu entrinnen“
          </h1>
          <div className="container mx-auto font-catamaran text-xl">
            <p className="pb-2 text-base-content">
              In jeder Immobilie stecken Geschichten und Emotionen. Von
              überwältigenden Glücksgefühlen beim Kauf, bis hin zum emotionalen
              Abschied beim Verkauf.
            </p>

            <p className="pb-2 text-base-content">
              Mit diesem Bewusstsein gehen wir <br /> auf deine persönliche
              Situation ein. <br />
              Egal ob ein Verkauf oder Kauf bevorsteht, <br />
              wir kennen den Wert deiner eigenen vier Wände.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
