import React, { useContext, useState, useEffect } from "react";
import axios from "../../actions/axios";
import useModal from "hooks/useModal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import DeleteTicket from "components/modals/DeleteTicket";
import Ticket from "./Ticket";

import { Context } from "components/Store";

export default _ => {
   const [state, dispatch] = useContext(Context);
   const [tickets, setTickets] = useState([]);

   const [DeleteModal, showDeleteModal, toggleDelete] = useModal(DeleteTicket);
   const [toDelete, setToDelete] = useState(null);

   useEffect(() => {
      axios
         .get("/tickets", {
            "Content-Type": "application/json",
            Accept: "application/json"
         })
         .then(response => {
            console.log(response.data.data);
            setTickets(response.data.data);
         })
         .catch(e => {
            console.log(e);
         });
   }, []);

   dayjs.extend(relativeTime);

   // const models = ["Civic 2016", "Corolla 2019", "Camry 2020", "Prius 2010"];
   // const data = [];
   // for (let i = 0; i < 10; i++) {
   //    const date = dayjs(faker.date.recent());
   //    let row = {
   //       id: faker.datatype.number(),
   //       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
   //       model: models[faker.datatype.number() % 4],
   //       licensePlate: faker.datatype.number(),
   //       location: faker.address.streetAddress(),
   //       expiry: date.fromNow(true)
   //    };
   //    if (state.user.type === "Manager") row.delete = "Delete";
   //    data.push(row);
   // }

   return (
      <>
         {showDeleteModal && (
            <DeleteModal toggle={toggleDelete} id={toDelete.id} />
         )}

         <div className="grid grid-cols-2 lg:grid-cols-3 max-w-3xl gap-3 mt-16">
            {tickets.map(t => (
               <Ticket
                  id={t.id}
                  name={t.name}
                  model={t.model}
                  plate={t.license}
                  address={t.location.address}
                  expiry={dayjs(t.created_at).fromNow()}
                  toggleDelete={_ => {
                     setToDelete({ id: t.id });
                     toggleDelete();
                  }}
               />
            ))}
         </div>
      </>
   );
};
