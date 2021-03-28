import React, { useContext } from "react";
import SVG from "react-inlinesvg";
import { Context } from "components/Store";
import { useNavigate } from "react-router-dom";

import logo from "assets/icons/logo.svg";

export default _ => {
   let navigate = useNavigate();
   const [_, dispatch] = useContext(Context);
   return (
      <div class=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div class="max-w-md w-full space-y-8">
            <div className="flex flex-col items-center">
               <SVG src={logo} className="w-16 h-16" />
               <h2 class="mt-6 text-3xl font-bold text-yellow-400">
                  Sign in to your account
               </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
               <input type="hidden" name="remember" value="true" />
               <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                     <label for="username" class="sr-only">
                        Username
                     </label>
                     <input
                        id="username"
                        name="username"
                        type="username"
                        autocomplete="username"
                        required
                        class="appearance-none rounded-none relative block w-full p-3 border border-yellow-300 placeholder-gray-300 bg-gray-800 text-white rounded-t-md focus:outline-none focus:border-yellow-400 focus:bg-gray-900 hover:bg-gray-900 focus:z-10 sm:text-sm"
                        placeholder="Username"
                     />
                  </div>
                  <div>
                     <label for="password" class="sr-only">
                        Password
                     </label>
                     <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        class="appearance-none rounded-none relative block w-full p-3 border border-yellow-300 placeholder-gray-300 bg-gray-800 text-white rounded-b-md focus:outline-none focus:border-yellow-400 focus:bg-gray-900 hover:bg-gray-900 focus:z-10 sm:text-sm"
                        placeholder="Password"
                     />
                  </div>
               </div>
               <div>
                  <button
                     type="submit"
                     onClick={e => {
                        e.preventDefault();
                        dispatch({ type: "SET_TYPE", payload: "Guard" });
                        navigate("/");
                     }}
                     class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                  >
                     <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                           class="h-5 w-5 text-yellow-400 group-hover:text-yellow-300"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </span>
                     Sign in
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};
