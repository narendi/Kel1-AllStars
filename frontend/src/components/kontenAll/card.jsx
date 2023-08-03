import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="pr-6 ">
      <div className="bg-white shadow-md rounded-lg  p-8">
        <div className="pr-6 ">
          <div className="">
            <img className="w-20 h-20 rounded-full" src={image} />
          </div>
          <div className="mt-16 mb-11 text-left">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
