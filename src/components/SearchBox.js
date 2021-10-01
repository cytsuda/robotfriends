import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="bg-gray-800 rounded-full relative w-3/12 border border-gray-100 border-opacity-25">
      <input
        type="search"
        placeholder="Search robots"
        className="
          w-full
          bg-transparent
          px-5 pt-2 pb-3
          text-xl
          focus:outline-none
          focus:ring
          focus:border-blue-300
          rounded-full
        "
        onChange={searchChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-0 right-4 transform translate-y-2/4 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
