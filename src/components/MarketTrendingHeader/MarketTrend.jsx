import CoinDataRow from "./CoinData/CoinData";
import CoinSearchBar from "./Coinsearch/CoinSearch";
import MarketOverview from "./Marketoverview";
import TopGainers from "./TopGainers";
import Trending from "./Trending";

const MarketTrend = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 w-[95%] mx-auto mt-4">
        <MarketOverview />
        <TopGainers />
        <Trending />
      </div>
      <CoinSearchBar />
      <CoinDataRow />
    </>
  );
};

export default MarketTrend;
