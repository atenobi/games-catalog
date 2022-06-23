import React from "react";
import { useState, useEffect } from "react";

//router
import { useNavigate } from "react-router-dom";

// child components
import RegisterWith from "../registerWith/RegisterWith";

// js functions
import { checkMailPassword } from "../../../assets/userSingIn";

// array of users
import { usersArray } from "../../../constants/usersArray";

const SingIn = () => {
  const navigate = useNavigate();
  const [insertedMail, setInsertedMail] = useState("");
  const [insertedPass, setInsertedPass] = useState("");
  // from input -> to state
  const inputMailHandler = (e) => setInsertedMail(e.target.value);
  const inputPassHandler = (e) => setInsertedPass(e.target.value);

  // useEffect(()=> {
  //   checkMailPassword(usersArray, insertedMail, insertedPass)
  // }, [insertedMail, insertedPass]);

  const singInClickHandler = () => {
    if (checkMailPassword(usersArray, insertedMail, insertedPass)) {
      navigate("/");
    }
  };

  return (
    <div className="sing-in-container">
      <div>
        <button
          onClick={() => navigate("/sing")}
          className="sing-in-swich-button"
        >
          SING IN
        </button>
        <button
          onClick={() => navigate("/join")}
          className="sing-in-swich-button"
        >
          JOIN US!
        </button>
      </div>

      <label htmlFor="sing-in-sing-mail-input" className="sing-in__label-text">
        Email address
      </label>
      <input
        type="mail"
        className="sing-in-input"
        id="sing-in-sing-mail-input"
        onInput={(e) => inputMailHandler(e)}
      />

      <label htmlFor="sing-in-sing-pass-input" className="sing-in__label-text">
        Password
      </label>
      <input
        type="password"
        className="sing-in-input"
        id="sing-in-sing-pass-input"
        onInput={(e) => inputPassHandler(e)}
      />

      <button
        onClick={() => singInClickHandler()}
        className="sing-in__submit-button"
      >
        Sing In
      </button>
      <RegisterWith titleKeyWord={"Sing in"} />
    </div>
  );
};

export default SingIn;
