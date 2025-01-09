import React from "react";
import CryptoGraph from "./CryptoGraph";

const MarketOverview = () => {
  const stats = [
    {
      value: "$3,447,580,933,211",
      label: "Market Cap",
      percentage: "-3.0%",
      percentageColor: "text-red-600",
      chartColor: "text-red-400",
      chart: "📉", // Replace with an SVG chart or image for real implementation
    },
    {
      value: "$194,947,942,831",
      label: "24h Trading Volume",
      percentage: "+2.5%",
      percentageColor: "text-green-600",
      chartColor: "text-green-400",
      chart: "📈", // Replace with an SVG chart or image for real implementation
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-[28rem]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-4 ${
            index !== stats.length - 1 && "border-b border-gray-100"
          }`}
        >
          {/* Left Section */}
          <div>
            <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500 flex items-center">
              {stat.label}
              <span className={`ml-2 ${stat.percentageColor}`}>
                {stat.percentage}
              </span>
            </p>
          </div>

          {/* Right Section */}
          {/* <div className={`text-2xl ${stat.chartColor}`}>{stat.chart}</div> */}
          <div className="w-[10rem] ">
            <CryptoGraph />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketOverview;
