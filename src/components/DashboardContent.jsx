import React from "react";
import "./styles/dashboard-content.style.less";
import { Navigate, Route, Routes } from "react-router-dom";
import Inventory from "./Inventory";

const DashboardContent = () => {
  return (
    <div className="dashboard-content-wrapper">
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/dashboard" element={<div></div>} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;
