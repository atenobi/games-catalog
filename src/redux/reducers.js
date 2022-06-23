import { SET_USER } from "./actionTypes";

const defaultState = [{name: null, mail: null, pass: null}];

export default function userInfo(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return [...state, { ...action.payload }];

    default:
      return state;
  }
}
