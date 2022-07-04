import React from "react";

// redux
import { useSelector } from "react-redux/es/exports";
import { selectUsers } from "../../redux/user/userSelector";

// components
import GamesCatalog from "../GamesCatalog/GamesCatalog";
import SearchingFilter from "../searchingFilter/SearchingFilter";


const HomePage = () => {
  const user = useSelector(selectUsers);

  return (
    <>
    {!user[1] && (
        <div className="home-page__own-container">
          <h1 className="home-page--title">To use the service, log in to your account or register. Have a good day!</h1>
          <img className="home-page--art" src="https://wallpapers.com/images/high/pixel-art-super-mario-7cs6zotrm4lww4oi.jpg" alt="art" />
        </div>
      )}
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
