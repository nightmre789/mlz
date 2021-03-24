import React from "react";
import SVG from "react-inlinesvg";

import TimelineItem from "./TimelineItem";
import StatusIndicator from "components/StatusIndicator";

import check from "assets/icons/check.svg";

export default ({ guard }) => {
   return (
      <>
         <div className="gap-4 flex flex-col lg:flex-row mt-2 mb-8 items-center">
            <h1 className="text-white text-3xl text-center lg:text-left">
               Report #2021-0310PQ10
            </h1>
            <StatusIndicator status="Pending review" color="yellow" />
            <button
               className={`${
                  guard ? "hidden" : "flex"
               } font-medium items-center rounded-full focus:outline-none focus:bg-gray-warm-400 hover:bg-gray-warm-300 focus:text-black hover:text-black text-white border-gray-warm-300 border-2 px-4 py-1`}
            >
               <SVG src={check} className="fill-current w-5 h-5 mr-2" />
               Approve
            </button>
         </div>

         <div class="bg-gray-warm-800 rounded-sm mx-auto w-full">
            <div class="flex flex-col gap-y-6 lg:gap-y-0 relative overflow-hidden p-10 h-full">
               <div
                  class="hidden lg:flex absolute border-dashed border-gray-warm-500 h-full border"
                  style={{ left: "49.9%" }}
               />

               <TimelineItem title="Arrived On Site" time="24:60" type="note" />
               <TimelineItem
                  title="Started Shift"
                  time="24:60"
                  type="note"
                  left
               />
               <TimelineItem
                  title="Completed Checklist"
                  time="24:60"
                  type="note"
               />
               <TimelineItem
                  title="Lorem Ipsum"
                  content="Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's
                   standard dummy text ever since the 1500s, when an unknown
                   printer took a galley of type and scrambled it to make a
                   type specimen book."
                  time="24:60"
                  type="incident"
                  left
               />
               <TimelineItem
                  title="Lorem Ipsum"
                  content="Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's
                   standard dummy text ever since the 1500s, when an unknown
                   printer took a galley of type and scrambled it to make a
                   type specimen book."
                  time="24:60"
                  type="note"
               />
               <TimelineItem
                  title="Stabbing in Miss Pepper's Class"
                  time="24:60"
                  type="incident"
                  left
               />
               <TimelineItem
                  title="Shooting in Music Hallway"
                  time="24:60"
                  type="incident"
               />
            </div>
         </div>
      </>
   );
};
