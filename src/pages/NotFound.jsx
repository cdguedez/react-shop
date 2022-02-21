import React from "react";
import Error404 from "./../assets/logos/error-404.svg";
import "../assets/styles/not-found.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <p className="error-title">Wooops!! 👀 this page not found.</p>
      <img className="error-img" src={Error404} alt="error 404" />
      <div className="error-btn">
        <Link to={"/"}>Back to home</Link>
      </div>
    </section>
  );
};

export default NotFound;
