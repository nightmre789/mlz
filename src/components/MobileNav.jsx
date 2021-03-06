import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "components/Store";
import SVG from "react-inlinesvg";

import menu from "assets/icons/menu.svg";
import close from "assets/icons/close.svg";
import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parking from "assets/icons/parking.svg";
import logo from "assets/icons/logo.svg";

import door from "assets/icons/door.svg";

export default _ => {
   const [state, dispatch] = useContext(Context);
   const [open, setOpen] = useState(false);
   return (
      <div className="md:hidden">
         <div className="flex items-center px-8 py-4 text-white">
            <button
               onClick={_ => setOpen(!open)}
               className="focus:outline-none focus:ring-2 focus:ring-white"
            >
               <SVG src={menu} className="fill-current" />
            </button>
            <div className="flex items-center justify-center flex-1 gap-x-3">
               <SVG src={logo} className="w-8 h-8" />
               <h1 className="text-xl font-medium font-edmond">
                  MLZ Security{" "}
               </h1>
            </div>
         </div>
         <div
            className={`fixed flex flex-col top-0 left-0 px-4 py-10 w-2/3 bg-gray-warm-800 text-gray-warm-100 h-screen shadow-md z-40 ${
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
            {state.navItems.map(item => (
               <Link
                  className="flex w-full px-4 py-1 mt-5 text-xl font-medium hover:text-white hover:bg-gray-600 foucs:outline-none focus:bg-gray-500 focus:text-white"
                  to={item.to}
                  onClick={_ => setOpen(!open)}
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
                  className="flex items-center justify-center w-5/6 px-8 py-3 mt-5 text-lg font-medium text-gray-800 bg-yellow-300 rounded-lg gap-x-4 hover:bg-yellow-400 0 "
               >
                  <SVG src={door} className="fill-current" />
                  Sign Out
               </button>
            )}
         </div>
      </div>
   );
};
