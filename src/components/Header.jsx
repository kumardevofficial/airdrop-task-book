import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-yellow-300 px-6 py-3 rounded-b-2xl shadow-md z-50 relative">
      <div className="flex justify-between items-center box-border md:px-[4rem]">
        {/* Header Title */}
        <h1 className="text-xl font-bold">
          <Link to="/">My App</Link>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-semibold">
            <li>
              <Link to="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/airdrop" className="hover:text-gray-700">
                Airdrop
              </Link>
            </li>
            <li>
              <Link to="/faucet" className="hover:text-gray-700">
                Faucet
              </Link>
            </li>
            <li>
              <Link to="/chain" className="hover:text-gray-700">
                Chain
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-700">
                News
              </Link>
            </li>
            <li>
              <Link to="/market" className="hover:text-gray-700">
                Market
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-700">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
          <nav className="bg-yellow-300 w-4/5 max-w-sm p-6 mt-10 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform translate-y-0 opacity-100">
            <ul className="space-y-4 text-lg font-medium">
              <li>
                <Link
                  to="/"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/airdrop"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Airdrop
                </Link>
              </li>
              <li>
                <Link
                  to="/faucet"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Faucet
                </Link>
              </li>
              <li>
                <Link
                  to="/chain"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Chain
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/market"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Market
                </Link>
              </li>
              <li>
                <Link
                  to="/communitypost"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Community Post
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block hover:bg-yellow-400 px-3 py-2 rounded"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
