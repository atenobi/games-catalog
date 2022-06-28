import { SET_USER } from "./actionTypes";
import { SET_TOP_GAMES } from "./actionTypes";

export const setUser = (info) => ({
  type: SET_USER,
  payload: info,
});

export const setTopGames = (arr) => ({
  type: SET_TOP_GAMES,
  payload: arr,
});
