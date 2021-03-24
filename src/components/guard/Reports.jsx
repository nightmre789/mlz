import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import faker from "faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Routes, Route } from "react-router-dom";

import ReportsTable from "components/reports/ReportsTable";
import Report from "components/report";

import search from "assets/icons/search.svg";

export default _ => {
   dayjs.extend(relativeTime);
   const columns = useMemo(
      _ => [
         {
            Header: "Location",
            accessor: "location"
         },
         {
            Header: "Date",
            accessor: "date"
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
            Header: "Status",
            accessor: "status"
         },
         {
            Header: "Report",
            accessor: "report"
         }
      ],
      []
   );
   const statuses = ["Active", "Pending review", "Complete"];
   const reports = ["Not Available", "View"];
   const data = [];
   for (let i = 0; i < 10; i++) {
      const date = dayjs(faker.date.recent());
      data.push({
         location: faker.address.streetAddress(),
         date: date.format("M-D-YY"),
         duration: date.fromNow(true),
         startTime: date.format("H:mm"),
         status: statuses[faker.random.number() % 3],
         report: reports[faker.random.number() % 2]
      });
   }

   return (
      <Routes>
         <Route
            path="/"
            element={
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
                  <ReportsTable columns={columns} data={data} />
               </>
            }
         />
         <Route path=":id" element={<Report guard />} />
      </Routes>
   );
};
