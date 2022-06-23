import React from "react";
import PropTypes from "prop-types";

const RegisterWith = ({ titleKeyWord }) => {
  return (
    <div className="register-with__container">
      <h1 className="register-with__title">
        {" "}
        ------------- {titleKeyWord} With -------------{" "}
      </h1>
      <div className="register-with__link-container">
        <button className="register-with__link-button facebook-button">
          <a
            href="https://facebook.com"
            className="register-with__link"
            target={"_blank"}
          >
            Facebook
          </a>
        </button>

        <button className="register-with__link-button google-button">
          <a
            href="https://google.com"
            className="register-with__link"
            target={"_blank"}
          >
            Google+
          </a>
        </button>

        <button className="register-with__link-button twitter-button">
          <a
            href="https://twitter.com"
            className="register-with__link"
            target={"_blank"}
          >
            Twitter
          </a>
        </button>
      </div>
    </div>
  );
};

RegisterWith.propTypes = {
  titleKeyWord: PropTypes.string,
};

export default RegisterWith;
