import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userInfo from "@/redux/user/userReducer";
import userGames from "@/redux/userGames/userGamesReducer";

const rootReducer = combineReducers({
  users: userInfo,
  userGames: userGames,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
