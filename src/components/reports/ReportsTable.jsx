import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

import StatusIndicator from "components/StatusIndicator";

export default ({ columns, data }) => {
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
   } = useTable({
      columns,
      data
   });

   return (
      <div className="overflow-x-auto">
         <table
            {...getTableProps()}
            className="w-full text-white border-separate"
            style={{ borderSpacing: "0 15px" }}
         >
            <thead className="text-lg text-left">
               {
                  // Loop over the header rows
                  headerGroups.map(headerGroup => (
                     // Apply the header row props
                     <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                           // Loop over the headers in each row
                           headerGroup.headers.map(column => (
                              // Apply the header cell props
                              <th {...column.getHeaderProps()}>
                                 {
                                    // Render the header
                                    column.render("Header")
                                 }
                              </th>
                           ))
                        }
                     </tr>
                  ))
               }
            </thead>
            <tbody {...getTableBodyProps()} className="font-medium">
               {rows.map(row => {
                  prepareRow(row);
                  return (
                     <tr
                        {...row.getRowProps()}
                        className="transition duration-75 ease-out transform cursor-default bg-gray-warm-800 hover:bg-gray-warm-900 hover:shadow-inner"
                     >
                        {row.cells.map((cell, i) => {
                           return (
                              <td
                                 {...cell.getCellProps()}
                                 className={`px-3 py-5 border-t-2 border-gray-warm-700 ${
                                    !i
                                       ? "rounded-l-md"
                                       : i === row.cells.length - 1
                                       ? "rounded-r-md"
                                       : ""
                                 }`}
                              >
                                 {cell.value === "View" ? (
                                    <Link to="2">
                                       <div className="w-full py-2 text-lg font-medium text-center rounded-full md:w-2/3 text-gray-warm-100 bg-gray-warm-500 hover:bg-gray-warm-600 focus:ring-2 focus:ring-white focus:outline-none focus:bg-gray-warm-700">
                                          View
                                       </div>
                                    </Link>
                                 ) : cell.column.Header === "Status" ? (
                                    <StatusIndicator
                                       status={cell.value}
                                       color={
                                          cell.value === "Complete"
                                             ? "green"
                                             : cell.value === "Active"
                                             ? "blue"
                                             : "yellow"
                                       }
                                    />
                                 ) : (
                                    cell.value
                                 )}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};
