import React, { useState } from "react";

// api
import { getMostPopularGames } from "@/api/getMostPopularGames";

// child components
import GamesCatalogScreen from "@/screens/GamesCatalogScreen/GamesCatalogScreen";

const GamesCatalog = () => {
  const [games, setGames] = useState([]);

  const refreshGames = async () => {
    setGames(await getMostPopularGames());
  };

  return (
    <div className="games-catalog__container width-100">
      <button
        onClick={() => refreshGames()}
        className="games-catalog__refresh--button font-regular"
      >
        Refresh top-games
      </button>

      {games.length > 0 && <GamesCatalogScreen array={games} />}
    </div>
  );
};

export default GamesCatalog;
