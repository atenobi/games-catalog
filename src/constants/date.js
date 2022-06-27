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
    const monthArr = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];
    const { currentDay, currentMonth, currentYear } = this;
    return `${monthArr[currentMonth]} ${currentDay}, ${currentYear}`;
  },
};