import { Outlet } from "react-router-dom";
import "./App.css";
import DropList from "./components/DropList";
import Header from "./components/Header";
import PopUpBox from "./components/Popup";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
