import "./App.css";
import React from "react";
// import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/profile" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
