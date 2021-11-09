import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ImageGallery = ({ images }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  return (
    <div className="embla bg-gray-100 rounded-lg shadow-lg">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={image.url}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
