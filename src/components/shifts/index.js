import React, { useContext } from "react";
import { Context } from "components/Store";

import GuardShifts from "components/guard/Shifts";
import ManagerShifts from "components/manager/Shifts";
import ClientShifts from "components/clients/Shifts";

export default _ => {
   const [state, dispatch] = useContext(Context);
   return state.user.type === "Guard" ? (
      <GuardShifts />
   ) : state.user.type === "Client" ? (
      <ClientShifts />
   ) : (
      <ManagerShifts />
   );
};
