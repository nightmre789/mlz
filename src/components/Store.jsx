import React, { createContext, useReducer } from "react";

const Reducer = (state, action) => {
   switch (action.type) {
      case "SET_USER":
         return {
            ...state,
            user: action.payload
         };
   }
};

const initialState = {
   user: {
      type: "Guard"
   }
};

export default ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState);
   return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
   );
};

export const Context = createContext(initialState);
