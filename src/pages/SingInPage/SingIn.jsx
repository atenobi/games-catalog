import React from "react";
import { useState } from "react";

// redux imports
import { useDispatch } from "react-redux";
// actions
import { setUser } from "@/redux/user/userActions";

// child components
import RegisterWith from "@/components/RegisterWith/RegisterWith";
import SwichButtons from "@/components/SwichButtons/SwichButtons";

// js functions
import { checkMailPassword } from "@/services/userSingIn";

// array of users imitation of data base (fetching users)
import { usersArray } from "@/constants/usersArray";

//router
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [insertedMail, setInsertedMail] = useState("");
  const [insertedPass, setInsertedPass] = useState("");

  // from input -> to state
  const inputMailHandler = (e) => setInsertedMail(e.target.value);
  const inputPassHandler = (e) => setInsertedPass(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!checkMailPassword(usersArray, insertedMail, insertedPass).status) {
      navigate("/games-catalog/join");
    } else {
      dispatch(
        setUser({
          name: checkMailPassword(usersArray, insertedMail, insertedPass).name,
          mail: checkMailPassword(usersArray, insertedMail, insertedPass).mail,
          pass: checkMailPassword(usersArray, insertedMail, insertedPass).pass,
        })
      );
      navigate("/games-catalog");
    }
  };

  return (
    <div className="sing-in-container">
      <SwichButtons />
      <form onSubmit={submitHandler} className="sing-in-form">
        <label
          htmlFor="sing-in-sing-mail-input"
          className="sing-in__label-text"
        >
          Email address
        </label>
        <input
          type="mail"
          className="sing-in-input"
          id="sing-in-sing-mail-input"
          onInput={(e) => inputMailHandler(e)}
        />

        <label
          htmlFor="sing-in-sing-pass-input"
          className="sing-in__label-text"
        >
          Password
        </label>
        <input
          type="password"
          className="sing-in-input"
          id="sing-in-sing-pass-input"
          onInput={(e) => inputPassHandler(e)}
        />

        <input
          type="submit"
          className="sing-in__submit-button"
          value="Sing In"
        />

        <RegisterWith titleKeyWord={"Sing in"} />
      </form>
    </div>
  );
};

export default SingIn;
