import React, { useState, useEffect } from "react";
import axios from "../../actions/axios";
import { Listbox, Transition } from "@headlessui/react";

export default _ => {
   const [locations, setLocations] = useState([]);
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [carModel, setCarModel] = useState("");
   const [location, setLocation] = useState("Pick a location");
   const [license, setLicense] = useState("");
   const [unit, setUnit] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   useEffect(_ => {
      axios
         .get("/locations", {
            "Content-Type": "application/json",
            Accept: "application/json"
         })
         .then(res => {
            setLocations(res.data.data);
         })
         .catch(err => {
            console.log("error: ", e);
         });
   }, []);

   const addTicket = async e => {
      e.preventDefault();
      await axios
         .post("/tickets", {
            email: email,
            name: name,
            model: carModel,
            license: license,
            phone: phoneNumber,
            location: locations.find(l => (l.name = "location")).id,
            unit: unit
         })
         .then(res => {
            console.log(res);
            alert("success");
         })
         .catch(err => {
            console.log(err);
            alert("Unexpected Error Occured While Submitting Parking Ticket");
         });
   };
   return (
      <div className="h-screen bg-gray-900">
         <h1 className="text-4xl font-semibold text-center text-yellow-200 md:text-6xl font-edmond">
            Parking Form
         </h1>
         <div className="px-4 pt-6 mx-auto leading-loose md:px-0 md:w-1/2">
            <form onSubmit={addTicket} method="POST">
               <div>
                  <label className="block text-white" for="email">
                     Email
                  </label>
                  <input
                     className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                     type="text"
                     required=""
                     placeholder="Your Email"
                     aria-label="Email"
                     value={email}
                     onChange={e => {
                        setEmail(e.target.value);
                     }}
                  />
               </div>
               <div className="flex items-end mt-2">
                  <div className="w-1/2 mr-3">
                     <label className="block text-white" for="name">
                        Name
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Full Name"
                        aria-label="Name"
                        value={name}
                        onChange={e => {
                           setName(e.target.value);
                        }}
                     />
                  </div>
                  <div className="w-1/2">
                     <label className="block text-white" for="model">
                        Car Model
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Model"
                        aria-label="Car Model"
                        value={carModel}
                        onChange={e => {
                           setCarModel(e.target.value);
                        }}
                     />
                  </div>
               </div>

               <div className="md:flex items-end mt-2">
                  <Listbox
                     as="div"
                     className="md:mr-3 md:w-1/2"
                     value={location}
                     onChange={setLocation}
                  >
                     {({ open }) => (
                        <>
                           <Listbox.Label className="block text-sm py-2 text-white">
                              Location
                           </Listbox.Label>
                           <div className="relative">
                              <span className="inline-block w-full rounded-md shadow-sm">
                                 <Listbox.Button className="relative w-full pl-3 pr-10 text-left text-white transition duration-150 ease-in-out bg-gray-800 border-2 border-gray-700 rounded-md cursor-default focus:outline-none focus:border-yellow-200">
                                    <span className="block truncate">
                                       {location}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                       <svg
                                          className="w-5 h-5 text-gray-400"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          stroke="currentColor"
                                       >
                                          <path
                                             d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                             strokeWidth="1.5"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </svg>
                                    </span>
                                 </Listbox.Button>
                              </span>

                              <Transition
                                 show={open}
                                 leave="transition ease-in duration-100"
                                 leaveFrom="opacity-100"
                                 leaveTo="opacity-0"
                                 className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
                              >
                                 <Listbox.Options
                                    static
                                    className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                                 >
                                    {locations.map(location => (
                                       <Listbox.Option
                                          key={location.id}
                                          value={location.address}
                                       >
                                          {({ selected, active }) => (
                                             <div
                                                className={`${
                                                   active
                                                      ? "text-white bg-yellow-400"
                                                      : "text-gray-900"
                                                } select-none relative py-2 pl-8 pr-4`}
                                             >
                                                <span
                                                   className={`${
                                                      selected
                                                         ? "font-semibold"
                                                         : "font-normal"
                                                   } block truncate`}
                                                >
                                                   {location.address}
                                                </span>
                                                {selected && (
                                                   <span
                                                      className={`${
                                                         active
                                                            ? "text-white"
                                                            : "text-yellow-400"
                                                      } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                   >
                                                      <svg
                                                         className="w-5 h-5"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                      >
                                                         <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                         />
                                                      </svg>
                                                   </span>
                                                )}
                                             </div>
                                          )}
                                       </Listbox.Option>
                                    ))}
                                 </Listbox.Options>
                              </Transition>
                           </div>
                        </>
                     )}
                  </Listbox>

                  <div className="md:w-1/2">
                     <label className="block text-white" for="License Plate">
                        License Plate
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your License Plate"
                        aria-label="License Plate Number"
                        value={license}
                        onChange={e => {
                           setLicense(e.target.value);
                        }}
                     />
                  </div>
               </div>

               <div className="flex items-end mt-2">
                  <div className="w-1/2 mr-3">
                     <label className="block text-white" for="unit">
                        Unit # (optional)
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Unit Number"
                        aria-label="unit"
                        value={unit}
                        onChange={e => {
                           setUnit(e.target.value);
                        }}
                     />
                  </div>
                  <div className="w-1/2">
                     <label className="block text-white" for="Phone number">
                        Phone Number
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Your Phone"
                        aria-label="Phone Number"
                        value={phoneNumber}
                        onChange={e => {
                           setPhoneNumber(e.target.value);
                        }}
                     />
                  </div>
               </div>
               <button
                  className="w-full px-4 py-2 mt-4 text-xl font-medium tracking-wider text-gray-800 transition duration-200 bg-yellow-200 border-2 border-yellow-200 rounded-md focus:outline-none hover:bg-gray-800 hover:text-yellow-200 focus:bg-gray-800 focus:text-yellow-200"
                  type="submit"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};
