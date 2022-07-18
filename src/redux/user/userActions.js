import { SET_USER } from "./userActionTypes";

export const setUser = (info) => ({
    type: SET_USER,
    payload: info,
  });