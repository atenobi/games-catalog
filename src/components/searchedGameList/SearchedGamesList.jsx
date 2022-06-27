import React from "react";
import propTypes from "prop-types";

const SearchedGamesList = ({ searchedGamesArray }) => {
  const showAllText = (e, text) => {
    if (text.length > 200 && e.target.textContent.length === 200) {
      e.target.textContent = text;
    } else if (e.target.textContent.length > 200) {
      e.target.textContent = text.slice(0, 200);
    }
    // console.log(e.target.textContent.length);
  };

  return (
    <div className="searched-games-list__container">
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
                  src={`https:${game.cover.url}`}
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
          </div>
        );
      })}
    </div>
  );
};

SearchedGamesList.propTypes = {
  searchedGamesArray: propTypes.array.isRequired,
};

export default SearchedGamesList;
