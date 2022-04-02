import AUTH_TYPES from "./actionTypes";
import { USER_STORAGE } from "./constants";

const savedUser = localStorage.getItem(USER_STORAGE.KEY);

const { user, token } = savedUser
  ? JSON.parse(savedUser)
  : { user: {}, token: "" };

export const initialState = {
  user,
  token,
};

export const AuthReducer = (initialState, action) => {
  const { user, token } = action?.payload || {};

  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...initialState,
        user,
        token,
      };
    case AUTH_TYPES.LOGOUT:
      return {
        ...initialState,
        user: "",
        token: "",
      };
    default:
      break;
  }
};
