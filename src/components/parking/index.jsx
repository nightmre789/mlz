import React, { useContext, useMemo } from "react";
import faker from "faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Context } from "components/Store";

import ParkingTable from "./ParkingTable";

export default _ => {
   const [state, dispatch] = useContext(Context);
   dayjs.extend(relativeTime);
   const columns = useMemo(_ => {
      let cols = [
         {
            Header: "Name",
            accessor: "name"
         },
         {
            Header: "Model",
            accessor: "model" // accessor is the "key" in the data
         },
         {
            Header: "License Plate",
            accessor: "licensePlate"
         },
         {
            Header: "Location",
            accessor: "location"
         },
         {
            Header: "Expiry",
            accessor: "expiry"
         }
      ];
      if (state.user.type === "Manager")
         cols.push({
            Header: "Delete",
            accessor: "delete"
         });
      return cols;
   }, []);
   const models = ["Civic 2016", "Corolla 2019", "Camry 2020", "Prius 2010"];
   const data = [];
   for (let i = 0; i < 10; i++) {
      const date = dayjs(faker.date.recent());
      let row = {
         id: faker.random.number(),
         name: `${faker.name.firstName()} ${faker.name.lastName()}`,
         model: models[faker.random.number() % 4],
         licensePlate: faker.random.number(),
         location: faker.address.streetAddress(),
         expiry: date.fromNow(true)
      };
      if (state.user.type === "Manager") row.delete = "Delete";
      data.push(row);
   }

   return <ParkingTable columns={columns} data={data} />;
};
