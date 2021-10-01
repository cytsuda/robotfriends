import React from "react";

const Card = ({ id, name, email, username }) => {
  return (
    <div
      className="bg-gray-700
      border
      border-black
      border-opacity-50
      rounded-lg
      transform hover:scale-105
      cursor-pointer
      shadow-lg
      overflow-hidden
      transition duration-150 ease-in-out"
    >
      <div className="relative">
        <img src={`https://robohash.org/${id}?200x200`} alt={name} />
        <p className="bg-gray-800 absolute inset-x-0 bottom-0 opacity-80 italic text-center">
          {username}
        </p>
      </div>
      <div className="pt-5 pb-6 px-6 bg-gray-600">
        <h2 className="text-2xl font-extrabold">{name}</h2>
        <p className="italic">{email}</p>
      </div>
    </div>
  );
};

export default Card;
