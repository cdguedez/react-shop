import React from "react";
import { Link } from "react-router-dom";
import "@assets/styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Login</h1>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
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
            defaultValue="Log in"
            className="primary-button login-button"
          />
          <Link to={"/forgot-password"}>Forgot my password</Link>
        </form>
        <button className="secondary-button signup-button">
          <Link to={"/register"}>Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
