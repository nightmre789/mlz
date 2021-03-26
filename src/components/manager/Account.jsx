import React from "react";
import SVG from "react-inlinesvg";

import deleteuser from "assets/icons/deleteuser.svg";
import pencil from "assets/icons/pencil.svg";

export default ({ name, username }) => {
   return (
      <div className="bg-gray-800 text-white p-4 flex rounded-sm shadow-xl">
         <div>
            <h2 className="text-3xl mb-4 font-medum ">{name}</h2>
            <h3 className="text-gray-200 text-xl">{username}</h3>
         </div>
         <div className="flex-1 flex flex-col gap-y-2 items-end">
            <button className="flex text-red-400 items-center hover:text-red-500 gap-x-2 px-2 py-1">
               <SVG src={deleteuser} className="fill-current w-7 h-7" />
            </button>
            <button className="flex text-yellow-300 items-center hover:text-yellow-400 gap-x-2 px-2 py-1">
               <SVG src={pencil} className="fill-current w-7 h-7" />
            </button>
         </div>
      </div>
   );
};
