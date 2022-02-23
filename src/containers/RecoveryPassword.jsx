import React from "react";
import { Link } from "react-router-dom";
import "@assets/styles/recovery-password.scss";
import Logo from "@assets/logos/logo_yard_sale.svg";
import EmailIcon from "@assets/icons/email.svg";

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={EmailIcon} alt="email" />
        </div>
        <button className="primary-button login-button">
          <Link to={"/login"}>Login</Link>
        </button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="#">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
