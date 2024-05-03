import React from "react";

function Top() {
  return (
    <div class="top">
      <div class="profile">
        <div class="logoimg">
          <img src="..//blogimages/logo.png" alt="" />
          <h2 className="blogh2">ZenZone</h2>
        </div>
        <div class="mail">
          <p class="userhere"></p>
          <img src="../blogimages/caret-down.png" alt="" />
        </div>
      </div>
      <div class="search">
        <img src="../blogimages/loupe.png" alt="" />
        <input type="text" placeholder="search" />
      </div>
      <div class="navitem">
        <a href="" class="item">
          <img src="../blogimages/home-4--home-house-roof-shelter.png" alt="" />
          <h2 className="blogh2">Home</h2>
        </a>
        <a href="" class="item">
          <img
            src="../blogimages/ringing-bell-notification--notification-vibrate-ring-sound-alarm-alert-bell-noise.png"
            alt=""
          />
          <h2 className="blogh2">Notification</h2>
        </a>
        <a href="" class="item">
          <img src="../blogimages/home-4--home-house-roof-shelter.png" alt="" />
          <h2 className="blogh2">My Blogs</h2>
        </a>
        <a href="" class="item center">
          <h2 className="blogh2">Community</h2>
        </a>
        <a href="" class="item center">
          <h2 className="blogh2">Group</h2>
        </a>
        <a href="" class="item center">
          <h2 className="blogh2">Friends</h2>
        </a>
        <a href="" class="item activeblog">
          <h2 className="blogh2">Today I Learned</h2>
        </a>
      </div>
    </div>
  );
}

export default Top;
