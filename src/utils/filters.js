const arrOfObjToTextArr = (array) => {
  const textArray = [];
  array.forEach((element) => textArray.push(element.name));
  return textArray;
};

// date
export const dateFilter = (arr, parameter) => {
  const equalDate = (strDate) => Date.parse(strDate);
  return arr.filter(
    (game) =>
      game.release_dates &&
      equalDate(game.release_dates[0].human) &&
      equalDate(game.release_dates[0].human) > equalDate(parameter)
  );
};

//rating
export const ratingFilter = (arr, parameter) =>
  arr.filter((game) => game.rating && game.rating > parameter);

// age rating
export const pegiRatingFilter = (arr, parameter) => {
  let result = [];
  arr.forEach((game) => {
  if ( game.age_ratings && game.age_ratings[0].rating < parameter) {
    result.push(game);
  } else if (parameter === "---any---") {
    result.push(game);
  }
});
  return result;
};
  

// genre
export const genreFilter = (arr, parameter) => {
  let result = [];
  arr.forEach((game) => {
    if (game.genres && arrOfObjToTextArr(game.genres).includes(parameter)) {
      result.push(game);
    } else if (parameter === "---any---") {
      result.push(game);
    }
  });
  return result;
};

// platform
export const platformFilter = (arr, parameter) => {
  let result = [];
  arr.forEach((game) => {
    if (
      // !parameter &&
      game.platforms &&
      arrOfObjToTextArr(game.platforms).includes(parameter)
    ) {
      result.push(game);
    } else if (parameter === "---any---") {
      result.push(game);
    }
  });
  return result;
};

// engine
export const engineFilter = (arr, parameter) => {
  let result = [];
  arr.forEach((game) => {
    if (
      // !parameter &&
      game.game_engines &&
      arrOfObjToTextArr(game.game_engines).includes(parameter)
    ) {
      result.push(game);
    } else if (parameter === "---any---") {
      result.push(game);
    }
  });
  return result;
};

// gameModeFilter
export const gameModeFilter = (arr, parameter) => {
  let result = [];
  arr.forEach((game) => {
    if (
      // !parameter &&
      game.game_modes &&
      arrOfObjToTextArr(game.game_modes).includes(parameter)
    ) {
      result.push(game);
    } else if (parameter === "---any---") {
      result.push(game);
    }
  });
  return result;
};
