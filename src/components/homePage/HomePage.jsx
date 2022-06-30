import React from "react";

// redux
import { useSelector } from "react-redux/es/exports";
import { selectUsers } from "../../redux/selectors";

// components
import GamesCatalog from "../gamesCatalog/GamesCatalog";
import SearchingFilter from "../searchingFilter/SearchingFilter";

const HomePage = () => {
  const user = useSelector(selectUsers);

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
