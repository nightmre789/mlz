import React from "react";

import Report from "components/report";

export default _ => {
   return (
      <>
         <div className="flex flex-col mb-4 lg:flex-row font-medium text-lg gap-y-4 gap-x-10 text-white">
            <div className="lg:w-1/2 flex flex-col gap-y-2">
               <div className="rounded-lg flex px-4 py-3 bg-gray-warm-800">
                  Site Name:<span className="text-right flex-1">Queen 10</span>
               </div>
               <div className="rounded-lg flex px-4 py-3 bg-gray-warm-800">
                  Site Address:
                  <span className="text-right flex-1">247 Queen St. E</span>
               </div>
               <div className="rounded-lg flex px-4 py-3 bg-gray-warm-800">
                  Site Contact:
                  <span className="text-right flex-1">Mike Mikeson</span>
               </div>
               <div className="flex rounded-lg px-4 py-3 bg-gray-warm-800">
                  Site Contact #:
                  <span className="text-right flex-1">647-123-4567</span>
               </div>
            </div>
            <div className="flex flex-col gap-y-5 lg:w-1/2">
               <div className="flex gap-x-4">
                  <button className="w-1/2 py-3 px-4 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-1 focus:ring-white text-white rounded-lg focus:outline-none">
                     Complete Checklist
                  </button>
                  <button className="w-1/2 py-3 px-4 bg-gray-600 text-gray-300 rounded-lg focus:outline-none">
                     Start Shift
                  </button>
               </div>
               <div className="flex gap-x-4">
                  <button className="w-1/2 py-3 px-4 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-1 focus:ring-white text-white rounded-lg focus:outline-none">
                     Report Incident
                  </button>
                  <button className="w-1/2 py-3 px-4 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-1 focus:ring-white text-white rounded-lg focus:outline-none">
                     Add Note
                  </button>
               </div>
               <div className="flex-1 flex items-end">
                  <button className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:ring-1 focus:ring-white text-white rounded-lg focus:outline-none">
                     Finish Shift
                  </button>
               </div>
            </div>
         </div>
         <Report guard />
      </>
   );
};
