import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "./Store";

import Dashboard from "./guard/Dashboard";
import Reports from "./reports";
import Shifts from "./Shifts";
import Parking from "./parking";

import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parkingIcon from "assets/icons/parking.svg";
import reports from "assets/icons/reports.svg";

export default _ => {
   const [state, dispatch] = useContext(Context);
   const [navItems, setNavItems] = useState([]);
   const [activePage, setActivePage] = useState(0);
   useEffect(
      _ => {
         let items = [
            { label: "Shifts", to: "shifts", src: shifts, active: false },
            { label: "Reports", to: "reports", src: reports, active: false },
            { label: "Parking", to: "parking", src: parkingIcon, active: false }
         ];
         if (state.user.type === "Guard")
            items.unshift({
               label: "Dashboard",
               to: "/",
               src: dashboard,
               active: true
            });
         console.log(items);
         setNavItems(items);
      },
      [state]
   );
   return (
      <div className="md:flex h-screen overflow-y-hidden bg-gray-900">
         <nav className="flex-col items-center hidden my-10 xl:w-1/6 md:flex">
            <h1 className="mb-12 text-5xl text-white font-libre">Guard</h1>
            <div className="flex flex-col flex-1 w-full mt-10 gap-y-4 text-gray-warm-050 ">
               {navItems.map(({ label, to, src, active }, i) => (
                  <NavItem
                     active={activePage === i}
                     src={src}
                     to={to}
                     label={label}
                     key={i}
                     onClick={_ => setActivePage(i)}
                  />
               ))}
            </div>
            <button className="w-11/12 py-5 mx-auto text-2xl font-medium text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600 focus:bg-blue-700 ">
               Sign Out
            </button>
         </nav>
         <div className="flex-1 h-full overflow-x-hidden px-4 pt-4 md:pt-10 overflow-y-auto md:px-14">
            <MobileNav />
            <Routes>
               <Route path="dashboard" element={<Dashboard />} />
               <Route path="reports/*" element={<Reports />} />
               <Route path="shifts/*" element={<Shifts />} />
               <Route path="parking" element={<Parking />} />
            </Routes>
         </div>
      </div>
   );
};
