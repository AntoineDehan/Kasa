import React from "react";
import { useState } from "react";

import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

import "../../styles/css/slider/style.css";

function Slider({ images }) {
  const [slideNumber, setSlideNumber] = useState(0); //Slide actuelle

  const sliderLeft = () => {
    if (slideNumber === 0) {
      setSlideNumber(images.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  };

  const sliderRight = () => {
    if (slideNumber === images.length - 1) {
      setSlideNumber(0);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="slideshow__img" src={images[slideNumber]} alt="" />

      {images.length > 1 && (
        <>
          <div className="slideshow__arrow">
            <img
              className="gauche"
              src={arrowLeft}
              alt="Flèche de gauche"
              onClick={sliderLeft}
            />
            <img
              className="droite"
              src={arrowRight}
              alt="Flèche de droite"
              onClick={sliderRight}
            />
          </div>
          <p className="slideshow__counter">
            {slideNumber + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Slider;
