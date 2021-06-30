import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SVG from "react-inlinesvg";

import Landing from "./Landing";
import Recruitment from "./Recruitment";
import Parking from "./Parking";
import Login from "./Login";
import Services from "./Services";
import MobileNav from "components/MobileNav";

import logo from "assets/icons/logo.svg";

import arrow from "assets/icons/arrow.svg";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default _ => {
   return (
      <div className="relative min-h-screen overflow-hidden bg-gray-900">
         <nav className="hidden p-4 bg-gray-900 md:block ">
            <div className="relative items-center hidden mx-auto text-lg font-semibold text-white md:flex max-w-screen-2xl 2xl:p-4 gap-x-8 ">
               <SVG src={logo} className="w-16 h-16 mr-4" />
               <Link to="/" className="hover:text-yellow-200">
                  Home
               </Link>
               <Link to="recruitment" className="hover:text-yellow-200">
                  Recruitment
               </Link>
               <Link to="parking" className="hover:text-yellow-200">
                  Parking Ticket
               </Link>
               <Link to="services" className="hover:text-yellow-200">
                  Services
               </Link>
               <Link
                  to="login"
                  className="z-20 items-center hidden px-8 py-2 text-2xl font-medium text-gray-800 transition duration-150 transform bg-white bg-opacity-50 border border-yellow-500 rounded-sm shadow-xl sm:flex md:absolute md:right-0 md:mr-20 md:px-16 md:py-3 hover:bg-opacity-80 md:border-gray-200 gap-x-2 group hover:-translate-y-1"
               >
                  <p className="mb-0.5">Sign in</p>
                  <SVG
                     src={arrow}
                     className="transition duration-150 transform group-hover:translate-x-6"
                  />
               </Link>
            </div>
         </nav>
         <MobileNav />
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="parking" element={<Parking />} />
            <Route path="services" element={<Services />} />
            <Route path="login" element={<Login />} />
         </Routes>
      </div>
   );
};
