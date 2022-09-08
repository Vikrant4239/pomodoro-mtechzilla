import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";
import { useState } from "react";
import Changes from "./Changes";
import SettingContext from "./SettingContext";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changes" element={<Changes />} />
      </Routes>
    </div>
  );
}

export default App;
