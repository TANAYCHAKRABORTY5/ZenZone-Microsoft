import React from "react";

function Searchbar() {
  return (
    <div class="searchbar">
      <div class="searchdash">
        <img src="../dashboardimages/search.png" alt="sear" />
        <input type="text" />
      </div>
      <div class="notify">
        <img src="../dashboardimages/notification.png" alt="not" />
      </div>
      <div class="profileimg">
        <img src="../dashboardimages/hacker.png" alt="img" />
      </div>
      <div class="detail">
        <h4 id="clinetname">TANAY</h4>
      </div>
    </div>
  );
}

export default Searchbar;
