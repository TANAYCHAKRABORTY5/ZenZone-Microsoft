import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

function SideBar() {
  return (
    <div className="sidebar" style={{ borderRight: "2px solid black" }}>
      <Top />
      <Bottom />
    </div>
  );
}

export default SideBar;
