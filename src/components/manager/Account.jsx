import React from "react";
import SVG from "react-inlinesvg";

import deleteuser from "assets/icons/deleteuser.svg";
import pencil from "assets/icons/pencil.svg";

export default ({ name, email, toggleDelete }) => {
   return (
      <div className="bg-gray-800 text-white p-3 md:p-4 flex rounded-sm shadow-xl">
         <div className="overflow-ellipsis truncate">
            <h2 className="text-xl md:text-2xl mb-4 font-medum ">{name}</h2>
            <h3 className="text-sm md:text-md text-gray-200">{email}</h3>
         </div>
         <div className="flex-1 flex flex-col gap-y-2 items-end">
            <button
               className="flex text-red-400 items-center hover:text-red-500 gap-x-2 px-2 py-1"
               onClick={toggleDelete}
            >
               <SVG
                  src={deleteuser}
                  className="fill-current w-4 h-4 md:w-7 md:h-7"
               />
            </button>
            <button className="flex text-yellow-300 items-center hover:text-yellow-400 gap-x-2 px-2 py-1">
               <SVG
                  src={pencil}
                  className="fill-current w-4 h-4 md:w-7 md:h-7"
               />
            </button>
         </div>
      </div>
   );
};
