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

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader>
            <img
              className="modal__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1cO4UW_qL7Y9IIRia4sAjSpRiA2ypyBGLQ&usqp=CAU"
              alt="modal image"
            />
            Log In
          </ModalHeader>
          <ModalBody>
            <div className="modal__body">
              <input type="text" placeholder="username" id="user" />
              <br />
              <input type="password" placeholder="password" id="password" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                window.location.reload();
              }}
            >
              Log In
            </Button>
            <Button color="secondary" onClick={toggle}>
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
