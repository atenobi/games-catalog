import { SET_USER_GAMES } from "@/redux/actionTypes";
import { CLEAR_USER_GAMES } from "@/redux/actionTypes";

export const setUserGames = (arr) => ({
  type: SET_USER_GAMES,
  payload: arr,
});

export const clearUserGames = (id) => ({
  type: CLEAR_USER_GAMES,
  id: id,
});
