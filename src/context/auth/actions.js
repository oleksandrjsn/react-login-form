import { v4 as uuid } from "uuid";
import AUTH_TYPES from "./actionTypes";
import { USER_STORAGE } from "./constants";

const fakeRequest = (user) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { token: uuid(), user } });
    }, 500);
  });

export const loginUser = async (dispatch, payload) => {
  const { data } = await fakeRequest(payload);
  
  dispatch({ type: AUTH_TYPES.LOGIN, payload: data });
  localStorage.setItem(USER_STORAGE.KEY, JSON.stringify(data));

  return data;
};

export const logoutUser = async (dispatch) => {
    dispatch({ type: AUTH_TYPES.LOGOUT });
	localStorage.removeItem(USER_STORAGE.KEY);
};
