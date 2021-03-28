import React, { createContext, useReducer } from "react";

const Reducer = (state, action) => {
   switch (action.type) {
      case "SET_TYPE":
         console.log(state, action);
         return {
            type: action.payload
         };
   }
};

const initialState = {
   type: "Visitor"
};

export default ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState);
   return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
   );
};

export const Context = createContext(initialState);
