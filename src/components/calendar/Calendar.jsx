import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import Wrapper from "./wrapper/Wrapper";
import wrapperBody from "./wrapper/wrapperBody";

// constants
import { date } from "../../constants/date";

const Calendar = ({ activeWrapper, setReleaseDate }) => {
  const [dateInput, setDateInput] = useState(date.currentFullDate());
  const [month, setMonth] = useState(date.currentMonth);
  const [year, setYear] = useState(date.currentYear);
  const arrayDay = [[], [], [], [], [], []];

  wrapperBody(month, year, arrayDay);

  return (
    <>
      <div className="calendar_input">
        <input
          type="text"
          placeholder={dateInput}
          className="form_input"
          onChange={(e) => setReleaseDate(e.target.value)}
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
