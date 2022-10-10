// Reducer is here

export const appReducer = (state,  action ) => {
  switch(action.type){
    case "Get Data":
      return {
        ...state,
         Cases: action.payload
      }
  }
  return state

};
