import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userInfo from "../redux/userReducer";
import topGames from "../redux/topGamesReducer";

const rootReducer = combineReducers({
  users: userInfo,
  topGames: topGames,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
