import React from "react";
import Searchbar from "./Searchbar";
import Maindashboardstart from "./Maindashboardstart";

function Dashboardside() {
  return (
    <section className="dashboard">
      <Searchbar />
      <Maindashboardstart />
    </section>
  );
}

export default Dashboardside;
