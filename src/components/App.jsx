import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Store";

import Visitor from "./visitor";
import System from "./System";

export default _ => {
   const [state, dispatch] = useContext(Context);

   useEffect(_ => {
      console.log(state.user.type);
   }, []);
   return state.user.type === "Loading" ? (
      "Loading..."
   ) : state.user.type === "Visitor" ? (
      <Visitor />
   ) : (
      <System />
   );
};
