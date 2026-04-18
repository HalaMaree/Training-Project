import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
