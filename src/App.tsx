import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
