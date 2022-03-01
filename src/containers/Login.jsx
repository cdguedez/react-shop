import React, { useRef } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import "@assets/styles/login.scss";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const dataObj = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(dataObj)
  }
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Login</h1>
        <form className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="username@domain.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log In
          </button>
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
