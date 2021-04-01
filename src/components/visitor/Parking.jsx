import React, {useState} from "react";
import axios from "../../actions/axios";

export default _ => {

   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [carModel, setCarModel] = useState('');
   const [location, setLocation] = useState('');
   const [license  , setLicense] = useState('');
   const [unit, setUnit] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

   const onSubmit = e => {
      addUser(e);
   };

   const addUser = async e => {
      e.preventDefault();
      await axios
         .post("/tickets", {
            email: email,
            name: name,
            model: carModel,
            license: license,
            phone: phoneNumber,
            location: location,
            unit: unit
         })
         .then(res => {
            console.log(res);
            alert('success');
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
            <form onSubmit={onSubmit} method="POST">
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
                     onChange={(e) => { setEmail(e.target.value) }}
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
                        onChange={(e) => { setName(e.target.value) }}
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
                        onChange={(e) => { setCarModel(e.target.value) }}
                     />
                  </div>
               </div>

               <div className="flex items-end mt-2">
                  <div className="w-1/2 mr-3">
                     <label className="block text-white" for="Location">
                        Location
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md font-lg focus:border-yellow-200 focus:outline-none focus:bg-gray-900"
                        type="text"
                        required=""
                        placeholder="Location"
                        aria-label="Location"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                     />
                  </div>
                  <div className="w-1/2">
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
                        onChange={(e) => { setLicense(e.target.value) }}
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
                        onChange={(e) => { setUnit(e.target.value) }}
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
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
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
