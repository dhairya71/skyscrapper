import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [view, setView] = useState([]);
  return (
    <div className="header">
      <img
        className="header__img"
        src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
        alt="logo"
      />

      <select className="header__drop" defaultValue={"Default"}>
        <option value="Default">Select Position</option>
        <option value="1">Germany</option>
        <option value="2">Brazil</option>
        <option value="3">USA</option>
        <option value="4">Singapore</option>
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
