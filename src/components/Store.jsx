import React, { createContext, useReducer } from "react";

const Reducer = (state, action) => {
   switch (action.type) {
      case "SET_ITEMS":
         return {
            ...state,
            items: action.payload
         };

      case "ADD_ITEM":
         return {
            ...state,
            items: state.items.concat(action.payload)
         };

      case "REMOVE_ITEM":
         return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
         };
      default:
         return state;
   }
};

const initialState = {
   items: [
      { name: "Margherita Pizza", quantity: 1, price: 1599 },
      {
         name: "Chicken Tikka Pizza",
         quantity: 2,
         price: 2600,
         addons: [
            { name: "mushrooms", price: 150 },
            { name: "onions", price: 100 }
         ]
      }
   ]
};

export default ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState);
   return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
   );
};

export const Context = createContext(initialState);
