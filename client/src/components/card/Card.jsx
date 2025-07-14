import React from "react";

const Card = ({ cards }) => {
  return (
    <div className="flex gap-8 py-5">
      {cards.map((item, index) => (
        <a
          key={index}
          className="p-8  max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img
            src={item.image}
            className="shadow rounded-lg overflow-hidden border"
            alt={item.title || "Card image"}
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">{item.title}</h4>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                aria-label={`Start creating ${item.title}`}
              >
                Start Creating
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>

    // <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    //   {cards.map((item, index) => (
    //     <div
    //       key={index}
    //       className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
    //     >
    //       <div className="relative">
    //         <img
    //           src={item.image}
    //           alt={item.title}
    //           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    //         />
    //         <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-full text-sm font-medium">
    //           {/* {item.category} */}
    //         </div>
    //       </div>
    //       <div className="p-6">
    //         <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
    //           {item.title}
    //         </h4>
    //         <div className="space-y-2 text-sm text-gray-600 mb-4">
    //           <div className="flex items-center">
    //             <span className="w-4 h-4 mr-2 bg-gray-300 rounded-full inline-block"></span>
    //             <span>
    //               {/* {new Date(item.start_date).toLocaleDateString(undefined, {
    //             year: "numeric",
    //             month: "short",
    //             day: "numeric",
    //           })} */}
    //             </span>
    //           </div>
    //           <div className="flex items-center">
    //             <span className="w-4 h-4 mr-2 bg-gray-300 rounded-full inline-block"></span>
    //             <span>
    //               {/* {new Date(item.start_date).toLocaleTimeString([], {
    //             hour: "2-digit",
    //             minute: "2-digit",
    //           })} */}
    //             </span>
    //           </div>
    //           <div className="flex items-center">
    //             <span className="w-4 h-4 mr-2 bg-gray-300 rounded-full inline-block"></span>
    //             {/* <span>{item.location}</span> */}
    //           </div>
    //           <div className="flex items-center">
    //             <span className="w-4 h-4 mr-2 bg-gray-300 rounded-full inline-block"></span>
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <span className="text-xl font-bold text-blue-600">
    //             {/* ৳ {item.ticket_price} */}
    //           </span>
    //           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    //             Book Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Card;
