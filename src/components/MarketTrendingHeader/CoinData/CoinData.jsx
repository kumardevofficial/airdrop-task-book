import React from "react";
import CryptoGraph from "../CryptoGraph";
import CoinDatax from "./CoinDatax";

const CoinDataRow = () => {
  let myarr = [1, 2, 3, 3, 4, 5];
  return (
    <>
      <div className="flex items-center justify-between  w-[93%]  mx-auto mt-6">
        {/* Star and Rank */}
        <div className="flex items-center gap-2">
          {/* <button className="text-gray-400">⭐</button> */}
          <span className="text-gray-700 font-medium">#</span>
        </div>

        {/* Coin Info */}
        <div className="flex items-center gap-2">
          Name
          {/* <img
            src="/path-to-bitcoin-logo.png"
            alt="Bitcoin Logo"
            className="w-6 h-6"
          />
          <div>
            <div className="font-bold text-gray-800">Bitcoin</div>
            <div className="text-gray-500 text-sm">BTC</div>
          </div> */}
        </div>

        {/* Price and Change */}
        <div className="text-right flex gap-x-2">
          <div className="text-gray-800 font-medium">Price</div>
          <div className="text-red-500">Chg(24hr)</div>
        </div>

        {/* Market Cap, Volume, Supply */}
        <div className="text-right  flex gap-x-16">
          <div>Market Cap</div>
          <div>Volume (24H)</div>
          <div>Circ. Supply</div>
        </div>

        {/* Chart Placeholder */}
        <div className="w-40 h-10 bg-green-100 rounded-lg">
          {/* Insert Chart here */}
          {/* <CryptoGraph /> */}
          Price Graph (7D)
        </div>
      </div>
      {<CoinDatax />}
      {<CoinDatax />}
      {<CoinDatax />}
      {<CoinDatax />}
      {<CoinDatax />}
    </>
  );
};

export default CoinDataRow;
