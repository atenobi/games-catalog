export const addGames = (game, selector) => {
    const result = {
      functionType: "add",
      game: {},
    };
  
    const ids = [];
  
    selector.forEach((element) => {
      ids.push(element.id);
    });
  
    if (selector.length === 0 || !ids.includes(game.id)) {
      result.game = game;
    } 
  
    return result;
  };
  