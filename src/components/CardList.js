import React from "react";

import Card from "./Card";

const EmptyComp = () => {
  console.log("CardList");
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

const Loading = () => {
  return (
    <div className="flex justify-center gap-4 opacity-50">
      <svg
        className="animate-spin -ml-1 mr-3 h-12 w-12 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p className="text-5xl">Loading</p>
    </div>
  );
};

const CardList = ({ robots, isPending }) => {
  if (isPending) {
    return <Loading />;
  } else if (!robots.length) {
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
