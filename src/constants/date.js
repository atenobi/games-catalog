const dateObj = new Date();

export const date = {
  currentYear: dateObj.getFullYear(),
  currentMonth: dateObj.getMonth(),
  currentDay: dateObj.getDate(),
  monthArray: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ],
  weekArray: [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  ],
  currentFullDate() {
    const { currentDay, currentMonth, currentYear } = this;
    return `${currentDay}-${currentMonth}-${currentYear}`;
  },
};