import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

// filter setings arrays
import {
  genres,
  platforms,
  gameEngines,
  pegiRating,
  gameModes,
} from "../../../constants/filterSettings";

// calendar input
import Calendar from "../../Calendar/Calendar";

const FilterInputs = ({ 
   searchParams }) => {
  const [calendarStatus, setCalendarStatus] = useState(false);
  const [calButtonText, setCalButtonTex] = useState("choose");

  // inputs values
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [engine, setEngine] = useState("");
  const [pegi, setPegi] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [rating, setRating] = useState(0);

  const valueSaver = (e, setter) => {
    return setter(e.target.value);
  };

  const calendarActivate = (e) => {
    if (!calendarStatus) {
      setCalendarStatus(true);
      setCalButtonTex("set");
    } else {
      setCalendarStatus(false);
      setCalButtonTex("choose");
    }
  };

  const optionMaker = (array) => {
    return array.map((el) => (
      <option
        key={el}
        value={el}
        // onSelect={() => handlerSelect(el)}
      >
        {el}
      </option>
    ));
  };

  useEffect(() => {
    searchParams({
      gameReleasedate: releaseDate,
      gameGenre: genre,
      gamePlatform: platform,
      gameEngine: engine,
      gamePegi: pegi,
      gameMode: gameMode,
      gameRating: rating,
    });
  }, [releaseDate, genre, platform, engine, pegi, gameMode, rating]);

  return (
    <div className="filter-inputs__own-container">
      <div className="filter-inputs__container">
        <div className="filter-inputs__calendar-container">
          <Calendar
            activeWrapper={calendarStatus}
            setReleaseDate={setReleaseDate}
          />
          <button
            onClick={(e) => calendarActivate(e)}
            className="filter-inputs__calendar-button"
          >
            {calButtonText}
          </button>
        </div>

        <select
          type="text"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setGenre)}
        >
          <option value="default" disabled selected>
            GENRES
          </option>
          {optionMaker(genres)}
        </select>

        <select
          type="text"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setPlatform)}
        >
          <option value="default" disabled selected>
            PLATFORMS
          </option>
          {optionMaker(platforms)}
        </select>

        <select
          type="text"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setEngine)}
        >
          <option value="default" disabled selected>
            GAME ENGINES
          </option>
          {optionMaker(gameEngines)}
        </select>

        <select
          type="text"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setPegi)}
        >
          <option disabled selected>
            PEGI RATING
          </option>
          {optionMaker(pegiRating)}
        </select>

        <select
          type="text"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setGameMode)}
        >
          <option disabled selected>
            GAME MODES
          </option>
          {optionMaker(gameModes)}
        </select>

        <div className="filter-inputs__rating-range">
          <label
            htmlFor="input-range-game-rating"
            className="filter-inputs__rating-range--label"
          >
            Rating
          </label>
          <input
            type="range"
            id="input-range-game-rating"
            min={0}
            max={100}
            className="filter-inputs__rating-range--input"
            onChange={(e) => valueSaver(e, setRating)}
          />
        </div>
      </div>
    </div>
  );
};

FilterInputs.propTypes = {
  searchParams: propTypes.func.isRequired,
};

export default FilterInputs;
