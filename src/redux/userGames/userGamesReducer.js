import { SET_USER_GAMES, CLEAR_USER_GAMES } from "./gamesActionTypes";

const defaultState = {
  userGames: [],
};

export default function topGames(state = defaultState, action) {
  switch (action.type) {
    case SET_USER_GAMES:
      return { ...state, userGames: [...state.userGames, action.payload] };

    case CLEAR_USER_GAMES:
      return { ...state, userGames: state.userGames.filter(t => t.id !== action.id) };

    default:
      return state;
  }
}
