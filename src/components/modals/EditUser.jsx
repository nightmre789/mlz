import React, { useState } from "react";
import axios from "../../actions/axios";

export default props => {
   const [email, setEmail] = useState(props.email);
   const [name, setName] = useState(props.name);
   const [password, setPassword] = useState("");
   const [type, setType] = useState(props.type);

   const onSubmit = e => {
      console.log(e);
   };

   return (
      <div className="flex items-center justify-center flex-col w-full px-6 md:px-0 md:w-auto">
         <p className="text-white text-2xl md:text-5xl mb-8">{`Edit user ${props.name}`}</p>

         <div className="leading-loose w-full">
            <form onSubmit={onSubmit} method="POST">
               <div className="mb-2 w-full text-white">
                  <label className="block" for="type">
                     Type
                  </label>
                  <div className="flex gap-x-2">
                     <div
                        onClick={e => setType("Guard")}
                        className={`${
                           type === "Client"
                              ? ""
                              : "border-b-2 border-yellow-200"
                        } focus:outline-none text-center cursor-pointer flex-1 hover:text-yellow-100 focus:text-yellow-200`}
                     >
                        Guard
                     </div>
                     <div
                        onClick={e => setType("Client")}
                        className={`${
                           type === "Guard"
                              ? ""
                              : "border-b-2 border-yellow-200"
                        } focus:outline-none flex-1 text-center cursor-pointer hover:text-yellow-100 focus:text-yellow-200`}
                     >
                        Client
                     </div>
                  </div>
               </div>
               <div className="mb-2">
                  <label className="block text-white" for="email">
                     Email
                  </label>
                  <input
                     className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                     type="text"
                     required=""
                     placeholder={`New Email`}
                     aria-label="Email"
                     value={email}
                     onChange={e => {
                        setEmail(e.target.value);
                     }}
                  />
               </div>
               <div className="mb-2">
                  <label className="block text-white" for="name">
                     Full Name
                  </label>
                  <input
                     className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                     type="text"
                     required=""
                     placeholder={`New Full Name`}
                     aria-label="Full Name"
                     value={name}
                     onChange={e => {
                        setName(e.target.value);
                     }}
                  />
               </div>
               <div className="mb-2">
                  <label className="block text-white" for="password">
                     Password
                  </label>
                  <input
                     className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                     type="text"
                     required=""
                     placeholder={`Enter new password`}
                     aria-label="Password"
                     value={password}
                     onChange={e => {
                        setPassword(e.target.value);
                     }}
                  />
               </div>

               <button
                  className="w-full px-4 py-2 mt-4 text-xl font-medium tracking-wider text-gray-800 transition duration-200 bg-yellow-200 border-2 border-yellow-200 rounded-md focus:outline-none hover:bg-gray-800 hover:text-yellow-200 focus:bg-gray-800 focus:text-yellow-200"
                  type="submit"
               >
                  {`Add ${type}`}
               </button>
            </form>
         </div>
      </div>
   );
};
