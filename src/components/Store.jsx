import React, { createContext, useReducer, useEffect } from "react";

import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parking from "assets/icons/parking.svg";
import reports from "assets/icons/reports.svg";
import users from "assets/icons/users.svg";

import home from "assets/icons/home.svg";
import recruitment from "assets/icons/recruitment.svg";
import user from "assets/icons/user.svg";
import axios from "../actions/axios";

const Reducer = (state, action) => {
   switch (action.type) {
      case "SET_TYPE":
         console.log("setting type", action.payload);
         let items = [];
         let user;
         if (action.payload.type === "Visitor") {
            items = [
               { label: "Home", src: home, to: "/" },
               { label: "Recruitment", src: recruitment, to: "recruitment" },
               { label: "Parking Ticket", src: parking, to: "parking" },
               { label: "Sign in", src: user, to: "login" }
            ];
            user = {
               type: "Visitor"
            };
         } else {
            items = [
               { label: "Shifts", to: "shifts", src: shifts },
               { label: "Reports", to: "reports", src: reports },
               {
                  label: "Parking",
                  to: "parking",
                  src: parking
               }
            ];
            if (action.payload.type === "Guard")
               items.unshift({
                  label: "Dashboard",
                  to: "/",
                  src: dashboard
               });
            else if (action.payload.type === "Manager")
               items.unshift({
                  label: "Accounts",
                  to: "/",
                  src: users
               });
            user = {
               ...action.payload
            };
         }

         return {
            ...state,
            user: user,
            navItems: items
         };
   }
};

const initialState = {
   user: {
      type: "Loading"
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

   useEffect(() => {
      console.log(state.user.type);
      axios
         .get("/user", {
            "Content-Type": "application/json",
            Accept: "application/json"
         })
         .then(res => {
            dispatch({
               type: "SET_TYPE",
               payload: res.data.data
            });
         })
         .catch(err => {
            dispatch({
               type: "SET_TYPE",
               payload: {
                  type: "Visitor"
               }
            });
         });
   }, []);

   return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
   );
};

export const Context = createContext(initialState);
