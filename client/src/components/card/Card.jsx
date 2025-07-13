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
  );
};

export default Card;
