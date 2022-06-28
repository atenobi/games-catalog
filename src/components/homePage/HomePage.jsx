import React from "react";

// router
import { useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux/es/exports";
import { selectUsers } from "../../redux/selectors";

// components
import GamesCatalog from "../gamesCatalog/GamesCatalog";
import SearchingFilter from "../searchingFilter/SearchingFilter";

const HomePage = () => {
  const user = useSelector(selectUsers);
  const navigate = useNavigate();
  console.log(user[1]);

  if (!user[1]) {
    navigate("/sing");
  }

  return (
    <>
      {user[1] && (
        <div className="home-page__own-container">
          <SearchingFilter />
          <GamesCatalog />
        </div>
      )}
    </>
  );
};

export default HomePage;
