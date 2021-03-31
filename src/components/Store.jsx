import React, { createContext, useReducer } from "react";

import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parking from "assets/icons/parking.svg";
import reports from "assets/icons/reports.svg";
import users from "assets/icons/users.svg";

import home from "assets/icons/home.svg";
import recruitment from "assets/icons/recruitment.svg";
import user from "assets/icons/user.svg";

const Reducer = (state, action) => {
   switch (action.type) {
      case "SET_TYPE":
         let items = [];
         if (action.payload === "Visitor")
            items = [
               { label: "Home", src: home, to: "/" },
               { label: "Recruitment", src: recruitment, to: "recruitment" },
               { label: "Parking Ticket", src: parking, to: "parking" },
               { label: "Sign in", src: user, to: "login" }
            ];
         else {
            items = [
               { label: "Shifts", to: "shifts", src: shifts },
               { label: "Reports", to: "reports", src: reports },
               {
                  label: "Parking",
                  to: "parking",
                  src: parking
               }
            ];
            if (action.payload === "Guard")
               items.unshift({
                  label: "Dashboard",
                  to: "/",
                  src: dashboard
               });
            else if (action.payload === "Manager")
               items.unshift({
                  label: "Accounts",
                  to: "/",
                  src: users
               });
         }
         return {
            ...state,
            user: {
               type: action.payload
            },
            navItems: items
         };
   }
};

const initialState = {
   user: {
      type: "Visitor"
   },
   navItems: [
      { label: "Home", src: home, to: "/" },
      { label: "Recruitment", src: recruitment, to: "recruitment" },
      { label: "Parking Ticket", src: parking, to: "parking" },
      { label: "Sign in", src: user, to: "login" }
   ]
};

export default ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState);
   return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
   );
};

export const Context = createContext(initialState);
