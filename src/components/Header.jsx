import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[98%] m-auto mt-3  bg-yellow-300 px-4 box-border py-3 rounded-2xl ">
        <ul className="flex justify-between font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/airdrop">Airdrop</Link>
          </li>
          <li>
            <Link to="/faucet">Faucet</Link>
          </li>
          <li>
            <Link to="/chain">Chain</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/communitypost">Community Post</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
