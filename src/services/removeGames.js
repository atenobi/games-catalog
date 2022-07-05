export const removeGame = (game) => {
  const result = {
    functionType: "remove",
    gameId: '',
  };

  result.gameId = game.id;

  return result;
};
