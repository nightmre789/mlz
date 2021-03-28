import React, { useContext } from "react";
import { Context } from "components/Store";

import GuardReports from "components/guard/Reports";
import ManagerReports from "components/manager/Reports";

export default _ => {
   const [state, dispatch] = useContext(Context);
   return state.type === "Guard" ? <GuardReports /> : <ManagerReports />;
};
