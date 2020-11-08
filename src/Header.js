import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./Header.css";

function Header() {
  const [modal, setModal] = useState(false);
  function toggle() {
    setModal(!modal);
  }

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
        <button className="header__button" onClick={toggle}>
          Log in
        </button>

        <Modal isOpen={modal} toggle={toggle} portalClassName={"header__modal"}>
          <ModalHeader>Hello Modal</ModalHeader>
          <ModalBody>This is a modal!!!</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        <button className="header__button">Sign up</button>
        <button className="header__button">About us</button>
        <button className="header__button">Contact us</button>
      </div>
    </div>
  );
}

export default Header;
