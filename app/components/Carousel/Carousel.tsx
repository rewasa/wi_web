import clsx from "clsx";

type CarouselProps = {
  images: string[];
  imageClassName?: string;
};

export const Carousel = (props: CarouselProps) => {
  return (
    <div className="carousel">
      {props.images.map((image, index) => (
        <div className="carousel-item" key={index}>
          <img
            className={clsx(props.imageClassName)}
            src={image}
            alt={"carousel image " + index + 1}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
