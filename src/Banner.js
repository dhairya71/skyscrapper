import React from "react";
import "./Banner.css";

function Banner({ image }) {
  return (
    <div>
      <img className="banner" src={image} />
    </div>
  );
}

export default Banner;
