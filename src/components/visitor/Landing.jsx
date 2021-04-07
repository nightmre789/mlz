import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import SVG from "react-inlinesvg";
import Slider from "react-slick";

import LandingGallery from "./LandingGallery";
import ServiceCard from "./ServiceCard";

import condo from "assets/icons/condo.svg";
import construction from "assets/icons/construction.svg";
import industrial from "assets/icons/industrial.svg";
import parking from "assets/icons/parking.svg";
import mall from "assets/icons/mall.svg";
import dealership from "assets/icons/dealership.svg";
import shield from "assets/icons/shield.svg";
import quote from "assets/icons/quote.svg";

import fleet1 from "assets/images/fleet1.jpg";
import fleet2 from "assets/images/fleet2.jpg";
import fleet3 from "assets/images/fleet3.jpg";
import fleet4 from "assets/images/fleet4.jpg";
import fleet5 from "assets/images/fleet5.jpg";
import fleet6 from "assets/images/fleet6.jpg";

const services = [
   "Condominium Security",
   "Construction Security",
   "Commercial/Industrial Security",
   "Parking Patrol",
   "Mall/Plaza Security",
   "Dealership",
   "Other"
];

export default _ => {
   const [selectedService, setSelectedService] = useState(services[0]);
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
   };
   return (
      <>
         <LandingGallery />
         <div className="bg-gray-900 bg-opacity-0 md:p-6 md:bg-opacity-100">
            <Slider {...settings} className="md:hidden">
               <img src={fleet1} />
               <img src={fleet2} />
               <img src={fleet4} />
               <img src={fleet6} />
            </Slider>
            <div className="hidden mx-auto md:block max-w-screen-2xl 2xl:p-4">
               <h1 className="relative z-10 text-6xl font-semibold text-center md:text-left md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-gray-50 font-edmond">
                  Get <span className="text-yellow-200">Secured</span>
                  <br />
                  with our team!
               </h1>
               <div className="w-full p-6 my-16 leading-loose bg-gray-800 rounded-lg md:w-2/3 xl:w-1/2">
                  <div className="flex gap-x-4">
                     <SVG
                        src={quote}
                        className="w-8 h-8 mt-1 text-white fill-current"
                     />
                     <h1 className="mt-1 mb-4 text-xl font-bold text-white lg:text-3xl font-edmond ">
                        Request a free quote
                     </h1>
                  </div>

                  <form>
                     <label className="block text-sm text-white" for="email">
                        Email
                     </label>
                     <input
                        className="w-full px-5 py-1 text-white bg-gray-700 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-800"
                        type="text"
                        required=""
                        placeholder="Your Email"
                        aria-label="Email"
                     />

                     <div className="flex items-end mt-2 gap-x-3">
                        <div className="w-1/2">
                           <label
                              className="block text-sm text-white"
                              for="name"
                           >
                              Name
                           </label>
                           <input
                              className="w-full px-5 py-1 text-white bg-gray-700 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-800"
                              type="text"
                              required=""
                              placeholder="Your Full Name"
                              aria-label="Name"
                           />
                        </div>
                        <div className="w-1/2">
                           <label
                              className="block text-sm text-white"
                              for="business"
                           >
                              Business / Organization
                           </label>
                           <input
                              className="w-full px-5 py-1 text-white bg-gray-700 border-2 border-gray-700 rounded-md focus:border-yellow-200 focus:outline-none focus:bg-gray-800"
                              type="text"
                              required=""
                              placeholder="Your Business Name"
                              aria-label="Business Name"
                           />
                        </div>
                     </div>

                     <div className="flex mt-2 gap-x-3">
                        <Listbox
                           as="div"
                           className="w-1/2 space-y-1"
                           value={selectedService}
                           onChange={setSelectedService}
                        >
                           {({ open }) => (
                              <>
                                 <Listbox.Label className="block text-sm text-white">
                                    Service type
                                 </Listbox.Label>
                                 <div className="relative">
                                    <span className="inline-block w-full rounded-md shadow-sm">
                                       <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left text-white transition duration-150 ease-in-out bg-gray-700 border-2 border-gray-700 rounded-md cursor-default focus:outline-none focus:border-yellow-200">
                                          <span className="block truncate">
                                             {selectedService}
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
                                          {services.map(person => (
                                             <Listbox.Option
                                                key={person}
                                                value={person}
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
                                                         {person}
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
                        <button
                           className="w-1/2 px-4 py-1 mt-4 text-lg font-medium tracking-wider text-gray-800 transition duration-200 bg-yellow-200 border-2 border-yellow-200 rounded-md focus:outline-none hover:bg-gray-800 hover:text-yellow-200 focus:bg-gray-700 focus:text-yellow-200"
                           type="submit"
                        >
                           Get Quote
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="relative p-6 bg-gray-030 ">
            <SVG
               src={shield}
               className="absolute hidden text-yellow-200 opacity-75 fill-current xl:block"
               style={{
                  width: "72rem",
                  height: "72rem",
                  left: "-30%",
                  top: "-10%"
               }}
            />
            <div className="mx-auto mb-24 2xl:mx-0 2xl:mr-24 max-w-screen-2xl 2xl:p-4">
               <h1 className="my-4 text-5xl font-semibold tracking-wide text-center md:mb-8 font-edmond md:text-7xl">
                  Our Services
               </h1>
               <div className="grid gap-x-4 md:gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                  <ServiceCard
                     src={condo}
                     title="Condominium Security"
                     text="Our concierges are highly professional, reliable, and dependable in
                  providing a high degree of security and customer service to ensure
                  the safety of condominium residents, visitors, and staff. They are
                  trained to provide exceptional customer service."
                  />
                  <ServiceCard
                     src={construction}
                     title="Construction Security"
                     text="Our construction site security personnel offer superior access control to sites while ensuring the deterrence of threats, thefts, and vandalism. The continuous patrolling of the properties eliminates potential threats against the property."
                  />
                  <ServiceCard
                     src={industrial}
                     title="Commercial / Industrial Security"
                     text="MLZ Security provides the utmost in dependability and believes in providing the best security services for your commercial and/or industrial properties. For commercial and industrial properties, we offer a vast range of security services such as access control and rapid response to any leaks, fire, theft, vandalism, and other potential hazards."
                  />
                  <ServiceCard
                     src={parking}
                     title="Parking and Mobile Patrol"
                     text="Our highly trained Mobile Patrol Supervisors will immediately come to your site in marked security vehicles. Our key to success is our constant mobility in providing additional support to our field staff in the event of an emergency."
                  />
                  <ServiceCard
                     src={mall}
                     title="Mall / Plaza Security"
                     text="In addition to reducing the threat of shoplifting, vandalism, dumping, trespassing, and illegal parking, MLZ Security secures the premises for shoppers to shop freely without the concern of their safety. Our highly trained guards are motivated and well trained to provide the best customer service and in-class security on and off the premises."
                  />
                  <ServiceCard
                     src={dealership}
                     title="Dealership"
                     text="As the upward trend increases in auto theft, car dealerships are getting hit more frequently for auto theft, car rims/ accessories theft, and vandalism, to the vehicles and the property. To prevent future conflicts related to auto crimes, at MLZ Security, our team develops a plan that maximizes security at auto malls/ car dealerships while minimizing the cost for the client."
                  />
               </div>
            </div>
         </div>
         <div className="relative z-10 p-6 bg-gray-900">
            <div className="mx-auto max-w-screen-2xl 2xl:p-4">
               <h1 className="my-4 text-yellow-200 text-4xl font-semibold tracking-wide font-edmond md:text-6xl">
                  About Us
               </h1>
               <p className="text-xl text-white font-medium">
                  With a continuous and rapid increase to the crimes rates in
                  Ontario, MLZ Security Services was founded to offer private
                  and corporate security services at competitive rates. The
                  services that we provide are, but are not limited to,
                  condominium security and concierge services, construction site
                  security, commercial and industrial security, and fire watch.
                  MLZ Security Services is based in Brampton, Ontario, however,
                  we provide security services all throughout the Greater
                  Toronto Area (GTA). At MLZ Security Services, we pride
                  ourselves on having and maintaining a professional and
                  tactical image. From our fleet to our security staff, it is
                  all put through a critical process to ensure that we only
                  offer the best of services. Our security guards are selected
                  through a vigorous process, and are equipped and trained with
                  state-of-the-art technology to make sure that our clients’
                  assets are secured and protected. At MLZ Security Services,
                  our staff works 24 hours a day, 7 days a week to meet and
                  exceed our clients’ needs.
               </p>
               <h1 className="my-4 text-yellow-200 text-4xl font-semibold tracking-wide font-edmond md:text-6xl text-right">
                  Our Mission
               </h1>
               <p className="text-xl text-white text-right font-medium">
                  Our mission here at MLZ Security Services is to provide our
                  clients with the best security services while also saving them
                  money. We are committed to providing honest work in a cost
                  efficient manner while offering more then just regular
                  patrols.
               </p>

               <div className="text-white md:flex mt-24">
                  <h1 className="text-lg flex items-end font-medium md:text-xl">
                     Copyright © 2021 MLZ Security Services
                  </h1>
                  <div className="flex-1 mt-2 text-lg font-medium md:mt-0 md:text-xl md:text-right">
                     <h1 className="my-4 text-yellow-200 text-3xl font-semibold tracking-wide font-edmond md:text-4xl text-right">
                        Contact Us
                     </h1>
                     <h1>12-247 Queen St E, Brampton, ON L6W 2B5</h1>
                     <h1>647 482 0659</h1>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
