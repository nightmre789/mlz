import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SVG from "react-inlinesvg";

import Dashboard from "./Dashboard";
import Reports from "./Reports";
import GuardReports from "./guard/Reports";
import GuardShifts from "./guard/Shifts";

import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

import dashboard from "../assets/icons/dashboard.svg";
import shifts from "../assets/icons/shifts.svg";
import parking from "../assets/icons/parking.svg";
import reports from "../assets/icons/reports.svg";

export default _ => {
   return (
      <div className="md:flex h-screen overflow-y-hidden bg-gray-900">
         <nav className="flex-col items-center hidden my-10 xl:w-1/6 md:flex">
            <h1 className="mb-12 text-5xl text-white font-libre">Guard</h1>
            <div className="flex flex-col flex-1 w-full mt-10 gap-y-4 text-gray-warm-050 ">
               <NavItem active src={dashboard} to="/" label="Dashboard" />
               <NavItem src={shifts} to="shifts" label="Shifts" />
               <NavItem src={reports} to="reports" label="Reports" />
               <NavItem src={parking} to="parking" label="Parking" />
               <NavItem src={reports} to="guardreports" label="Guard Reports" />
               <NavItem src={shifts} to="guardshifts" label="Guard Shifts" />
            </div>
            <button className="w-11/12 py-5 mx-auto text-2xl font-medium text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600 focus:bg-blue-700 ">
               Sign Out
            </button>
         </nav>
         <div className="flex-1 h-full overflow-x-hidden px-4 pt-4 md:pt-10 overflow-y-auto md:px-14">
            <MobileNav />
            <Routes>
               <Route path="reports/*" element={<Reports />} />
               <Route path="guardreports/*" element={<GuardReports />} />
               <Route path="guardshifts" element={<GuardShifts />} />
            </Routes>
         </div>
      </div>
   );
};
