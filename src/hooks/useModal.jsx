import React, { useState } from "react";

export default Element => {
   const [showModal, setShowModal] = useState(false);

   const toggle = _ => setShowModal(!showModal);

   const Modal = props => {
      return (
         <div className="flex bg-black justify-center items-center absolute top-0 left-0 w-screen h-screen bg-opacity-50">
            <button
               onClick={toggle}
               className="absolute top-0 right-0 px-4 py-2 hover:bg-red-700 text-xl mt-8 mr-8 text-center font-bold text-white bg-red-600"
            >
               X
            </button>
            <Element {...props} />
         </div>
      );
   };

   return [Modal, showModal, toggle];
};
