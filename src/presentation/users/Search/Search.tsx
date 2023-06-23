import React from "react";
import { SearchIcon } from "../../../assets/icons";

export const Search = () => {
  return (
    <>
      <div className="relative w-full flex-2">
        <input
          type="text"
          id="large-input"
          placeholder="Поиск по Email"
          className="block w-full p-1 px-3 bg-white text-gray-900 border border-gray rounded-[10px] bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span className="absolute right-3 top-2">
          <SearchIcon />
        </span>
      </div>
    </>
  );
};
