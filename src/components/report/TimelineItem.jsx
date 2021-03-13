import React from "react";

export default ({ title, content, time, type, left }) => {
   return (
      <div
         class={`flex flex-col text-center lg:text-left lg:flex-row justify-between ${
            left ? "lg:flex-row-reverse" : ""
         } items-center w-full`}
      >
         <div class="order-1 w-0 lg:w-5/12" />
         <div
            class={`z-20 text-sm font-bold pointer-events-none flex items-center order-1 bg-white ring-gray-800 ring-8 w-12 h-12 rounded-full ${
               type === "note" ? "bg-gray-warm-200" : "bg-blue-500 text-white"
            }`}
         >
            <h1 class="mx-auto font-semibold">{time}</h1>
         </div>
         <div
            class={`order-1 ${
               type === "note" ? "bg-gray-warm-200" : "bg-blue-500"
            } rounded-lg w-full lg:w-5/12 px-6 py-4`}
         >
            <h3
               class={`${content ? "mb-3" : ""} font-bold text-xl ${
                  type === "note" ? "text-gray-warm-900" : "text-white"
               }`}
            >
               {title}
            </h3>
            <p
               class={`text-sm leading-snug tracking-wide ${
                  type === "note" ? "text-gray-warm-800" : "text-white"
               } text-opacity-100`}
            >
               {content}
            </p>
         </div>
      </div>
   );
};
