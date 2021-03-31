import React from "react";

import SVG from "react-inlinesvg";

export default ({ src, title, text }) => {
   return (
      <div className="flex flex-col items-center p-4 text-center text-gray-800 duration-100 transform rounded-lg cursor-default hover:shadow-lg hover:bg-white hover:bg-opacity-80">
         <div className="flex items-center mt-4">
            <SVG
               src={src}
               className="flex items-center mr-4 transform scale-150 fill-current justfiy-center"
            />
            <h1 className="mt-1 text-3xl font-bold font-edmond">{title}</h1>
         </div>

         <p className="mt-8 mb-4 font-medium">{text}</p>
      </div>
   );
};
