import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DropList from "./components/DropList.jsx";
import HomePage from "./components/HomePage.jsx";
import Faucet from "./components/Faucet/Faucet.jsx";
import Chain from "./components/Chain/Chain.jsx";
import News from "./components/News/News.jsx";
import Market from "./components/Market/Market.jsx";
import CommunityPost from "./components/CommunityPost/CommunityPost.jsx";
import Signup from "./components/loginAndSignup/Signup.jsx";
import { IoLogIn } from "react-icons/io5";
import Userlogin from "./components/loginAndSignup/Login.jsx";
import TopGainers from "./components/MarketTrendingHeader/TopGainers.jsx";
import MarketTrend from "./components/MarketTrendingHeader/MarketTrend.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MarketTrend />,
      },
      {
        path: "/airdrop",
        element: <DropList />,
      },
      {
        path: "/faucet",
        element: <Faucet />,
      },
      {
        path: "/chain",
        element: <Chain />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/communitypost",
        element: <CommunityPost />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Userlogin />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
