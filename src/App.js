import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AlertNotification from "./Shared/components/AlertNotification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
