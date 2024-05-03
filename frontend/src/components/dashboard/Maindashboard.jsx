import React from "react";
import Sidebar from "./Sidebar";
import "./index.css";
import Dashboardside from "./Dashboardside";
function Maindashboard() {
  return (
    <div className="maindashboardscreen">
      <Sidebar />
      <Dashboardside />
    </div>
  );
}

export default Maindashboard;
