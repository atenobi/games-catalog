import React, { useState } from "react";

// redux imports
import { useDispatch } from "react-redux";

// actions
import { setUser } from "@/redux/user/userActions";

// child components
import RegisterWith from "@/components/RegisterWith/RegisterWith";
import SwichButtons from "@/components/SwichButtons/SwichButtons";

// js functions (services)
import { nameVerify, mailVerify, passVerify } from "@/services/userVerify";

//router
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserMail, setInputUserMail] = useState("");
  const [inputUserPass, setInputUserPass] = useState("");

  // input placeholders
  const [info, setInfo] = useState({ status: false, text: "" });

  // save datas from input
  const inputNameHandler = (e) => setInputUserName(e.target.value);
  const inputMailHandler = (e) => setInputUserMail(e.target.value);
  const inputPassHandler = (e) => setInputUserPass(e.target.value);

  // send datas to redux state
  function submitHandler(e) {
    e.preventDefault();
    if (
      nameVerify(inputUserName) &&
      mailVerify(inputUserMail) &&
      passVerify(inputUserPass)
    ) {
      dispatch(
        setUser({
          name: inputUserName,
          mail: inputUserMail,
          pass: inputUserPass,
        })
      );
      setInfo({ status: true, text: "Everything is fine, the data is saved!" });
      navigate("/games-catalog");
    }

    if (!nameVerify(inputUserName)) {
      setInfo({ status: false, text: "Please, insert you`r name."});
    } else if (!mailVerify(inputUserMail)) {
      setInfo({ status: false, text: "You`r email address is not valid." });
    } else if (!passVerify(inputUserPass)) {
      setInfo({
        status: false,
        text: "The password must contain at least 6 characters, uppercase and lowercase Latin letters and numbers.",
      });
    }
  }

  return (
    <div className="sing-in-container">
      <SwichButtons />
      <form onSubmit={submitHandler} className="sing-in-form">
        <label
          htmlFor="sing-in-join-name-input"
          className="sing-in__label-text"
        >
          Name
        </label>
        <input
          type="text"
          className="sing-in-input"
          id="sing-in-join-name-input"
          onInput={(e) => inputNameHandler(e)}
        />

        <label
          htmlFor="sing-in-join-mail-input"
          className="sing-in__label-text"
        >
          Email address
        </label>
        <input
          type="mail"
          className="sing-in-input"
          id="sing-in-join-mail-input"
          onInput={(e) => inputMailHandler(e)}
        />

        <label
          htmlFor="sing-in-join-pass-input"
          className="sing-in__label-text"
        >
          Password
        </label>
        <input
          type="password"
          className="sing-in-input"
          id="sing-in-join-pass-input"
          onInput={(e) => inputPassHandler(e)}
        />

        <p
          className={
            info.status ? "sing-in__alert-true" : "sing-in__alert-false"
          }
        >
          {info.text}
        </p>

        <input
          type="submit"
          className="sing-in__submit-button"
          value="Join Now"
        />

        <RegisterWith titleKeyWord={"Register"} />
      </form>
    </div>
  );
};

export default JoinUs;
