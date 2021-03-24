import React, { useState } from "react";
import SVG from "react-inlinesvg";

import menu from "assets/icons/menu.svg";
import close from "assets/icons/close.svg";
import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parking from "assets/icons/parking.svg";

export default _ => {
   const [open, setOpen] = useState(false);
   return (
      <div className="md:hidden">
         <div className="p-2 text-white">
            <button
               onClick={_ => setOpen(!open)}
               className="focus:outline-none focus:ring-2 focus:ring-white"
            >
               <SVG src={menu} className="fill-current" />
            </button>
         </div>
         <div
            className={`fixed flex flex-col gap-y-5 top-0 left-0 py-4 w-2/3 bg-gray-warm-800 text-gray-warm-100 shadow-md z-40 ${
               open ? "" : "hidden"
            }`}
         >
            <div className="ml-4 mt-2 text-white">
               <button
                  onClick={_ => setOpen(!open)}
                  className="focus:outline-none focus:ring-2 focus:ring-white"
               >
                  <SVG src={close} className="fill-current" />
               </button>
            </div>
            <h1 className=" px-4 text-2xl text-white font-libre">Guard</h1>
            <button className="flex w-full px-4 text-lg hover:text-white hover:bg-gray-600 foucs:outline-none focus:bg-gray-500 focus:text-white py-1">
               <SVG src={dashboard} className="w-6 h-6 mr-4 fill-current" />
               <div className="text-left">Dashboard</div>
            </button>
            <button className="flex w-full px-4 text-lg hover:text-white hover:bg-gray-600 foucs:outline-none focus:bg-gray-500 focus:text-white py-1">
               <SVG src={shifts} className="w-6 h-6 mr-4 fill-current" />
               <div className="text-left">Shifts</div>
            </button>
            <button className="flex w-full px-4 text-lg hover:text-white hover:bg-gray-600 foucs:outline-none focus:bg-gray-500 focus:text-white py-1">
               <SVG src={parking} className="w-6 h-6 mr-4 fill-current" />
               <div className="text-left">Parking</div>
            </button>
         </div>
      </div>
   );
};
