import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[239px] mr-5 h-[290px] mr-5 mt-5">
      <img
        className="w-20 h-20 mt-5 ml-5 rounded-full object-cover"
        src={image}
        alt="Card Image"
      />
      <div className="p-4 mt-12">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
