import "../../../App.css";
const CoinDatax = ({ index }) => {
  return (
    <>
      <div
        className="flex items-center justify-between border-t-2 border-gray-300  mx-auto mt-1  "
        key={index}
      >
        {/* Star and Rank */}
        <div className="flex items-center gap-2  w-[25%]">
          <button className="text-gray-400">⭐</button>
          <span className="text-gray-700 font-medium">1</span>
        </div>

        {/* Coin Info */}
        <div className="flex items-center gap-2 w-[25%]">
          <img
            src="/path-to-bitcoin-logo.png"
            alt="Bitcoin Logo"
            className="w-6 h-6"
          />
          <div className="flex">
            <div className="font-bold text-gray-800">Bitcoin</div>
            <div className="text-gray-500 text-sm">BTC</div>
          </div>
        </div>

        {/* Price and Change */}
        <div className="text-right  w-[25%] flex">
          <div className="text-gray-800 font-medium">$94,195</div>
          <div className="text-red-500">-1.31%</div>
        </div>

        {/* Market Cap, Volume, Supply */}
        <div className="text-right flex gap-x-20 w-[25%]">
          <div>$1.87T</div>
          <div>$17.75B</div>
          <div>BTC 19.81M</div>
        </div>

        {/* Chart Placeholder */}
        <div className=" h-10 bg-green-100 rounded-lg w-[25%]">
          {/* Insert Chart here */}
          {/* <CryptoGraph /> */}
        </div>
      </div>
    </>
  );
};

export default CoinDatax;
