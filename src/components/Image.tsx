import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
  image: {
    alt: string;
    src: string;
    className?: string
  };
}

const MyImage = ({ image }: IProps) => (
  <LazyLoadImage
    alt={image.alt}
    src={image.src}
    className={image.className}
  />
);

export default MyImage;
