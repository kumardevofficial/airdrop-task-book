import React from "react";
import CryptoGraph from "../CryptoGraph";
import CoinDatax from "./CoinDatax";
import "../../../App.css";

const CoinDataRow = () => {
  let myarr = [1, 2, 3, 3, 4, 5];
  return (
    <div className=" overflow-x-auto hide-scrollbar m-auto box-border scroll-auto hide-scrollbar w-[95%] md:w-[93%]">
      <div className="flex items-center justify-between   mx-auto mt-6 ">
        {/* Star and Rank */}
        <div className="flex items-center gap-2 w-[25%]">
          {/* <button className="text-gray-400">⭐</button> */}
          <span className="text-gray-700 font-medium">#</span>
        </div>

        {/* Coin Info */}
        <div className="flex items-center gap-2 w-[25%]">
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
        <div className="text-right flex gap-x-2 w-[25%]">
          <div className="text-gray-800 font-medium">Price</div>
          <div className="text-red-500">Chg(24hr)</div>
        </div>

        {/* Market Cap, Volume, Supply */}
        <div className="text-right  flex gap-x-16 w-[25%]">
          <div>Market Cap</div>
          <div>Volume (24H)</div>
          <div>Circ. Supply</div>
        </div>

        {/* Chart Placeholder */}
        <div className=" h-10 bg-green-100 rounded-lg w-[25%]">
          {/* Insert Chart here */}
          {/* <CryptoGraph /> */}
          Price Graph (7D)
        </div>
      </div>
      <div>
        {<CoinDatax />}
        {<CoinDatax />}
        {<CoinDatax />}
        {<CoinDatax />}
        {<CoinDatax />}
      </div>
    </div>
  );
};

export default CoinDataRow;
