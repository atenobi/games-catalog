import React, { useState, useEffect } from "react";

// child component
import FilterInputs from "@/components/FilterInputs/FilterInputs";

//screens
import SearchedGamesList from "@/components/SearchedGameList/SearchedGamesList";

// js functions
import { addGames } from "@/services/addGames";
import { getGamesByName } from "@/api/getGames";
import { gamesFilter } from "@/services/gamesFilter";

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

  const userSearchSubmitHandler = async () => {
    const ferchResult = await getGamesByName(gameName);
    setSearchedGamesArray(ferchResult);
    setFiltredGamesArray(ferchResult);
  };

  useEffect(() => {
    setFiltredGamesArray(
      gamesFilter(searchedGamesArray, userFilterSearchParams)
    );
  }, [userFilterSearchParams]);

  return (
    <div className="searching-filters__own-container width-100">
      <div className="searching-filters__container width-100">
        <p className="searching-filters__title">Filters</p>

        <input
          type="text"
          placeholder="Search games"
          className="searching-filters__input"
          onChange={(e) => userNameSearcInputHandler(e)}
        />

        <button
          onClick={() => userSearchSubmitHandler()}
          className="searching-filters__serch-name-button font-secondary"
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
        <FilterInputs searchParams={setUserFilterSearchParams} />
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
