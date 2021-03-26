import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SVG from "react-inlinesvg";

import Dashboard from "./guard/Dashboard";
import Reports from "./reports";
import GuardShifts from "./guard/Shifts";
import Parking from "./parking";
import Accounts from "./manager/Accounts";

import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

import dashboard from "assets/icons/dashboard.svg";
import shifts from "assets/icons/shifts.svg";
import parkingIcon from "assets/icons/parking.svg";
import reports from "assets/icons/reports.svg";
import door from "assets/icons/door.svg";
import users from "assets/icons/users.svg";

export default ({ state }) => {
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
         else if (state.user.type === "Manager")
            items.unshift({
               label: "Accounts",
               to: "/",
               src: users,
               active: true
            });
         setNavItems(items);
      },
      [state]
   );
   return (
      <div className="md:flex h-screen overflow-y-hidden bg-gray-900">
         <nav className="flex-col items-center hidden my-10 xl:w-1/6 md:flex">
            <h1 className="mb-12 text-5xl text-white font-libre">
               {state.user.type}
            </h1>
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
            <button className="flex items-center px-10 py-4 justify-center text-2xl font-medium text-white bg-blue-500 gap-x-4 rounded-lg focus:outline-none hover:bg-blue-600 focus:bg-blue-700 ">
               <SVG src={door} className="fill-current" />
               Sign Out
            </button>
         </nav>
         <div className="flex-1 h-full overflow-x-hidden px-4 pt-4 md:pt-10 overflow-y-auto md:px-14">
            <MobileNav />
            <Routes>
               <Route
                  path="/"
                  element={
                     state.user.type === "Guard" ? <Dashboard /> : <Accounts />
                  }
               />
               <Route path="reports/*" element={<Reports />} />
               <Route
                  path="shifts/*"
                  element={
                     state.user.type === "Guard" ? (
                        <GuardShifts />
                     ) : (
                        <div>test</div>
                     )
                  }
               />
               <Route path="parking" element={<Parking />} />
            </Routes>
         </div>
      </div>
   );
};
