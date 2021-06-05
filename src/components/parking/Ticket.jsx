import React from "react";
import SVG from "react-inlinesvg";

import del from "assets/icons/delete.svg";

export default ({
   name,
   model,
   plate,
   address,
   expiry,
   showDelete,
   toggleDelete
}) => {
   return (
      <div className="bg-gray-800 text-white p-3 md:p-4 flex rounded-sm shadow-xl">
         <div className="overflow-ellipsis truncate">
            <h2 className="text-xl md:text-2xl mb-0.5 font-medum ">{name}</h2>
            <h3 className="text-sm md:text-md mb-3 text-gray-200">{expiry}</h3>
            <h4>{`${model} - ${plate}`}</h4>
            <h4>{address}</h4>
         </div>
         <div className="flex-1 flex flex-col gap-y-2 items-end">
            <button
               className={`flex ${
                  showDelete
                     ? "text-red-400 hover:text-red-500"
                     : "cursor-default text-gray-600 focus:outline-none"
               } items-center  gap-x-2 px-2 py-1`}
               onClick={toggleDelete}
            >
               <SVG src={del} className="fill-current w-4 h-4 md:w-7 md:h-7" />
            </button>
         </div>
      </div>
   );
};
