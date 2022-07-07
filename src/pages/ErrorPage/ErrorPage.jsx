import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page__container">
      <h1 className="error-page__text">Page not found</h1>
      <button className="error-page__button" onClick={() => navigate("/games-catalog")}>Go home</button>
    </div>
  );
};

export default ErrorPage;
