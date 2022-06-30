import React, { useState, useEffect } from "react";

// child component
import FilterInputs from "./filterInputs/FilterInputs";
import SearchedGamesList from "../searchedGameList/SearchedGamesList";

// js filters
import {
  dateFilter,
  ratingFilter,
  pegiRatingFilter,
  genreFilter,
  platformFilter,
  engineFilter,
  gameModeFilter,
} from "../../utils/filters";

// js functions
import { addGames } from "../../utils/addRemoveGames";

const SearchingFilter = () => {
  const [inputsVisibility, setInputsVisibility] = useState("hidden-el");

  const [gameName, setGameName] = useState("");

  const [searchedGamesArray, setSearchedGamesArray] = useState([]);
  const [filtredGamesArray, setFiltredGamesArray] = useState([]);

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
    const apiHeaders = {
      "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
      Authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
    };

    // https://api.igdb.com/v4 === /games_api/
    fetch("/games_api/games/", {
      method: "POST",
      headers: apiHeaders,
      body: `fields id, name, release_dates.human, rating, age_ratings.rating, game_engines.name, summary, cover.url, genres.name, platforms.name, game_modes.name, url;
        search "${gameName}";
        limit 500;`,
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchedGamesArray(data);
        setFiltredGamesArray(data);
      });
  };

  const gamesFilter = (gamesArr, params) => {
    let result = [];
    let copy = [...gamesArr];

    let dateFiltered = [];
    let ratingFiltered = [];
    let ageRatingFiltered = [];
    let genresFiltered = [];
    let platformFiltered = [];
    let engineFiltered = [];
    let gameModesFiltered = [];

    dateFiltered = [...dateFilter(copy, params.gameReleasedate)];
    ratingFiltered = [...ratingFilter(dateFiltered, params.gameRating)];
    ageRatingFiltered = [...pegiRatingFilter(ratingFiltered, params.gamePegi)];
    genresFiltered = [...genreFilter(ageRatingFiltered, params.gameGenre)];
    platformFiltered = [...platformFilter(genresFiltered, params.gamePlatform)];
    engineFiltered = [...engineFilter(platformFiltered, params.gameEngine)];
    gameModesFiltered = [...gameModeFilter(engineFiltered, params.gameMode)];

    result = [...gameModesFiltered];
    setFiltredGamesArray([...result]);
  };

  useEffect(() => {
    gamesFilter(searchedGamesArray, userFilterSearchParams);
  }, [userFilterSearchParams]);

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
          searchParams={setUserFilterSearchParams}
        />
      </div>

      {searchedGamesArray.length > 0 && (
        <SearchedGamesList
          searchedGamesArray={filtredGamesArray}
          gamesAction={addGames}
          sign={"✓"}
        />
      )}
    </div>
  );
};

export default SearchingFilter;
