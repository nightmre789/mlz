import React from "react";
import axios from "../../actions/axios";

export default props => {
   return (
      <div className="flex items-center justify-center flex-col">
         <p className="text-white text-2xl md:text-5xl mb-3">Are you sure?</p>
         <p className="text-gray-100 md:text-lg mb-6 text-center">
            This action will delete the ticket
         </p>
         <div className="w-full flex gap-x-2">
            <button
               onClick={async _ => {
                  axios
                     .get(`/tickets/delete/${props.id}`, {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                     })
                     .then(response => {
                        console.log("deleted", response);
                        props.toggle();
                     })
                     .catch(e => {
                        console.log(e);
                        props.toggle();
                     });
               }}
               className="bg-red-500 py-2 flex-1 hover:bg-red-600 text-white text-xl font-medium"
            >
               Yes
            </button>
            <button
               onClick={props.toggle}
               className="bg-gray-500 py-2 hover:bg-gray-600 flex-1 text-white text-xl font-medium"
            >
               No
            </button>
         </div>
      </div>
   );
};
