import React from "react";

// child components
import SearchedGamesList from "../SearchedGameList/SearchedGamesList";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTopGames } from "../../redux/topGames/topGameSelector";

// js functions
import { removeGame } from "../../services/addRemoveGames";

const UserGamesPage = () => {
  const addedGames = useSelector(selectTopGames);

  return (
    <div className="user-games-page__container">
      {addedGames.length > 0 && (
        <>
          <h4 className="user-games-page--title">You`r games</h4>
          <SearchedGamesList searchedGamesArray={addedGames} gamesAction={removeGame} sign={"🗑"} />
        </>
      )}
    </div>
  );
};

export default UserGamesPage;
