import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DropList from "./components/DropList.jsx";
import DropListGalxe from "./components/DropListGalxe.jsx";
import HomePage from "./components/HomePage.jsx";
import Faucet from "./components/Faucet/Faucet.jsx";
import Chain from "./components/Chain/Chain.jsx";
import News from "./components/News/News.jsx";
import Market from "./components/Market/Market.jsx";
import CommunityPost from "./components/CommunityPost/CommunityPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
