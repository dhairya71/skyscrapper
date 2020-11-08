import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";

import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

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
        <button className="header__button" onClick={() => setOpen(true)}>
          Log in
        </button>

        <Modal
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          Hello Modal
        </Modal>
        <button className="header__button">Sign up</button>
        <button className="header__button">About us</button>
        <button className="header__button">Contact us</button>
      </div>
    </div>
  );
}

export default Header;
