import React, { useState } from "react";
import SVG from "react-inlinesvg";

import Account from "./Account";

import adduser from "assets/icons/adduser.svg";

export default _ => {
   const [selected, setSelected] = useState(false);
   return (
      <>
         <div className="flex gap-x-12 text-white text-3xl font-medium">
            <button
               onClick={_ => setSelected(false)}
               className={`${
                  selected ? "" : "border-b-2 border-yellow-200"
               } focus:outline-none px-2 py-4 hover:text-yellow-100 focus:text-yellow-200`}
            >
               Guards
            </button>
            <button
               onClick={_ => setSelected(true)}
               className={`${
                  !selected ? "" : "border-b-2 border-yellow-200"
               } focus:outline-none px-2 py-4 hover:text-yellow-100 focus:text-yellow-200`}
            >
               Clients
            </button>
            <button className="flex items-center gap-x-4 text-xl focus:outline-none focus:text-yellow-200 hover:text-yellow-100">
               <SVG src={adduser} className="fill-current h-8 w-8" />
               {selected ? "Add Client" : "Add Guard"}
            </button>
         </div>
         <div className="grid grid-cols-4 gap-4 mt-16">
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
            <Account name="Chief Zafy" username="Chief123" />
         </div>
      </>
   );
};
