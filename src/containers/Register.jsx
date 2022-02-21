/**
 * Class for
 */

import React from "react";
import { Link } from "react-router-dom";
import "./../assets/styles/register.scss";

const Register = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Create Account</h1>
        <form action="/" className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Teff"
            className="input input-name"
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Create"
            className="primary-button login-button"
          />
        </form>
        <button className="secondary-button signup-button">
          <Link to={"/login"}>Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
