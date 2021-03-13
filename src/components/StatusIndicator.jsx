import React from "react";

export default ({ status, color }) => {
   return (
      <div
         className={`flex shadow-md items-center py-1 pl-2 pr-4 text-lg font-medium text-${color}-100 bg-${color}-500 rounded-full gap-x-2`}
         style={{ width: "fit-content" }}
      >
         <div className={`w-5 h-5 bg-${color}-100 rounded-full`} />
         {status}
      </div>
   );
};
