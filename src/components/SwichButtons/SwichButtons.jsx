import React from "react";
//router
import { useNavigate } from "react-router-dom";

const SwichButtons = () => {
  const navigate = useNavigate();
    return (
        <div>
        <button
          onClick={() => navigate("/games-catalog/sing")}
          className="sing-in-swich-button"
        >
          SING IN
        </button>
        <button
          onClick={() => navigate("/games-catalog/join")}
          className="sing-in-swich-button"
        >
          JOIN US!
        </button>
      </div>
    )
}

export default SwichButtons;