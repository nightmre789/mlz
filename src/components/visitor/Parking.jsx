import React from "react";

export default _ => {
   return (
      <div className="h-screen bg-gray-900">
         <h1 className="text-6xl font-semibold text-center text-yellow-200 font-edmond">
            Parking Form
         </h1>
         <div className="w-1/2 pt-6 mx-auto leading-loose">
            <form className="">
               <div>
                  <label className="block text-white" for="email">
                     Email
                  </label>
                  <input
                     className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                     type="text"
                     required=""
                     placeholder="Your Email"
                     aria-label="Email"
                  />
               </div>
               <div className="flex items-end mt-2 gap-x-3">
                  <div className="w-1/2">
                     <label className="block text-white" for="name">
                        Name
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Full Name"
                        aria-label="Name"
                     />
                  </div>
                  <div className="w-1/2">
                     <label className="block text-white" for="model">
                        Car Model
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Model"
                        aria-label="Car Model"
                     />
                  </div>
               </div>

               <div className="flex items-end mt-2 gap-x-3">
                  <div className="w-1/2">
                     <label className="block text-white" for="Location">
                        Location
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Location"
                        aria-label="Location"
                     />
                  </div>
                  <div className="w-1/2">
                     <label className="block text-white" for="License Plate">
                        License Plate
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your License Plate"
                        aria-label="License Plate Number"
                     />
                  </div>
               </div>

               <div className="flex items-end mt-2 gap-x-3">
                  <div className="w-1/2">
                     <label className="block text-white" for="unit">
                        Unit # (optional)
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Unit Number"
                        aria-label="unit"
                     />
                  </div>
                  <div className="w-1/2">
                     <label className="block text-white" for="Phone number">
                        Phone Number
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Phone"
                        aria-label="Phone Number"
                     />
                  </div>
               </div>
               <button
                  className="w-full px-4 py-2 mt-4 text-xl font-medium tracking-wider text-gray-800 transition duration-200 bg-yellow-200 border-2 border-yellow-200 rounded-md focus:outline-none hover:bg-gray-800 hover:text-yellow-200 focus:bg-gray-800 focus:text-yellow-200"
                  type="submit"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};
