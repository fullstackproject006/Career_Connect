import React, { useState } from "react";
import { useAppNavigation } from "../../helpers/navigationHelper";
import { Button } from "react-bootstrap";
import CommonModal from "../Common/CommonModal";
import Login from "../Login/Login";
import "./Header.css";

export default function Header() {
  const { goLogin, goSignup } = useAppNavigation();
  const [modalstatus, setModalStatus] = useState(false);
  const openLoginModal = () => {
    setModalStatus(true);
  };
  const closeLoginModal = () => {
    setModalStatus(false);
  };
  return (
    <>
     <CommonModal show={modalstatus} handleClose={closeLoginModal}>
        <Login closeLoginModal = {closeLoginModal}/>
      </CommonModal>
    <header className="header">
      <div className="logo">Career connect</div>

      <nav className="nav">
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Services</a>
      </nav>

      <div className="actions">
        <Button className="app-btn ghost" onClick={() => openLoginModal()}>
          Login
        </Button>
        <Button className="app-btn outline" onClick={goSignup}>
          Sign Up
        </Button>
        <Button className="app-btn primary">Post a Job</Button>
      </div>
    </header>
      </>
  );
}
