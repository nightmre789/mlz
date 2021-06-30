import React from "react";

import fleet1 from "assets/images/fleet1_r.jpg";
import fleet2 from "assets/images/fleet2_r.jpg";
import fleet3 from "assets/images/fleet3_r.jpg";
import fleet4 from "assets/images/fleet4.jpg";

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
                     src={fleet3}
                     alt="landing"
                     style={{ borderRadius: "15%" }}
                  />
               </div>
               <div className="w-2/3">
                  <img
                     src={fleet1}
                     alt="landing"
                     style={{ borderRadius: "15%" }}
                  />
               </div>
            </div>

            <img src={fleet2} alt="landing" style={{ borderRadius: "15%" }} />
         </div>
      </div>
   );
};
