import { SET_USER_GAMES } from "@/redux/actionTypes";
import { CLEAR_USER_GAMES } from "@/redux/actionTypes";

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
