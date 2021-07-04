import React from "react";
import SVG from "react-inlinesvg";

import ServiceCard from "./ServiceCard";

import condo from "assets/icons/condo.svg";
import construction from "assets/icons/construction.svg";
import industrial from "assets/icons/industrial.svg";
import parking from "assets/icons/parking.svg";
import mall from "assets/icons/mall.svg";
import dealership from "assets/icons/dealership.svg";
import shield from "assets/icons/shield.svg";

export default _ => {
   return (
      <div className="relative p-6 bg-gray-030">
         <SVG
            src={shield}
            className="absolute pointer-events-none hidden text-yellow-200 opacity-75 fill-current xl:block"
            style={{
               width: "72rem",
               height: "72rem",
               left: "-30%",
               top: "-10%"
            }}
         />
         <div className="mx-auto max-w-screen-2xl p-4">
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
   );
};
