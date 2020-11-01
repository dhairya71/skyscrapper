import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
        alt="logo"
      />

      <select className="header__drop" defaultValue={"Default"}>
        <option value="Default">Select Position</option>
        <option value="1">Product Manager</option>
        <option value="2">Software Developer</option>
        <option value="3">Front End Developer</option>
        <option value="4">Back end Developer</option>
      </select>

      <div className="header__buttons">
        <button className="header__button">Log in</button>
        <button className="header__button">Sign up</button>
        <button className="header__button">About us</button>
        <button className="header__button">Contact us</button>
      </div>
    </div>
  );
}

export default Header;
