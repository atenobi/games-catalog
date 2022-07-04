import React from "react";
import { useState } from "react";

// redux imports
import { useDispatch } from "react-redux";
// actions
import { setUser } from "../../../redux/user/userActions";

//router
import { useNavigate } from "react-router-dom";

// child components
import RegisterWith from "../RegisterWith/RegisterWith";

// js functions
import { checkMailPassword } from "../../../services/userSingIn";

// array of users imitation of data base (fetching users)
import { usersArray } from "../../../constants/usersArray";

const SingIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [insertedMail, setInsertedMail] = useState("");
  const [insertedPass, setInsertedPass] = useState("");
  
  // from input -> to state
  const inputMailHandler = (e) => setInsertedMail(e.target.value);
  const inputPassHandler = (e) => setInsertedPass(e.target.value);

  const singInClickHandler = () => {
    if (!(checkMailPassword(usersArray, insertedMail, insertedPass).status)) {
      navigate("/join");
    } else {
      dispatch(
        setUser({
          name: checkMailPassword(usersArray, insertedMail, insertedPass).name,
          mail: checkMailPassword(usersArray, insertedMail, insertedPass).mail,
          pass: checkMailPassword(usersArray, insertedMail, insertedPass).pass,
        })
      );
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
