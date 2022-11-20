import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../Assets/Image/logo.png";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center flex-wrap my-2">
        <div className="logo">
          <img height={40} src={logo} />
        </div>

        <div className="auth-btn-container ">
          <button className="mx-1">Sign Up</button>
          <button className="login-button mx-1">Log In</button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;
