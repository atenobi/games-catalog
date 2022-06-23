import React from "react";
import PropTypes from "prop-types";

const SearchedGamesList = ({ searchedGamesArray }) => {
  return (
    <div className="searched-games-list__container">
      {searchedGamesArray.map((game) => {
        console.log(searchedGamesArray);
        return (
          <div key={game.id} className="searched-games-list__game-card">
            <img src={`https:${game.cover.url}`} alt="img_cover" />
            <p>{game.name}</p>
            <br />
            {game.genres &&
              game.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            <br />
            <p>{game.summary}</p>
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

SearchedGamesList.PropTypes = {
  searchedGamesArray: PropTypes.array.isRequired,
};

export default SearchedGamesList;
