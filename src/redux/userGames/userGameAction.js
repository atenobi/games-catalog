import { SET_USER_GAMES, CLEAR_USER_GAMES } from "./gamesActionTypes";

export const setUserGames = (arr) => ({
  type: SET_USER_GAMES,
  payload: arr,
});

export const clearUserGames = (id) => ({
  type: CLEAR_USER_GAMES,
  id: id,
});
