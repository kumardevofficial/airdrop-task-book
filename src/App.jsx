import { Outlet } from "react-router-dom";
import "./App.css";
import DropList from "./components/DropList";
import Header from "./components/Header";
import PopUpBox from "./components/Popup";
import { useState } from "react";
import ATBFooter from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ATBFooter />
    </>
  );
}

export default App;
