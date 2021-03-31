import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "components/Store";
import SVG from "react-inlinesvg";

import menu from "assets/icons/menu.svg";
import close from "assets/icons/close.svg";
import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parking from "assets/icons/parking.svg";

import door from "assets/icons/door.svg";

export default ({ items }) => {
   const [state, dispatch] = useContext(Context);
   const [open, setOpen] = useState(false);
   return (
      <div className="md:hidden">
         <div className="px-8 py-4 text-white">
            <button
               onClick={_ => setOpen(!open)}
               className="focus:outline-none focus:ring-2 focus:ring-white"
            >
               <SVG src={menu} className="fill-current" />
            </button>
         </div>
         <div
            className={`fixed flex flex-col gap-y-5 top-0 left-0 px-4 py-10 w-2/3 bg-gray-warm-800 text-gray-warm-100 h-screen shadow-md z-40 ${
               open ? "" : "hidden"
            }`}
         >
            <div className="flex justify-end mt-2 mr-4 text-white">
               <button
                  onClick={_ => setOpen(!open)}
                  className="focus:outline-none focus:ring-2 focus:ring-white"
               >
                  <SVG src={close} className="fill-current" />
               </button>
            </div>
            <h1 className="px-4 mb-4 text-4xl font-medium text-white font-libre">
               {state.user.type}
            </h1>
            {state.navItems.map(item => (
               <Link
                  className="flex w-full px-4 py-1 text-xl font-medium hover:text-white hover:bg-gray-600 foucs:outline-none focus:bg-gray-500 focus:text-white"
                  to={item.to}
               >
                  <SVG src={item.src} className="w-8 h-8 mr-4 fill-current" />
                  <div className="text-left">{item.label}</div>
               </Link>
            ))}
            {state.user.type !== "Visitor" && (
               <button
                  onClick={_ => {
                     dispatch({ type: "SET_TYPE", payload: "Visitor" });
                     navigate("/");
                  }}
                  className="flex items-center justify-center w-5/6 px-8 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg gap-x-4 focus:outline-none hover:bg-blue-600 focus:bg-blue-700 "
               >
                  <SVG src={door} className="fill-current" />
                  Sign Out
               </button>
            )}
         </div>
      </div>
   );
};
