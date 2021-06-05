import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "components/Store";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";
import axios from "../actions/axios";

import Dashboard from "./guard/Dashboard";
import Reports from "./reports";
import GuardShifts from "./guard/Shifts";
import Parking from "./parking";
import Accounts from "./manager/Accounts";

import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

import door from "assets/icons/door.svg";

export default _ => {
   const [activePage, setActivePage] = useState(0);
   const [state, dispatch] = useContext(Context);
   let navigate = useNavigate();

   const signout = _ => {
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
   };

   return (
      <div className="h-screen overflow-y-hidden bg-gray-900 md:flex">
         <nav className="flex-col items-center hidden my-10 xl:w-1/6 md:flex">
            <h1 className="mb-12 text-5xl text-white font-libre">
               {state.user.type}
            </h1>
            <div className="flex flex-col flex-1 w-full mt-10 gap-y-4 text-gray-warm-050 ">
               {state.navItems.map(({ label, to, src }, i) => (
                  <NavItem
                     active={activePage === i}
                     src={src}
                     to={to}
                     label={label}
                     key={i}
                     onClick={_ => setActivePage(i)}
                  />
               ))}
            </div>
            <button
               onClick={async _ => {
                  axios
                     .post("/logout", {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                     })
                     .then(_ => {
                        dispatch({
                           type: "SET_TYPE",
                           payload: { type: "Visitor" }
                        });
                        navigate("/");
                     })
                     .catch(e => {
                        console.log(e);
                     });
               }}
               className="flex items-center justify-center px-10 py-4 text-2xl font-medium text-gray-800 bg-yellow-300 rounded-lg gap-x-4 hover:bg-yellow-400"
            >
               <SVG src={door} className="fill-current" />
               Sign Out
            </button>
         </nav>
         <div className="flex-1 h-full px-4 pt-4 overflow-x-hidden overflow-y-auto md:pt-10 md:px-14">
            <MobileNav />
            <Routes>
               <Route
                  path="/"
                  element={
                     state.user.type === "Guard" ? <Dashboard /> : <Accounts />
                  }
               />
               <Route path="reports/*" element={<Reports />} />
               <Route
                  path="shifts/*"
                  element={
                     state.user.type === "Guard" ? (
                        <GuardShifts />
                     ) : (
                        <div>test</div>
                     )
                  }
               />
               <Route path="parking" element={<Parking />} />
            </Routes>
         </div>
      </div>
   );
};
