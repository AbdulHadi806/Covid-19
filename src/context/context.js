import React, { createContext, useReducer, useEffect } from "react";
import { appReducer } from "./appReducer";

const api = "https://covid19.mathdro.id/api/countries/Pakistan/confirmed";

// initialState is here

export const initialState = {
  Cases: []
};

export const GlobalContext = createContext(initialState);

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Api section starts here
  const fetchApiData = async (api) => {

    try {
      const response = await fetch(api);
      const data = await response.json();
      dispatch({
        type: "Get Data",
        payload: data
      });
    } catch (error) {
      console.log(error + " be better on fetching data");
    }
  };

  useEffect(() => {
    fetchApiData(api);
  }, []);
  // Api section ends here
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}
