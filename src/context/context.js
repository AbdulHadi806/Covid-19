import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";



// initialState is here

export const initialState = {
  Cases: []
};

export const GlobalContext = createContext(initialState);

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Api section starts here
 const setCasesData = (data)=> {
  dispatch({
    type: "Get Data",
    payload: data
  });
 }

  // Api section ends here and passing values here
  return <GlobalContext.Provider value={{Cases: state.Cases, setCasesData}}>{children}</GlobalContext.Provider>;
}