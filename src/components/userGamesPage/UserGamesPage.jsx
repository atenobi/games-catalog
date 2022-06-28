import React from "react";

// child components
import SearchedGamesList from "../searchedGameList/SearchedGamesList";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTopGames } from "../../redux/selectors";

const UserGamesPage = () => {
  const addedGames = useSelector(selectTopGames);
  console.log(addedGames);

  return (
    <div className="user-games-page__container">
      {addedGames.length > 0 && (
        <>
          <h4 className="user-games-page--title">You`r games</h4>
          <SearchedGamesList searchedGamesArray={addedGames} addButton={false} />
        </>
      )}
    </div>
  );
};

export default UserGamesPage;
