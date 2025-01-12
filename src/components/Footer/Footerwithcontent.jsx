import React from "react";

const Footerwithcontent = () => {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/path-to-coingecko-logo.png"
              alt="CoinGecko Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold">CoinGecko</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            CoinGecko provides a fundamental analysis of the crypto market. In
            addition to tracking price, volume, and market capitalisation,
            CoinGecko tracks community growth, open-source code development,
            major events, and on-chain metrics.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>Crypto News</li>
            <li>Bitcoin Treasury</li>
            <li>Crypto Heatmap</li>
            <li>Crypto API</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>Request Form</li>
            <li>Advertising</li>
            <li>Candy Rewards Listing</li>
            <li>Help Center</li>
            <li>Bug Bounty</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* About CoinGecko */}
        <div>
          <h3 className="font-semibold">About CoinGecko</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>
              Careers{" "}
              <span className="text-xs bg-green-300 px-2 py-1 rounded-md">
                Join Us
              </span>
            </li>
            <li>Company Blog</li>
            <li>Branding Guide</li>
            <li>Methodology</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold">Community</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>X/Twitter</li>
            <li>Telegram Chat</li>
            <li>Instagram</li>
            <li>Reddit</li>
            <li>Discord</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footerwithcontent;
