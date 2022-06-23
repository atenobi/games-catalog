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
import Calendar from "../../calendar/Calendar";

const FilterInputs = ({ searchSubmit, searchParams }) => {
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

  const userCanselHandler = () => {
    setReleaseDate("");
    setGenre("");
    setPlatform("");
    setEngine("");
    setPegi("");
    setGameMode("");
    setRating("");
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
          placeholder="Genres"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setGenre)}
        >
          {optionMaker(genres)}
        </select>

        <select
          type="text"
          placeholder="Platforms"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setPlatform)}
        >
          {optionMaker(platforms)}
        </select>

        <select
          type="text"
          placeholder="Game Engines"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setEngine)}
        >
          {optionMaker(gameEngines)}
        </select>

        <select
          type="text"
          placeholder="PEGI Rating"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setPegi)}
        >
          {optionMaker(pegiRating)}
        </select>

        <select
          type="text"
          placeholder="Game Modes"
          className="filter-inputs__input"
          onChange={(e) => valueSaver(e, setGameMode)}
        >
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

      <button className="filter-inputs__button" onClick={()=> userCanselHandler()}>CANSEL</button>
      <button className="filter-inputs__button" onClick={() => searchSubmit()}>
        SEARCH
      </button>
    </div>
  );
};

FilterInputs.propTypes = {
  searchSubmit: propTypes.func.isRequired,
  searchParams: propTypes.func.isRequired,
};

export default FilterInputs;
