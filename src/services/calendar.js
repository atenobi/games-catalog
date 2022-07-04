import moment from 'moment';
import {date} from '../../src/constants/date';

const wrapperBody = (m, y, arrayDay) => {
  const dayOfWeek = 7;

  const startOfMonth = new Date(y, m, 1);
  const endOfMonth = new Date(y, m + 1, 0);
  const startMonth = moment(startOfMonth).format('DD');
  const endMonth = moment(endOfMonth).format('DD');
  const startMonthText = moment(new Date(y, m, +startMonth)).format('dddd');

  const reducerFunc = (prev, current) => prev.concat(current);

  let monthLength = +endMonth;

  for (let i = 0; i < date.weekArray.length; i += 1) {
    if (startMonthText !== date.weekArray[i]) {
      arrayDay[0].unshift(null);
      monthLength += 1;
    } else {
      break;
    }
  }

  let week = 0;
  for (let day = +startMonth; arrayDay.reduce(reducerFunc).length < monthLength; day += 1) {
    if (arrayDay[week].length === dayOfWeek) {
      week += 1;
      arrayDay[week].push(day);
    } else {
      arrayDay[week].push(day);
    }
  }
};

export default wrapperBody;