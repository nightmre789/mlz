import React from "react";

import skyscraper from "assets/images/skyscraper.png";
import security from "assets/images/security.png";
import vest from "assets/images/vest.png";

export default _ => {
   return (
      <div
         className="absolute z-10 hidden gap-2 transform -rotate-45 md:flex sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
         style={{
            top: "calc(0% - 30vw)",
            right: "-45%",
            width: "90%"
         }}
      >
         <div className="flex flex-col w-1/2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
               <div className="self-end w-1/3">
                  <img
                     src={vest}
                     alt="landing"
                     style={{ borderRadius: "15%" }}
                  />
               </div>
               <div className="w-2/3">
                  <img
                     src={skyscraper}
                     alt="landing"
                     style={{ borderRadius: "15%" }}
                  />
               </div>
            </div>

            <img src={security} alt="landing" style={{ borderRadius: "15%" }} />
         </div>
         <img
            src="https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80"
            alt="landing"
            className="w-1/2"
            style={{ borderRadius: "15%" }}
         />
      </div>
   );
};
