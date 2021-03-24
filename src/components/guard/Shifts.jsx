import React, { useMemo, useState } from "react";
import SVG from "react-inlinesvg";
import faker from "faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import ShiftsTable from "./ShiftsTable.jsx";
import ShiftsActive from "./ShiftsActive";

import search from "assets/icons/search.svg";

export default _ => {
   const [active, setActive] = useState(false);
   dayjs.extend(relativeTime);
   const columns = useMemo(
      _ => [
         {
            Header: "Date",
            accessor: "date"
         },
         {
            Header: "Site",
            accessor: "site"
         },

         {
            Header: "Start Time",
            accessor: "startTime"
         },
         {
            Header: "Duration",
            accessor: "duration"
         },
         {
            Header: "Arrive (opens 20 mins prior)",
            accessor: "arrive"
         }
      ],
      []
   );
   const arrival = ["Not Available", "Arrive on Site"];
   const data = [];
   for (let i = 0; i < 10; i++) {
      const date = dayjs(faker.date.recent());
      data.push({
         date: date.format("M-D-YY"),
         site: faker.address.streetAddress(),
         startTime: date.format("H:mm"),
         duration: date.fromNow(true),
         arrive: arrival[faker.random.number() % 2]
      });
   }

   return active ? (
      <ShiftsActive />
   ) : (
      <>
         <div className="relative my-4 md:mb-8 text-white">
            <SVG
               src={search}
               className="absolute top-0 ml-5 pointer-events-none fill-current"
               style={{ marginTop: "1.375rem" }}
            />
            <input
               type="search"
               className="w-full md:w-1/2 py-5 pl-16 pr-6 text-xl font-medium bg-gray-warm-800 focus:outline-none rounded-xl focus:ring-2 focus:bg-gray-900 focus:ring-white hover:bg-gray-700"
               placeholder="Search"
            />
         </div>
         <ShiftsTable
            columns={columns}
            data={data}
            setActive={_ => setActive(true)}
         />
      </>
   );
};
