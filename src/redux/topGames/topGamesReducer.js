import { SET_TOP_GAMES } from "../actionTypes";
import { CLEAR_TOP_GAMES } from "../actionTypes";

const defaultState = {
  topGames: [],
};

export default function topGames(state = defaultState, action) {
  switch (action.type) {
    case SET_TOP_GAMES:
      return { ...state, topGames: [...state.topGames, action.payload] };

    case CLEAR_TOP_GAMES:
      return { ...state, topGames: state.topGames.filter(t => t.id !== action.id) };

    default:
      return state;
  }
}
