import React from "react";

const TopGainers = () => {
  const gainers = [
    {
      name: "Steem Dollars",
      price: "$10.88",
      percentage: "167.9%",
      icon: "https://via.placeholder.com/24", // Replace with actual icon URL
    },
    {
      name: "Strike",
      price: "$19.40",
      percentage: "155.7%",
      icon: "https://via.placeholder.com/24", // Replace with actual icon URL
    },
    {
      name: "pippin",
      price: "$0.09197",
      percentage: "146.3%",
      icon: "https://via.placeholder.com/24", // Replace with actual icon URL
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-96">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 font-bold text-lg">
          <span>🚀</span>
          <span>Top Gainers</span>
        </div>
        <a
          href="#"
          className="text-blue-500 text-sm font-semibold hover:underline"
        >
          View more &gt;
        </a>
      </div>

      {/* Gainers List */}
      <div className="space-y-4">
        {gainers.map((gainer, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-2"
          >
            {/* Icon and Details */}
            <div className="flex items-center">
              <img
                src={gainer.icon}
                alt={`${gainer.name} Icon`}
                className="w-6 h-6 mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {gainer.name}
                </p>
                <p className="text-xs text-gray-500">{gainer.price}</p>
              </div>
            </div>

            {/* Percentage */}
            <p className="text-sm font-bold text-green-600">
              {gainer.percentage} <span className="text-xs">▲</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainers;
