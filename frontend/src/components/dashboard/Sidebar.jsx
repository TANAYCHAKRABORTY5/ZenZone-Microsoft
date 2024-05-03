import React from "react";

function Sidebar() {
  return (
    <section class="sidebardashboard">
      <div class="logodashboard">
        <img src="../dashboardimages/medical.png" alt="" />
        <h2>Mind Wellness</h2>
      </div>
      <div class="optiondashboard">
        <a href="">
          <img src="../dashboardimages/research.png" alt="" /> overvieew
        </a>
        <a href="">
          <img src="../dashboardimages/appointment.png" alt="" />
          appointment
        </a>
        <a href="">
          <img src="../dashboardimages/doctor.png" alt="" /> doctor
        </a>
        <a href="">
          <img src="../dashboardimages/results.png" alt="" />
          Psychology/Rsults
        </a>
        <a href="">
          <img src="../dashboardimages/pie-chart.png" alt="" /> chats
        </a>
        <h3 style={{ fontSize: "20px", marginLeft: "10px" }}>ACCOUNTS</h3>
        <a href="">
          <img src="../dashboardimages/gear.png" alt="" /> settings
        </a>
        <a href="">
          <img src="../dashboardimages/logout.png" alt="" /> logouts
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
