import { createContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

export const AuthStateContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, dispatchUser] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={{ data, dispatchUser }}>
      {children}
    </AuthStateContext.Provider>
  );
};
