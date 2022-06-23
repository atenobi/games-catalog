import React, { useState, useEffect } from "react";

// child component
import FilterInputs from "./filterInputs/FilterInputs";
import SearchedGamesList from "../searchedGameList/SearchedGamesList";

const SearchingFilter = () => {
  const [inputsVisibility, setInputsVisibility] = useState("hidden-el");

  const [gameName, setGameName] = useState("");

  const [searchedGamesArray, setSearchedGamesArray] = useState([]);

  const [userFilterSearchParams, setUserFilterSearchParams] = useState({
    gameReleasedate: "",
    gameGenre: "",
    gamePlatform: "",
    gameEngine: "",
    gamePegi: "",
    gameMode: "",
    gameRating: "",
  });

  const userNameSearcInputHandler = (e) => setGameName(e.target.value);

  const clickFilterHandler = (e) => {
    e.target.textContent = "Hide filters";
    if (inputsVisibility === "hidden-el") {
      setInputsVisibility("searching-filters__inputs");
    } else {
      e.target.textContent = "Open filters";
      setInputsVisibility("hidden-el");
    }
  };

  const userSearchSubmitHandler = () => {
    // https://api.igdb.com/v4 === /games_api/
    fetch("/games_api/games/", {
      method: "POST",
      headers: {
        "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
        Authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
      },
      body: `fields id, name, release_dates.human, rating, game_engines, summary, involved_companies, cover.url, genres.name; search "${gameName}"; limit 10;`,
    })
      .then((response) => response.json())
      .then((data) => setSearchedGamesArray(data));
  };

  const userFilterSearchSubmitHandler = () => {
    // https://api.igdb.com/v4 === /games_api/
    fetch("/games_api/games/", {
      method: "POST",
      headers: {
        "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
        Authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
      },
      body: `fields id, name, release_dates.human, rating, game_engines, summary, involved_companies, cover.url, genres.name; limit 10;`,
    })
      .then((response) => response.json())
      .then((data) => setSearchedGamesArray(data));
  };

  return (
    <div className="searching-filters__own-container">
      <div className="searching-filters__container">
        <p className="searching-filters__title">Filters</p>

        <input
          type="text"
          placeholder="Search games"
          className="searching-filters__input"
          onChange={(e) => userNameSearcInputHandler(e)}
        />

        <button
          onClick={() => userSearchSubmitHandler()}
          className="searching-filters__serch-name-button"
        >
          SEARCH BY NAME
        </button>

        <button
          onClick={(e) => clickFilterHandler(e)}
          className="searching-filters__button"
        >
          Open filters
        </button>
      </div>

      {/* child filters inputs */}
      <div className={inputsVisibility}>
        <FilterInputs
          searchSubmit={(e) => userFilterSearchSubmitHandler(e)}
          searchParams={setUserFilterSearchParams}
        />
      </div>

      {searchedGamesArray.length > 0 && (
        <SearchedGamesList searchedGamesArray={searchedGamesArray} />
      )}
    </div>
  );
};

export default SearchingFilter;
