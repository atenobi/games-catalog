export const addGames = (game, selector, dispatcher, set, clear) => {
  const ids = [];

  selector.forEach((element) => {
    ids.push(element.id);
  });

  if (selector.length === 0 || !ids.includes(game.id)) {
    dispatcher(set(game));
  } 
};

export const removeGame = (game, selector, dispatcher, set, clear) => {
  dispatcher(clear(game.id));
};
