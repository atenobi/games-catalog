import React from "react";
import PropTypes, { arrayOf, number, string } from "prop-types";

// constants
import { date } from "../../../constants/date";

const Wrapper = ({
  days,
  week,
  curDay,
  curMonth,
  monthText,
  yearSetter,
  curYear,
  setDateInput,
  monthSetter,
  setReleaseDate,
}) => {
  const january = 0;
  const december = 11;

  const monthMinusPlus = () => {
    if (curMonth !== january) {
      monthSetter(curMonth - 1);
    } else {
      monthSetter(december);
      yearSetter(curYear - 1);
    }
  };

  const monthButtonPlus = () => {
    if (curMonth !== december) {
      monthSetter(curMonth + 1);
    } else {
      monthSetter(january);
      yearSetter(curYear + 1);
    }
  };

  return (
    <div className="calendar_wrapper">
      <div className="calendar-wrapper__buttons-container width-100">
        <button
          type="submit"
          className="calendar_wrapper_button"
          onClick={monthMinusPlus}
        >
          {"<"}
        </button>

        <div className="calendar_wrapper__head">
          {monthText} {curYear}
        </div>
        <button
          type="submit"
          className="calendar_wrapper_button"
          onClick={monthButtonPlus}
        >
          {">"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {week.map((el) => (
              <td className="calendar_wrapper_head_item" key={el}>
                {el.slice(0, 2)}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="calendar_wrapper__body">
          {days.map((weekArr) => (
            <tr key={weekArr}>
              {weekArr.map((dayNum, index) => (
                <td key={index}>
                  <button
                    key={dayNum}
                    type="submit"
                    className={
                      dayNum === curDay &&
                      curMonth === date.currentMonth &&
                      curYear === date.currentYear
                        ? "calendar_wrapper_cur_item"
                        : dayNum < curDay &&
                          curMonth === date.currentMonth &&
                          curYear === date.currentYear
                        ? "calendar_wrapper_past_item"
                        : dayNum === null
                        ? "hidden_element"
                        : "calendar_wrapper_body_item"
                    }
                    onClick={() => {
                      setDateInput(`${monthText} ${dayNum}, ${curYear}`);

                      setReleaseDate(
                        `${monthText} ${curDay}, ${curYear}`
                      );
                    }}
                  >
                    {dayNum}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Wrapper.propTypes = {
  days: PropTypes.arrayOf(arrayOf(number)).isRequired,
  week: PropTypes.arrayOf(string).isRequired,
  curMonth: PropTypes.number.isRequired,
  monthText: PropTypes.string.isRequired,
  curDay: PropTypes.number.isRequired,
  curYear: PropTypes.number.isRequired,
  yearSetter: PropTypes.func.isRequired,
  setDateInput: PropTypes.func.isRequired,
  setReleaseDate: PropTypes.func.isRequired,
  monthSetter: PropTypes.func.isRequired,
};

export default Wrapper;
