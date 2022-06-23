import React from "react";
import propTypes from "prop-types";

// js
import {imageLinkClearFu} from '../../../assets/imageCleare';

const GamesCatalogScreen = ({ array }) => {
    return (
        <div className="games-catalog__games-container">
        {array.map((game) => (
          <div key={game.id} className="games-catalog__games-card">
            <img
              src={imageLinkClearFu(game.box_art_url)}
              alt="game-icon"
              className="games-catalog__game--image"
            />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    )
};

GamesCatalogScreen.propTypes = {
    array: propTypes.array.isRequired,
};

export default GamesCatalogScreen;
