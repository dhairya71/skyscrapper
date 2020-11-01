import React from "react";
import "./Banner.css";

function Banner({ image, country }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} />
      <h1 className="banner__text">{country}</h1>
    </div>
  );
}

export default Banner;
