import React, { useContext } from "react";
import { Context } from "components/Store";

import GuardShifts from "components/guard/Shifts";

export default _ => {
   const [state, dispatch] = useContext(Context);
   return state.user.type === "Guard" ? <GuardShifts /> : <div>test</div>;
};
