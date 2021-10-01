import React from "react";

import Card from "./Card";

const EmptyComp = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center gap-8 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-7xl">No robot found!</p>
      </div>
    </div>
  );
};

const CardList = ({ robots, search }) => {
  if (!robots.length) {
    return <EmptyComp />;
  } else
    return (
      <div className="grid grid-cols-5 gap-10 p-4">
        {robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
            username={robot.username}
          />
        ))}
      </div>
    );
};

export default CardList;
