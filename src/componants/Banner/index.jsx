import React from "react";
import "../../styles/css/banner/style.css";

function Banner({ image, titre }) {
  return (
    <div className="banner">
      <h1>{titre}</h1>
      <div className="banner__overlay"></div>
      <img src={image} alt="" className="banner__img" />
    </div>
  );
}

export default Banner;
