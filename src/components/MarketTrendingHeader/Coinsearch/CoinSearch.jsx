import React from "react";

const CoinSearchBar = () => {
  return (
    <div className="flex items-center  p-2 rounded-lg shadow-sm shadow-gray-400  w-[93%] mx-auto mt-5 border-2 border-gray-300">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l4-4m0 0l4-4m-4 4H4m16 4v-4m0 0V8m0 4H8"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter coins..."
          className="ml-2 w-full bg-transparent focus:outline-none"
        />
        <button className="ml-2">▼</button>
      </div>

      {/* Layout Button */}
      <button className="ml-4 flex items-center gap-2">📦 LAYOUT</button>

      {/* Filters Button */}
      <button className="ml-4 flex items-center gap-2">🎛️ FILTERS</button>

      {/* Presets Button */}
      <button className="ml-4 flex items-center gap-2">⚙️ PRESETS</button>

      {/* Download Data */}
      <a href="#" className="ml-4 text-blue-500 hover:underline">
        Download Data
      </a>
      <button className="ml-2 p-1 bg-gray-200 rounded-lg">⬇️</button>

      {/* Currency Selector */}
      <div className="ml-4 flex items-center gap-2">USD ▼</div>

      {/* Navigation Arrows */}
      <div className="ml-4 flex items-center gap-2">⬅️ ➡️</div>
    </div>
  );
};

export default CoinSearchBar;
