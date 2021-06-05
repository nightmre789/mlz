import React from "react";
import { useTable, useSortBy } from "react-table";

export default ({ columns, data, toggleDelete }) => {
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
   } = useTable(
      {
         columns,
         data
      },
      useSortBy
   );

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
                              <th
                                 {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                 )}
                              >
                                 {column.render("Header")}
                                 {/* Add a sort direction indicator */}
                                 <span>
                                    {column.isSorted
                                       ? column.isSortedDesc
                                          ? " 🔽"
                                          : " 🔼"
                                       : ""}
                                 </span>
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
                                 {cell.value === "Delete" ? (
                                    <button
                                       className="w-full md:w-2/3 py-2 text-lg font-medium text-center rounded-full text-red-100 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-white focus:outline-none focus:bg-red-700"
                                       onClick={_ => {
                                          console.log(row);
                                       }}
                                    >
                                       Delete
                                    </button>
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
