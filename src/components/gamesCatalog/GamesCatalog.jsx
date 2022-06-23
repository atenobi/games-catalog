import axios from "axios";
import React from "react";
import { useState } from "react";
import api from "../../api";

// child components 
import GamesCatalogScreen from "./gamesCatalogScreen/GamesCatalogScreen";

const GamesCatalog = () => {
  const [games, setGames] = useState([]);

  const refreshGames = () => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      setGames(result.data.data);
    };
    fetchData();
  };

  return (
    <div className="games-catalog__container">
      {/* top games list */}
      <button
        onClick={() => refreshGames()}
        className="games-catalog__refresh--button"
      >
        Refresh top-games
      </button>

     <GamesCatalogScreen array={games}/>
    </div>
  );
};

export default GamesCatalog;


