import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import axios from "../../actions/axios";
import useModal from "hooks/useModal";

import Account from "./Account";
import DeleteUser from "components/modals/DeleteUser";
import AddUser from "components/modals/AddUser";
import EditUser from "components/modals/EditUser";

import adduser from "assets/icons/adduser.svg";

export default _ => {
   const [selected, setSelected] = useState(false);
   const [accounts, setAccounts] = useState([]);

   const [DeleteModal, showDeleteModal, toggleDelete] = useModal(DeleteUser);
   const [toDelete, setToDelete] = useState(null);

   const [AddModal, showAddModal, toggleAdd] = useModal(AddUser);

   const [EditModal, showEditModal, toggleEdit] = useModal(EditUser);

   useEffect(() => {
      axios
         .get("/admin/get-users", {
            "Content-Type": "application/json",
            Accept: "application/json"
         })
         .then(response => {
            setAccounts(response.data.data);
         })
         .catch(e => {
            console.log(e);
         });
   }, []);
   return (
      <>
         {showDeleteModal && (
            <DeleteModal
               toggle={toggleDelete}
               id={toDelete.id}
               name={toDelete.name}
            />
         )}
         {showAddModal && <AddModal toggle={toggleAdd} />}
         {showEditModal && <EditModal toggle={toggleEdit} />}
         <div className="flex gap-x-6 md:gap-x-12 text-white text-lg md:text-3xl font-medium">
            <button
               onClick={_ => setSelected(false)}
               className={`${
                  selected ? "" : "border-b-2 border-yellow-200"
               } focus:outline-none px-2 py-4 hover:text-yellow-100 focus:text-yellow-200`}
            >
               Guards
            </button>
            <button
               onClick={_ => setSelected(true)}
               className={`${
                  !selected ? "" : "border-b-2 border-yellow-200"
               } focus:outline-none px-2 py-4 hover:text-yellow-100 focus:text-yellow-200`}
            >
               Clients
            </button>
            <button
               className="flex items-center gap-x-4 md:text-xl focus:outline-none focus:text-yellow-200 hover:text-yellow-100"
               onClick={toggleAdd}
            >
               <SVG
                  src={adduser}
                  className="fill-current h-4 w-4 md:h-8 md:w-8"
               />
               Add
            </button>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-3 max-w-3xl gap-3 mt-16">
            {accounts
               .filter(a => a.type === (selected ? "Client" : "Guard"))
               .map(({ id, name, email }) => (
                  <Account
                     id={id}
                     name={name}
                     email={email}
                     toggleDelete={_ => {
                        setToDelete({ id: id, name: name });
                        toggleDelete();
                     }}
                     toggleEdit={_ => {
                        toggleEdit();
                     }}
                  />
               ))}
         </div>
      </>
   );
};
