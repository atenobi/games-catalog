import { SET_USER } from "../actionTypes";

export const setUser = (info) => ({
    type: SET_USER,
    payload: info,
  });