import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  onSearch(searchItem);

  return (
    <div className="flex pt-10 justify-center">
      <div className="relative w-[70%]">
        <FaSearch className="absolute top-2.5 left-3 h-5 w-5 text-gray-500" />
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="search..."
          className="rounded-md pl-10 pr-4 py-2 border border-gray-300 focus:outline-none w-full bg-white"
        />
      </div>
    </div>
  );
};

export default Search;
