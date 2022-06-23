import React from "react";

// components
import GamesCatalog from "../gamesCatalog/GamesCatalog";
import SearchingFilter from "../searchingFilter/SearchingFilter";

const HomePage = () => {
  return (
    <div className="home-page__own-container">
      <SearchingFilter />
      <GamesCatalog />
    </div>
  );
};

export default HomePage;
