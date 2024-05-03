import React from "react";
import SideBar from "./SideBar";
import Blogs from "./Blogs";

function Activemain({ username }) {
  return (
    <div className="activemain">
      <SideBar />
      <Blogs username={username} />
    </div>
  );
}

export default Activemain;
