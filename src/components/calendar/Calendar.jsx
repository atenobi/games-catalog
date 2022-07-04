import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// components
import Wrapper from "./Wrapper/Wrapper";

// js function
import calendar from "../../services/calendar";

// constants
import { date } from "../../constants/date";

const Calendar = ({ activeWrapper, setReleaseDate }) => {
  const [dateInput, setDateInput] = useState(date.currentFullDate());
  const [month, setMonth] = useState(date.currentMonth);
  const [year, setYear] = useState(date.currentYear);
  const arrayDay = [[], [], [], [], [], []];

  calendar(month, year, arrayDay);

  useEffect(() => {
    setReleaseDate(dateInput);
  }, [dateInput]);

  return (
    <>
      <div className="calendar__input-container">
        <input
          className="calendar__main-input"
          placeholder={dateInput}
          value={dateInput}
          onChange={(e) => {
            setDateInput(e.target.value);
          }}
        />
        {activeWrapper && (
          <div>
            <Wrapper
              days={arrayDay}
              week={date.weekArray}
              curMonth={month}
              monthText={date.monthArray[month]}
              curDay={date.currentDay}
              curYear={year}
              yearSetter={setYear}
              setDateInput={setDateInput}
              setReleaseDate={setReleaseDate}
              monthSetter={setMonth}
            />
          </div>
        )}
      </div>
    </>
  );
};

Calendar.propTypes = {
  activeWrapper: PropTypes.bool.isRequired,
  setReleaseDate: PropTypes.func.isRequired,
};

export default Calendar;
