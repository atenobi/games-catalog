import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="error-page__text">Page not found</h1>
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
};

export default ErrorPage;
