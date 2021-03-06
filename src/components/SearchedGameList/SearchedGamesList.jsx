import React from "react";
import propTypes from "prop-types";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux imports
import { clearUserGames, setUserGames } from "@/redux/userGames/userGameAction";
import { selectUserGames } from "@/redux/userGames/userGameSelector";

const SearchedGamesList = ({ searchedGamesArray, gamesAction, sign }) => {
  const gameDispatch = useDispatch();
  const stateGames = useSelector(selectUserGames);

  const showAllText = (e, text) => {
    if (text.length > 200 && e.target.textContent.length === 200) {
      e.target.textContent = text;
    } else if (e.target.textContent.length > 200) {
      e.target.textContent = text.slice(0, 200);
    }
  };

  const clickHandler = (game, state) => {
    const resultOfGameAction = gamesAction(game, state);

    if (resultOfGameAction.functionType === "add") {
      gameDispatch(setUserGames(resultOfGameAction.game));
    }

    if (resultOfGameAction.functionType === "remove") {
      gameDispatch(clearUserGames(resultOfGameAction.gameId));
    }
  };

  const ids = [];

  if (stateGames.length > 0) {
    stateGames.forEach((element) => {
      ids.push(element.id);
    });
  }

  return (
    <div className="searched-games-list__container width-100">
      {searchedGamesArray.map((game) => {
        return (
          <div key={game.id} className="searched-games-list__game-card">
            <div className="searched-games-list__game-card__text-container">
              <div>
                {game.rating ? (
                  <p className="searched-games__game-card__rate">
                    {game.rating.toFixed(1)}
                  </p>
                ) : (
                  <p className="searched-games__game-card__rate">???</p>
                )}
                <p className="searched-games__game-card__name">{game.name}</p>
              </div>

              {game.release_dates && (
                <p className="searched-games__game-card__release">
                  {game.release_dates[0].human}
                </p>
              )}
            </div>

            <div className="searched-games__game-card__image-container">
              {game.cover && (
                <img
                  className="searched-games__game-card--image"
                  src={`https:${game.cover.url.replace(
                    "t_thumb",
                    "t_cover_big"
                  )}`}
                  alt="img_cover"
                />
              )}
            </div>

            <div className="searched-games__game-card__genres-container">
              {game.genres &&
                game.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            </div>

            <p
              className="searched-games__game-card__summary"
              onClick={(e) => showAllText(e, game.summary)}
            >
              {game.summary && game.summary.slice(0, 200)}
            </p>
            {game.url && (
              <a
                className="searched-games__game-card__game-page-link"
                href={game.url}
                target="_blank"
              >
                GAME PAGE
              </a>
            )}

            <button
              className="searched-games__game-card__game-page-button"
              onClick={() => clickHandler(game, stateGames)}
            >
              {ids.includes(game.id) ? `${sign}` : "+"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

SearchedGamesList.propTypes = {
  searchedGamesArray: propTypes.array.isRequired,
  gamesAction: propTypes.func.isRequired,
};

export default SearchedGamesList;
