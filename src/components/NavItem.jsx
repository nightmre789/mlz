import React from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export default props => {
   return (
      <Link
         to={props.to}
         className={`${
            props.active ? "border-blue-500" : "border-gray-900"
         } flex items-center w-full py-4 text-2xl tracking-wider border-l-4 font-medium focus:outline-none focus:ring-4`}
      >
         <SVG src={props.src} className="w-12 h-12 mr-10 fill-current ml-14" />
         <div className="flex-1 text-left">{props.label}</div>
      </Link>
   );
};
