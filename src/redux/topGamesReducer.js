import { SET_TOP_GAMES } from "./actionTypes";

const defaultState = [];

export default function topGames(state = defaultState, action) {
  switch (action.type) {
    case SET_TOP_GAMES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
