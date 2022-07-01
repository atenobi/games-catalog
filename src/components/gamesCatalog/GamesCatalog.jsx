import React, { useState } from "react";
// api
import api from "../../api";
// redux store
import { useDispatch, useSelector } from "react-redux";
import { setTopGames } from "../../redux/actions";


// child components 
import GamesCatalogScreen from "./gamesCatalogScreen/GamesCatalogScreen";
// import topGames from "../../redux/topGamesReducer";
import { selectTopGames } from "../../redux/selectors";

const GamesCatalog = () => {
  const dispatch = useDispatch();
  // const topGamesSelector = useSelector(selectTopGames);
  const [games, setGames] = useState([]);

  const refreshGames = () => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      setGames(result.data.data);
      dispatch(setTopGames(result.data.data))
    };
    fetchData();
  };

  // console.log(topGamesSelector);

  return (
    <div className="games-catalog__container width-100">
      {/* top games list */}
      <button
        onClick={() => refreshGames()}
        className="games-catalog__refresh--button font-regular"
      >
        Refresh top-games
      </button>

     <GamesCatalogScreen array={games}/>
    </div>
  );
};

export default GamesCatalog;


