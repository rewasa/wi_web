import bg from "./images/bg.svg";

export const Hero = () => {
  return (
    <div
      className="min-h-screen place-items-start bg-black bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl text-center font-bold pt-8">
            „Ein Haus ist eine Arche, um der Flut zu entrinnen“
          </h1>
          <div className="font-catamaran container mx-auto text-xl">
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
                wir kennen den Wert d einer eigenen vier Wände.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
